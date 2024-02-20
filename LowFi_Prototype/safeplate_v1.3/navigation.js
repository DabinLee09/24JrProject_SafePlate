import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TabMenuItem from './components/restaurantDetail/TabMenuItem';
import TabInfo from './components/restaurantDetail/TabInfo';
import TabReviews from './components/restaurantDetail/TabReviews';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  Buddies from './screens/Buddies';
import  Account  from './screens/Account';
import {Ionicons} from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CuratedGuideScreen from './screens/CuratedGuideScreen';
import FilteredMenu from './screens/FilteredMenu';
import UnFilteredMenu from './screens/UnFilteredMenu';
import SearchBtn from './components/home/SearchBtn';
import SearchProcess from './components/home/SearchProcess';
import SearchTabDefalt from './components/search/SearchTabDefault';
import SearchTabType from './components/search/SearchTabType';
import SearchTabDefault from './components/search/SearchTabDefault';
import RestaurantListings from './screens/RestaurantListings';

//InfoTab
const InfoTab = createMaterialTopTabNavigator();

function InfoTabGroup(){
  return(
    <InfoTab.Navigator
        screenOptions={{
            tabBarLabelStyle: {fontSize: 12},
            tabBarItemStyle: {},
            tabBarStyle:{
                backgroundColor: "pink", 
                marginTop: 100,
            },
            tabBarActiveTintColor: "#333",
            tabBarIndicatorStyle: {backgroundColor: "red"} 

        }}
        >
            <InfoTab.Screen name="TabMenuItem" component={TabMenuItem} 
            // options={{
            //   headerTitle: () => <re />,
            // }}
            />
            <InfoTab.Screen name="TabInfo" component={TabInfo} />
            <InfoTab.Screen name="TabReviews" component={TabReviews} />
        </InfoTab.Navigator>
  )
}


//SearchTab
const SearchTab = createMaterialTopTabNavigator();

function SearchTabGroup(){
  return(
    <SearchTab.Navigator>
      <SearchTab.Screen name="SearchTabDefault" component={SearchTabDefault} />
      <SearchTab.Screen name="SearchTabType" component={SearchTabType} />
    </SearchTab.Navigator>
  )
}



//stackNavigator restaurantDetail -> RestaurantDetail 
const HomeStack = createStackNavigator();

function HomeStackGroup({ navigation }) {
  return(
    // <HomeStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='SearchTabGroup' component={SearchTabGroup} options={{presentation: 'transparentModal'}}/>
      <HomeStack.Screen name='RestaurantDetail' component={RestaurantDetail} />
      <HomeStack.Screen name='SearchBar' component={RestaurantDetail} />
      <HomeStack.Screen name='CuratedGuideScreen' component={CuratedGuideScreen} />
      <HomeStack.Screen name='FilteredMenu' component={InfoTabGroup} options={{presentation: "modal"}}/>
      <HomeStack.Screen name='UnFilteredMenu' component={UnFilteredMenu} />
      <HomeStack.Screen name='RestaurantListings' component={RestaurantListings} />
    </HomeStack.Navigator>

  )

}







//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
        screenOptions={({route, navigation}) => ({
            tabBarIcon: ({color, focused, size}) => {
                let iconName;
                if (route.name === "HomeStackGroup"){
                    iconName = focused ? "compass" : "compass-outline";
                } else if (route.name === "Buddies"){
                    iconName = focused ? "account-supervisor" : "account-supervisor-outline";
                } else if (route.name === "Account"){
                    iconName = focused ? "account-supervisor-circle" : "account-supervisor-circle-outline";
                }
                return <MaterialCommunityIcons 
                name={iconName} 
                color={color}
                size={size} style={{
                  // marginBottom: 3,
                  // alignSelf: "center"
                }}/>
                // <Ionicons name={iconName} size={size} color={color}/>
                
            },
            tabBarActiveTintColor: "#39735D",
            tabBarInactiveTintColor: "gray"
        })}
        >
            
            <Tab.Screen name="HomeStackGroup" component={HomeStackGroup} 
                options={{ headerShown: false, tabBarLabel: "Explore"}}
            // options={{
            //     tabBarIcon: () => <Feather name="home" size={24} color="black" /> 
            // }}
            />
            {/* <Tab.Screen name="Home" component={Home}/> */}
            <Tab.Screen name="Buddies" component={Buddies}/>
            <Tab.Screen name="Account" component={Account}/>
        </Tab.Navigator>
    )
}



export default function Navigation() {
  return (
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
  )
}