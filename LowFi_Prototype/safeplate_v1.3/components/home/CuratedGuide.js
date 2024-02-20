import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const items = [
    {
        image: require("../../assets/images/Diets Cards.jpg"),
    },
    {
        image: require("../../assets/images/Diets Cards-1.jpg"),
    },
    {
        image: require("../../assets/images/Diets Cards-3.jpg"),
    },
    {
        image: require("../../assets/images/Diets Cards-2.jpg"),
    },
    {
        image: require("../../assets/images/Diets Cards-4.jpg"),
    },
    ]; 



export default function CuratedGuide() {
  const navigator = useNavigation();
  return (
    <>
    <View style={{marginLeft: 16,}}>
      <Text style={{
        color: "#343434",
        fontWeight: '700',
        fontSize: 20,
      }}>Curated Guides by SafePlate</Text>
      <Text style={{
        marginTop: 8,
        color: "#4D4D4D",
        fontWeight: '400',
        fontSize: 16,
      }}>Curated Guides for allergies and Diet</Text>
    </View>
    <View style={{
        marginTop: 8,
        marginLeft: 16,
        backgroundColor: "#fff",
    }} >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {items.map((item, index) => (
        <View key={index} style={{alignItems: "center", paddingRight: 8,}}>
          <TouchableOpacity onPress={() => navigator.navigate("CuratedGuideScreen")}>
            <Image 
            source={item.image} 
            style={{
                height: 256,
                resizeMode: "contain",
            }}
            />
            </TouchableOpacity>
        </View>
    ))}
    </ScrollView>
    </View>
    </>
  )
}

