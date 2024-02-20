import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function InfoIcon() {
  return (
    <View style={{ marginHorizontal:24, marginVertical:24, }}>
      <View style={{
      flexDirection: "row",
      margin: 10,
      marginHorizontal: 30,
      justifyContent: "space-around",
    }}>
      <IconCircle icon="magnify" text="Explore"/>
      <IconCircle icon="account-supervisor-outline" text="Buddies"/>
      <IconCircle icon="account-circle-outline" text="Account"/>
      </View>
      <View style={{
      flexDirection: "row",
      margin: 10,
      marginHorizontal: 30,
      justifyContent: "space-around",
      borderColor: "#eee"
    }}>
      <IconRec icon="magnify" text="Explore"/>
      <IconRec icon="account-supervisor-outline" text="Buddies"/>
      <IconRec icon="account-circle-outline" text="Account"/>
      </View>
    </View>
  )
}




const IconCircle = (props) => (
    <TouchableOpacity>
      <View style={{ }}>
      <MaterialCommunityIcons 
      name={props.icon} 
      color={"#39735D"}
      size={25} style={{
        marginBottom: 3,
        alignSelf: "center",
        borderRadius: 50,
        padding: 8,
        borderColor: "#39735D",
      }}/>
      <Text style={{color: "#39735D"}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
    );



    const IconRec = (props) => (
        <TouchableOpacity>
          <View style={{ }}>
          <MaterialCommunityIcons 
          name={props.icon} 
          color={"#39735D"}
          size={25} style={{
            marginBottom: 3,
            alignSelf: "center",
            borderRadius: 50,
            padding: 8,
            borderColor: "#39735D",
          }}/>
          <Text style={{color: "#39735D"}}>{props.text}</Text>
          </View>
        </TouchableOpacity>
        );