import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/base';

const foods = [
{   title: "Lasagna",
    description: "meet, cheese, hahahahahah",
    price: "19.99",
    image: "https://www.thespruceeats.com/thmb/s11oj7aiRC0zcjIXuu80NmT-L4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-basic-meat-lasagna-recipe-2097886-hero-01-cdd28f5b4aa940faa193e39a1629f89a.jpg"  
},
{   title: "Pizza",
    description: "meet, cheese, hahahahahah",
    price: "12.99",
    image: "https://www.thespruceeats.com/thmb/s11oj7aiRC0zcjIXuu80NmT-L4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-basic-meat-lasagna-recipe-2097886-hero-01-cdd28f5b4aa940faa193e39a1629f89a.jpg"  
},
{   title: "Salad",
    description: "meet, cheese, hahahahahah",
    price: "9.99",
    image: "https://www.thespruceeats.com/thmb/s11oj7aiRC0zcjIXuu80NmT-L4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-basic-meat-lasagna-recipe-2097886-hero-01-cdd28f5b4aa940faa193e39a1629f89a.jpg"  
},
]



const style = StyleSheet.create({
    MenuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    }
})


export default function MenuItems() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    {foods?.map((food, index)=>(
      <View key={index}>
      <View style={style.MenuItemStyle}>
        <FoodImage food={food}/>
        <FoodInfo food={food} />
      </View>
      <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20 }} />
      </View>
    ))}
    </ScrollView>
  );
}




const FoodInfo = (props) => (
    <View style={{
      width: 240,
      justifyContent: "space-evenly"
    }}>
        <Text style={style.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)


const FoodImage = (props) => (
  <View>
    <Image
      source={{uri : props.food.image}}
      style={{width: 100, height: 100, borderRadius: 8}}
    />
  </View>
)