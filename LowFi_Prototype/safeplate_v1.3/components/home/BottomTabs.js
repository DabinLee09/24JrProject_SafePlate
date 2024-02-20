import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function BottomTabs() {
  return (
    <View style={{
      flexDirection: "row",
      margin: 10,
      marginHorizontal: 30,
      justifyContent: "space-between",
    }}
    >
      <Icon icon="magnify" text="Explore"/>
      <Icon icon="account-supervisor-outline" text="Buddies"/>
      <Icon icon="account-circle-outline" text="Account"/>
    </View>
  );
}




const Icon = (props) => (
<TouchableOpacity>
  <View>
  <MaterialCommunityIcons 
  name={props.icon} 
  color={"#39735D"}
  size={25} style={{
    marginBottom: 3,
    alignSelf: "center"
  }}/>
  <Text style={{color: "#39735D"}}>{props.text}</Text>
  </View>
</TouchableOpacity>
);
