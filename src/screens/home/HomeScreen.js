import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
} from 'react-native';
import { styles } from '../styles';

const HomeScreen = ({navigation }) => {
  const { container, title } = styles;
  return (
    <SafeAreaView style={container}>
      <Text style={title}>Hello world</Text>
      <Button 
        title="Category"
        onPress={() => {
          navigation.navigate('Category')
        }}
      />
    </SafeAreaView>
  )
}

export default HomeScreen;