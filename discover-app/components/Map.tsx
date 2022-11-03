import React from "react";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

export interface MapProps {
  children: React.ReactNode[];
}

export interface MapState {
  location: Location.LocationObject;
}

export default class Map extends React.Component<MapProps, {}> {
  public static defaultProps = {
    children: [],
  };

  // constructor(props: MapProps) {
  //   super(props);

  //   this.state = {
  //     location: new ()
  //   };
  // }

  public render(): React.ReactNode {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.813676,
          longitude: -2.4747,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        // mapType="hybrid"
      >
        {this.props.children}
      </MapView>
    );
  }
}
