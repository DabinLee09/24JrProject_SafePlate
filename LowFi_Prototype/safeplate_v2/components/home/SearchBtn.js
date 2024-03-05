import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function SearchBtn() {
    const navigator = useNavigation();
  return (
    <View>
      <Button title='SearchBtn' onPress={()=> navigator.navigate("SearchTabGroup")}/>
    </View>
  )
}