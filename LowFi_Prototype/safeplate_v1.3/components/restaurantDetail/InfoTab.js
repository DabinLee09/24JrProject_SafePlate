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
                backgroundColor: "#f3f3f3", 
                // marginTop: 100,
            },
            tabBarActiveTintColor: "#333",
            tabBarIndicatorStyle: {
                backgroundColor: "#53A385",
                height: 4, 
                bottom: 1, 
                borderRadius: 4,
                width: 100,
                position: "absolute",
                alignItems: "center"
                    

            } 

            // tabBarContentContainerStyle: {justifyContent: "space-between", }, 
            // tabBarIndicatorContainerStyle: {justifyContent: "space-between", }, 

        }}
        >
            <InfoTap.Screen name="Menu Items" component={TabMenuItem} />
            <InfoTap.Screen name="Info" component={TabInfo} />
            <InfoTap.Screen name="Reviews" component={TabReviews} />
        </InfoTap.Navigator>
  )
}

