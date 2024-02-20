import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function MenuTap2() {
    const navigator = useNavigation();
  return (
    <View>
      {/* <Text>MenuTap2</Text> */}
      <Button title='filteredMenu' onPress={()=> navigator.navigate("FilteredMenu")}/>
    </View>
  )
}