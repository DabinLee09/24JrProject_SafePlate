import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TabMenuItem from './TabMenuItem';
import TabInfo from './TabInfo';
import TabReviews from './TabReviews';






const InfoTap = createMaterialTopTabNavigator();


export default function InfoTab() {
  return (
        <InfoTap.Navigator
        screenOptions={{
            tabBarLabelStyle: {fontSize: 12},
            tabBarItemStyle: {},
            tabBarStyle:{
                backgroundColor: "pink", 
                marginTop: 100,
            },
            tabBarActiveTintColor: "#333",
            tabBarIndicatorStyle: {backgroundColor: "red"} 

            // tabBarContentContainerStyle: {justifyContent: "space-between", }, 
            // tabBarIndicatorContainerStyle: {justifyContent: "space-between", }, 

        }}
        >
            <InfoTap.Screen name="TabMenuItem" component={TabMenuItem} />
            <InfoTap.Screen name="TabInfo" component={TabInfo} />
            <InfoTap.Screen name="TabReviews" component={TabReviews} />
        </InfoTap.Navigator>
  )
}

