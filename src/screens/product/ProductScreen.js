import React from 'react';
import {
  SafeAreaView,
  Button,
  Text,
} from 'react-native';
import { styles } from '../styles';

const ProductScreen = ({ route, navigation }) => {

  const { container, title, subTitle } = styles;
  const { id, label } = route.params;

  return (
    <SafeAreaView style={container}>
      <Text style={title}>Hello world</Text>
      <Text style={subTitle}>Producto: {label}</Text>
      <Text style={subTitle}>ID: {id}</Text>
      <Button 
        title="Home"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
    </SafeAreaView>
  )
}

export default ProductScreen