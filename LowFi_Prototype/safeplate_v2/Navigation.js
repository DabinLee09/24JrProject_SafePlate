import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from './screens/Home';
import  Buddies from './screens/Buddies';
import  Account  from './screens/Account';
import RestaurantDetail from './screens/RestaurantDetail';



//stackNavigator restaurantDetail -> RestaurantDetail 
const HomeStack = createStackNavigator();

function HomeStackGroup({ navigation }) {
  return(
    // <HomeStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='RestaurantDetail' component={RestaurantDetail} />
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