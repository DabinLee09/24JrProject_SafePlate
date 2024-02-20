import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Svg from 'react-native-svg';

const items = [
    {
        image: require("../../assets/images/avt.png"),
        name: "Cindy",
    },
    {
        image: require("../../assets/images/avt-1.png"),
        name: "Emily",
    },
    {
        image: require("../../assets/images/avt-2.png"),
        name: "Tyson",
    },
    {
        image: require("../../assets/images/avt-3.png"),
        name: "Gianna",
    },
    {
        image: require("../../assets/images/avt-4.png"),
        name: "Cheryl",
    },
    {
        image: require("../../assets/images/avt.png"),
        name: "Cindy",
    },
    {
        image: require("../../assets/images/avt-1.png"),
        name: "Emily",
    },
    {
        image: require("../../assets/images/avt-2.png"),
        name: "Tyson",
    },
    ]; 


export default function WhoCheckBox() {
    const [selectWho, setSelectWho] = useState(0);
  return (
    <View style={styles.whoCheckBoxContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.whoCheckBoxCard}>
            {selectWho != 0 &&(   
            <TouchableOpacity 
                onPress={()=> setSelectWho(0)}>
                <Image 
                source={item.image} 
                style={{
                    height: 60,
                    width: 60,
                    resizeMode: "contain",
                }}
                />
            </TouchableOpacity>
            )} 
            {selectWho === 0 &&(   
            <TouchableOpacity>
                <Image 
                source={item.image} 
                style={{
                    height: 60,
                    width: 60,
                    resizeMode: "contain",
                    borderColor: '#39735D',
                    borderWidth: 2,
                    borderRadius: 100,
                }}
                />
            </TouchableOpacity>
            )} 


            <Text>{item.name}</Text>
        </View>
    ))}
    </View>
  )
}


const styles = StyleSheet.create({
    whoCheckBoxContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
    },
    whoCheckBoxCard: {
        alignItems: "center",
        // backgroundColor: "blue",
        width: "fitContent",
        gap: 4,
    },

})