// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScanScreen from './secondScreen';
import SplashScreen from './FirstScreen';
import Restscreen from './thridScreen';
import Final from './final';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WELCOME" component={SplashScreen} />
        <Stack.Screen name="ScanCode" component={ScanScreen} />
        <Stack.Screen name="MENU" component={Restscreen} />
        <Stack.Screen name="Conformation" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
