import { View, Text, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'

export default function MenuTab(props) {
    console.log("Rendering MenuTabs with activeTab:", props.activeTab);

  return (
    <View style={{ 
        flexDirection: "row", 
        alignSelf: "center", 
        paddingVertical: 16,
        paddingHorizontal: 74,
        backgroundColor: "#F3F3F3",
        
        }}>
      <HeaderButton
        text="Filtered Menu"
        btnColor="#39735D"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton 
        text="Full Menu" 
        btnColor="#E3EBE8" 
        textColor="#39735D"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  )
}








const HeaderButton = (props) => (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "#39735D" : "#E3EBE8" ,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 4,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text style={{ 
          color: props.activeTab === props.text ? "white" : "#39735D", 
          fontSize: 16, 
          fontWeight: "700" 
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
  