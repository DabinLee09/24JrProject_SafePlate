import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Divider } from '@rneui/base';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import InfoIcon from '../components/restaurantDetail/InfoIcon';
import InfoTab from '../components/restaurantDetail/InfoTab';
import MenuTab from '../components/restaurantDetail/MenuTab';
import MenuTap2 from '../components/restaurantDetail/MenuTap2';
import { NavigationContainer } from '@react-navigation/native';
import InfoTab2 from '../components/restaurantDetail/InfoTab2';

export default function RestaurantDetail({ route }) {
  // const [activeTab, setActiveTab] = useState("Filtered Menu");

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <About route={route} />
      
      <InfoIcon />
      <InfoTab />
      {/* <MenuTab activeTab={activeTab} setActiveTab={setActiveTab}/> */}
      {/* <MenuTap2/> */}
      {/* <InfoTab /> */}
      <MenuItems />
      
      {/* <NavigationContainer>
        <InfoTab /> 
      </NavigationContainer> */}
    </ScrollView>
  );
}
