import { View, Text } from 'react-native'
import React from 'react'
import RestaurantListingResult from '../components/search/RestaurantListingResult.js.js'

export default function RestaurantListings() {
  return (
    <View>
      <Text>Restaurant Listings</Text>
      <RestaurantListingResult/>
    </View>
  )
}