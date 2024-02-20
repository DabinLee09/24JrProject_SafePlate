import { View, Text, Image } from 'react-native'
import React from 'react'

 
const yelpRestaurantInfo = {
    name: "Louie Louie Restaurant",
    image: "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
    price: "$$",
    rating: 4.6,
    categories: [{title: 'Italian'},{title: 'peanut-free'}],  
  }





export default function About(props) {
    const {name, image, price, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" | ")

    const description = `${formattedCategories} ${price ? "." + price:  ""}`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}



const RestaurantImage = (props) => (
    <Image 
    source = {{ uri: props.image}} 
    style = {{width: "100%", height: 180}}
    />
)

const RestaurantTitle = (props) => (
    <Text 
    style={{
      color: "#343434",
      fontSize: 20,
      fontWeight: "700",
        marginTop:8,
        marginHorizontal: 24,
    }}>
        {props.name}
    </Text>
)



const RestaurantDescription = (props) => (
    <Text 
    style={{
        color: "#4D4D4D",
        fontWeight: '400',
        fontSize: 16,
        marginTop:8,
        marginHorizontal: 24,
    }}>
        {props.description}
    </Text>
)