import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import CategoryScreen from '../screens/category/CategoryScreen';
import ProductScreen from '../screens/product/ProductScreen';


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Category' component={CategoryScreen} />
      <Stack.Screen name='Product' component={ProductScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator;

