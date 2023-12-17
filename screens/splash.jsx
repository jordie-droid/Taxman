/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import assets from '../assets';

const Splash = ({navigation}) => {
  console.log(assets.images.logo);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Maps');
    }, 5000);
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Text>From JLTech</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    position: 'relative',
    top: '35%',
  },
});

export default Splash;
