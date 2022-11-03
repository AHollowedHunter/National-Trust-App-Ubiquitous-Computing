import React from "react";
import MapView, { Marker } from "react-native-maps";

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObjectCoords,
} from "expo-location";

export interface MapProps {
  children: React.ReactNode[];
}

export interface MapState {
  location: LocationObjectCoords;
}

export default class Map extends React.Component<MapProps, MapState> {
  public static defaultProps = {
    children: [],
  };

  constructor(props: MapProps) {
    super(props);

    this.state = {
      location: {
        longitude: 50.6884,
        latitude: -1.95622,
      } as LocationObjectCoords,
    };
  }

  async componentDidMount(): Promise<void> {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // setErrorMsg("Permission to access location was denied");
      return;
    }

    let position = await getCurrentPositionAsync();
    this.state = {
      location: position.coords,
    };
  }

  public render(): React.ReactNode {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.location.latitude,
          longitude: this.state.location.longitude,

          // latitude: 50.6884,
          // longitude: -1.95622,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation={true}
        // followsUserLocation={true}
        mapType="standard"
      >
        {this.props.children}
      </MapView>
    );
  }
}
