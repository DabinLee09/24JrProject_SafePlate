import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react'


const items = [
{
    image: require("../../assets/images/Hungry for more_.jpg"),
    text: "allergy",
},
{
    image: require("../../assets/images/Invite dining buddies.jpg"),
    text: "allergy",
},
{
    image: require("../../assets/images/Allergies Free.jpg"),
    text: "allergy",
},
]; 



export default function Categories() {
  return (
    <View style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
    }} >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {items.map((item, index) => (
        <View key={index} style={{alignItems: "center", marginRight:30 }}>
            <Image 
            source={item.image} 
            style={{
                height: 160,
                resizeMode: "contain",
            }}
            />
        </View>
    ))}
    </ScrollView>
    </View>

  );
}