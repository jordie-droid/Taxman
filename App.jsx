/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/splash';
import Maps from './screens/Maps';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Spash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Maps"
          component={Maps}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
