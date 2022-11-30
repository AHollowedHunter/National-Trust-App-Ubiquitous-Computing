import { LocationObject } from "expo-location";
import sanitizeHtml from "sanitize-html";
import {
  Activity,
  DetailedPlace,
  Directions,
  NTOpenStatus,
  NTPlace,
  OpeningCalendar,
  PlaceCategory,
} from "../config/types";
import defaultPlaceData from "./defaultPlaces.json";

const ALL_PLACES_JSON_URL =
  "https://www.nationaltrust.org.uk/api/search/places?query=&placeSort=distance&milesRadius=1000&pageStartIndex=0&pageSize=1000&maxPlaceResults=1000&maxLocationPageResults=0";
// Does not include a &lat=50.6884&lon=-1.95622
const DETAILED_PLACE_BASE_URL =
  "https://www.nationaltrust.org.uk/_next/data/uBxjvEgvJKxYrM0aP5lGk";

/**
 * Remove all HTML tags and trim start/end
 * @param input string to sanitize
 * @returns sanitized string
 */
const sanitizeAllHtmlAndTrim = (input: any) =>
  sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();

/**
 * Default places list without open status. Used while waiting on current data
 */
export const defaultPlaces: NTPlace[] = JSON.parse(
  JSON.stringify(defaultPlaceData)
);

/**
 * Gets a list of all the National Trust places
 * @returns an array of NTPlace
 */
export async function getPlaces(
  userLocation: LocationObject | undefined
): Promise<NTPlace[]> {
  let { latitude, longitude } = userLocation?.coords ?? {
    latitude: 50.6884,
    longitude: -1.95622,
  };

  let placeJson = await getJsonFromUrl(
    ALL_PLACES_JSON_URL + `&lat=${latitude}&lon=${longitude}`
  );

  if (placeJson) {
    const places: NTPlace[] = [];
    // The data is provided as a single object, with each place as a child object
    // with its ID as a key. Iterate through each objects value.
    // Object.values(placeJson).forEach((place) => {
    //   places.push(convertPlaceData(place));
    // });
    placeJson.pagedMultiMatch.results.forEach((place: any) => {
      places.push(convertPlaceData(place, userLocation));
    });

    return places;
  } else {
    return defaultPlaces;
  }
}

/**
 * Get the current place data from api
 * @returns place data as JSON
 */
const getJsonFromUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.status == 404) {
      throw "Returned 404 when retrieving data from: " + url;
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error getting JSON data: " + error);
  }
};

/**
 * Map given data to own type
 * @param raw JSON Object value of a place
 * @returns NTPlace object
 */
function convertPlaceData(
  raw: any,
  userLocation: LocationObject | undefined
): NTPlace {
  // Activity Tags are provided as a single string CSV, convert now for ease
  let activityTags: Activity[] =
    defaultPlaces.find((place) => place.id == parseInt(raw.id.value))
      ?.activityTags ?? [];

  let categories: PlaceCategory[] = raw.tagRefs.map((tag: any) => {
    if (Object.keys(PlaceCategory).includes(tag))
      return PlaceCategory[tag as keyof typeof PlaceCategory];
  });

  let place: NTPlace = {
    id: parseInt(raw.id.value),
    title: raw.title,
    subTitle: raw.subTitle,
    description: raw.description,
    imageUrl: raw.imageUrl,
    imageDescription: raw.imageDescription,
    websiteUrl: raw.websiteUrl,
    websiteUrlPath: raw.websiteUrlPath,
    location: { longitude: raw.location.lon, latitude: raw.location.lat },
    activityTags: activityTags,
    openStatus:
      NTOpenStatus[
        raw.dayOpeningStatus[0]?.openingTimeStatus as keyof typeof NTOpenStatus
      ] ?? NTOpenStatus.UNKNOWN,
    region: raw.cmsRegion,
    categories: categories,
  };
  if (userLocation)
    place.distance = roundDistance(
      calculateDistance(userLocation.coords, place.location) * 0.0006213712
    );

  return place;
}

export async function getDetailedPlace(
  place: NTPlace
): Promise<DetailedPlace | undefined> {
  let url = DETAILED_PLACE_BASE_URL + place.websiteUrlPath + ".json";
  let placeJson = await getJsonFromUrl(url);

  if (!placeJson) return undefined;

  let placeData = placeJson.pageProps.appContext.place.data;

  let detailedPlace: DetailedPlace = {
    id: place.id,
    longDescription: sanitizeAllHtmlAndTrim(
      placeData.description.htmlDescription
    ),
    emergencyNotice: placeData.emergencyNotice,
    timedEntryUrl: placeData.timedEntryUrl,
    openingCalendar: convertCalendar(placeData._embedded.opening),
    directions: convertDirections(placeData._embedded.directions.directions),
    accessTags: placeData._embedded.accessTags.tags,
    facilities: placeData._embedded.placeFacilities.facilities,
  };

  // If no tags, mark as undefined
  detailedPlace.accessTags?.length == 0
    ? (detailedPlace.accessTags = undefined)
    : null;
  detailedPlace.facilities?.length == 0
    ? (detailedPlace.facilities = undefined)
    : null;

  detailedPlace.facilities = detailedPlace.facilities?.filter(
    (facility) => !facility.keyFacility
  );

  return detailedPlace;
}

function convertCalendar(rawOpening: any): OpeningCalendar {
  return {
    openingTimesNote: rawOpening.openingTimesNote,
    days: Object.entries(rawOpening.days).map(([key, value]: any) => {
      return {
        date: key,
        status: value.status,
        assets: value.assets,
      };
    }),
  };
}

function convertDirections(rawDirections: any): Directions {
  let directions: Directions = {
    road: rawDirections.road
      ? {
          description: rawDirections.road.htmlDescription,
          parking: rawDirections.road.parking,
          satnav: rawDirections.road.satnav,
        }
      : undefined,
    foot: rawDirections.foot
      ? {
          description: sanitizeAllHtmlAndTrim(
            rawDirections.foot.htmlDescription
          ),
        }
      : undefined,
    ferry: rawDirections.ferry
      ? {
          description: sanitizeAllHtmlAndTrim(
            rawDirections.ferry.htmlDescription
          ),
        }
      : undefined,
    bus: rawDirections.bus
      ? {
          description: sanitizeAllHtmlAndTrim(
            rawDirections.bus.htmlDescription
          ),
        }
      : undefined,
    cycle: rawDirections.cycle
      ? {
          description: sanitizeAllHtmlAndTrim(
            rawDirections.cycle.htmlDescription
          ),
        }
      : undefined,
    train: rawDirections.train
      ? {
          description: sanitizeAllHtmlAndTrim(
            rawDirections.train.htmlDescription
          ),
        }
      : undefined,
  };
  return directions;
}

/**
 * Get the distance in meters between two points
 * @param coordinate1
 * @param coordinate2
 * @returns number: Distance in meters (m)
 */
export function calculateDistance(
  {
    latitude: latitude1,
    longitude: longitude1,
  }: {
    latitude: number;
    longitude: number;
  },
  {
    latitude: latitude2,
    longitude: longitude2,
  }: {
    latitude: number;
    longitude: number;
  }
) {
  const R = 6371e3; // metres
  const φ1 = (latitude1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (latitude2 * Math.PI) / 180;
  const Δφ = ((latitude2 - latitude1) * Math.PI) / 180;
  const Δλ = ((longitude2 - longitude1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  return d;
}

/**
 * Reduce to 1 decimal place
 * @param value initial value
 * @returns value reduced to maximum 1 decimal place
 */
function roundDistance(value: number): number {
  return Math.ceil(value);
}
