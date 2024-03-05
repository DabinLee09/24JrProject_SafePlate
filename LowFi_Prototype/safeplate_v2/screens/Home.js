import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import UserGreeting from '../components/home/UserGreeting'
import SearchBtn from '../components/home/SearchBtn'


const YELP_API_KEY = "DaWbOrSWK54qhbQSXVUzcYTsEunAKnfwJ3i4NA8F4oVSSbUdvK5aDF4_xKpSh7fCO63rAVHvuQqEk6V7R3mTFg0y9Q5MiC4hSGEs7AdsE88FTfM7NFlzL73weZQ3ZXYx"

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View style={{backgroundColor: "white", paddingHorizontal: 16 }}>
        <UserGreeting />
        {/* <UserLocation cityHandler={setCity}/> */}
        <SearchBtn />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}