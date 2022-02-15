import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AsmaulHusnaScreen from './src/Screen/AsmaulHusnaScreen';
import DetailsScreen from './src/Screen/DetailsScreen';
import HomeScreen from './src/Screen/HomeScreen';
import ListScreen from './src/Screen/ListScreen';

const Stack=createNativeStackNavigator();
const App = () => {
  
   
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
      <Stack.Screen name="AsmaulHusna" component={AsmaulHusnaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;