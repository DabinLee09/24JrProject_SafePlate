import React from "react";
import { View , SafeAreaView } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import List from "./app/screens/List";
// import Details from "./app/screens/Details"; // Import the Details component
import Navigation from "./.expo/Navigation";


export default function App() {

  // DO the work here
  // onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //   if (user) {
  //     //do something
  //   } else {
  //     // do something
  //   }


  return (
    // <View style={{ flex: 1 }}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="My Todos" component={List} />
    //       <Stack.Screen name="Details" component={Details} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </View>
    // <SafeAreaView>
    //   <Navigation/>
    // </SafeAreaView>
    <View>
      <Navigation/>
    </View>

  );
}
