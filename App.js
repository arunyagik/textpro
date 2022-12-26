
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './src/components/screens/Registration';
import Login from './src/components/screens/Login'
import HomeScreen from './src/components/screens/HomeScreen';
  
const Stack=createNativeStackNavigator()

    export default function App(props) {
     
     
     
      return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false}}    >
        <Stack.Screen  name="Registration" component={Registration}/>     
        <Stack.Screen  name="LoginScreen" component={Login}/>     
           <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    
      );
    }