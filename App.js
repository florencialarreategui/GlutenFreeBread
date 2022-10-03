import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation';
export default function App() {
  const [loaded] = useFonts({
    "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf")
  })
  if (!loaded){
    return <ActivityIndicator/>
  }
  return (
    <AppNavigator/>
  );
}


