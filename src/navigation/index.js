import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LearnScreen from '../screens/LearnScreen';
import HomeScreenContainer from '../screens/HomeScreen';

const Stack = createStackNavigator();

const ScreenSatck = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreenContainer} />
        <Stack.Screen name="LearnScreen" component={LearnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenSatck;
