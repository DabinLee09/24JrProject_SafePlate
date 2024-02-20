import { View, Text } from 'react-native'
import React from 'react'
import MenuItems from './MenuItems'

export default function TabInfo({route}) {
  return (
    <View style={{backgroundColor: "pink"}}>
      <MenuItems/>
      <Text>menu</Text>
    </View>
  )
}