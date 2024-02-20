import { View, Text, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'

export default function IdPassword() {
  return (
    <View style={{
        marginTop:15,
        flexDirection: "row",
    }}>
      <IdButton
      placeholder='Find a Restaurant'
      styles={{
        textInput: {
            backgroundColor: '#F6F6F6',
            borderRadius: 4,
            fontWeight: "700",
            marginVertical: 8,
            marginHorizontal: 8,
        },
        textInputContainer: {
            backgroundColor: "#F6F6F6",
            borderRadius: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"center",

        }
      }}
      />

    </View>
  )
}



const IdButton = () => (
  // <TouchableOpacity
  //   style={{
  //     backgroundColor: "#333",
  //     paddingVertical: 6,
  //     paddingHorizontal: 16,
  //     borderRadius: 30,
  //   }}
  //   onPress={() => props.setActiveTab(props.text)}
  // >
  //   <Text style={{ 
  //       color: props.activeTab === props.text ? "white" : "black", 
  //       fontSize: 15, 
  //       fontWeight: "900" 
  //     }}>
  //     {props.text}
  //   </Text>
  // </TouchableOpacity>
  <Text>Find</Text>
);
