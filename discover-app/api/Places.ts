import { Activity, NTOpenStatus, NTPlace, NTRegion } from "../config/types";
import defaultPlaceData from "./defaultPlaces.json";

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
export async function getPlaces(): Promise<NTPlace[]> {
  let placeJson = await getPlaceJson();

  if (placeJson) {
    const places: NTPlace[] = [];
    // The data is provided as a single object, with each place as a child object
    // with its ID as a key. Iterate through each objects value.
    Object.values(placeJson).forEach((place) => {
      places.push(convertPlaceData(place));
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
const getPlaceJson = async () => {
  try {
    // Original URL used before NT changed website
    // let url = "https://www.nationaltrust.org.uk/search/data/all-places"
    let url =
      "https://web.archive.org/web/20220925170256id_/https://www.nationaltrust.org.uk/search/data/all-places";

    const response = await fetch(url);
    if (response.status == 404) {
      throw "Returned 404 when retrieving current data.";
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error getting current place data: " + error);
  }
};

/**
 * Map given data to own type
 * @param raw JSON Object value of a place
 * @returns NTPlace object
 */
function convertPlaceData(raw: any): NTPlace {
  // Activity Tags are provided as a single string CSV, convert now for ease
  let activityTags: Activity[] = [];
  if (raw.activityTagsAsCsv) {
    activityTags = raw.activityTagsAsCsv.split(",").map((tag: string) => {
      return tag.trim();
    });
  }

  let place: NTPlace = {
    id: parseInt(raw.id),
    title: raw.title,
    subTitle: raw.subTitle,
    description: raw.description,
    imageUrl: raw.imageUrl,
    imageDescription: raw.imageDescription,
    websiteUrl: raw.websiteUrl,
    location: raw.location,
    activityTags: activityTags,
    openStatus:
      raw.openingTimeStatus != undefined
        ? (raw.openingTimeStatus as NTOpenStatus)
        : NTOpenStatus.Unknown,
    region: raw.cmsRegion as NTRegion,
  };

  return place;
}
