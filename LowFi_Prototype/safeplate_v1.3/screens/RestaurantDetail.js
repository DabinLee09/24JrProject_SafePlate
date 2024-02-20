import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/base'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import route from 'color-convert/route'
import InfoIcon from '../components/restaurantDetail/InfoIcon'
import InfoTab from '../components/restaurantDetail/InfoTab'
import MenuTab from '../components/restaurantDetail/MenuTab'
import MenuTap2 from '../components/restaurantDetail/MenuTap2'

export default function RestaurantDetail({route}) {
  // const [activeTab, setActiveTab] = useState("Filtered Menu");

  return (
    <View>
      <About route={route}/>
      <InfoIcon />
      {/* <MenuTab activeTab={activeTab} setActiveTab={setActiveTab}/> */}
      <MenuTap2/>
      <MenuItems/>
    </View>
  )
}