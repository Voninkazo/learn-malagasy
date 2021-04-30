import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LearnScreen from '../screenContainers/LearnScreen';
import HomeScreenContainer from '../screenContainers/HomeScreen';
import LearningResult from '../screenContainers/LearningResult';

const Stack = createStackNavigator();

const ScreenSatck = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreenContainer} />
        <Stack.Screen name="LearnScreen" component={LearnScreen} />
        <Stack.Screen name="LearningResult" component={LearningResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenSatck;
