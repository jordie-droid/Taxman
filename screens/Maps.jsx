/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import MapViewDirections from 'react-native-maps-directions';
import {PermissionsAndroid} from 'react-native';
import variables from '../env/env';

const Maps = () => {
  const [trakingCoordonate, setTrackingCoordonate] = useState({
    origin: {
      latitude: -4.3217055,
      longitude: 15.3620826,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    destination: {
      latitude: -5.0610453,
      longitude: 18.8087443,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const mapRef = useRef();

  const {origin, destination} = trakingCoordonate;

  const getCurrentPos = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This App needs access to your location ' +
            'so we can know where you are.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        })
          .then(location => {
            console.log('---------------');
            console.log(location);
          })
          .catch(error => {
            const {code, message} = error;
            console.warn(code, message);
          });
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  getCurrentPos();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <MapView ref={mapRef} style={styles.map} initialRegion={origin}>
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={variables.GOOGLE_MAPS_KEY}
          strokeWidth={5}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            });
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '70%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Maps;
