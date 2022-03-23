import React from 'react'
import {
  SafeAreaView,
  Button,
  Text,
  View,
} from 'react-native';
import { styles } from '../styles';

const CategoryScreen = ({ navigation }) => {
  const { container, title, subTitle, categoriesContainer } = styles;

  const categories = [
    { id: 0, label: 'Sillas' },
    { id: 1, label: 'Mesas' },
    { id: 2, label: 'Armarios' },
  ]
  return (
    <SafeAreaView style={container}>
      <Text style={title}>Hello world</Text>
      <Text style={subTitle}>Seleccioná una categoría: </Text>
      <View style={categoriesContainer}>
      {
        categories.map((category) => {
          const { id, label } = category;
          return (
            <Button
              key={id}
              title={label}
              onPress={() => {
                navigation.navigate('Product', {
                  id, label
                })
              }}
            />
          )
        })
      }
      </View>
    </SafeAreaView>
  )
}

export default CategoryScreen;