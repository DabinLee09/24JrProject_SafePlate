import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems';
import { Divider } from '@rneui/base';
import BottomTabs from '../components/home/BottomTabs';
import UserLocation from '../components/home/UserLocation';
import UserGreeting from '../components/home/UserGreeting';
import PopularInPlace from '../components/home/PopularInPlace';
import CuratedGuide from '../components/home/CuratedGuide';
import CardBanner from '../components/home/CardBanner';
import SearchBtn from '../components/home/SearchBtn';

const YELP_API_KEY = "DaWbOrSWK54qhbQSXVUzcYTsEunAKnfwJ3i4NA8F4oVSSbUdvK5aDF4_xKpSh7fCO63rAVHvuQqEk6V7R3mTFg0y9Q5MiC4hSGEs7AdsE88FTfM7NFlzL73weZQ3ZXYx"

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = React.useState([]);
  const [city, setCity] = useState("Philadelphia");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&limit=7`;
  
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    try {
      const res = await fetch(yelpUrl, apiOptions);
      const json = await res.json();
      // setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
      setRestaurantData(json.businesses);
    } catch (error) {
      console.error("Error fetching data from Yelp:", error);
    }
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);
// }, [city, activeTab]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false} style={{paddingBottom: 100}}>
      <View
        style={{
          backgroundColor: "white",
          padding: 16
        }}
      >
        <UserGreeting />
        <UserLocation cityHandler={setCity}/>
        {/* <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/> */}
        {/* <HeaderTabs /> */}
        <SearchBar  cityHandler={setCity}/>
        <SearchBtn />
      </View>
      
        <Categories />
        {/* <CardBanner /> */}
        <PopularInPlace restaurantData={restaurantData} navigation={navigation} />
        {/* <RestaurantItems restaurantData={restaurantData} navigation={navigation} /> */}
        <CuratedGuide />
      </ScrollView>
      <Divider width={1} color={"#39735D"}/>
      {/* <BottomTabs /> */}
    </SafeAreaView>
  );
}
