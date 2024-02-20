import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import Ionicons   from "react-native-vector-icons/Ionicons";


export default function PopularInPlace({navigation, ...props}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={{
        marginLeft: 16,
    }}>
      <Text style={{
        color: "#343434",
        fontWeight: '700',
        fontSize: 20,
      }}>Popular in Philadelphia</Text>
      <Text style={{
        marginTop: 8,
        color: "#4D4D4D",
        fontWeight: '400',
        fontSize: 16,
      }}>Top picks restaurants in Philadelphia</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.restaurantData?.map((restaurant, index) => (   
        <TouchableOpacity 
        key={index}
        activeOpacity={1} 
        style={{marginBottom: 30}} 
        onPress={() => 
            navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories,
        })} >
            
                <View 
                style = {{
                    marginTop:8,
                    marginRight: 8,
                    backgroundColor: "pink",
                }}
                >
                <RestaurantImage image={restaurant.image_url}/>
                <RestaurantInfo 
                name={restaurant.name} 
                rating={restaurant.rating}/>
                </View>
            </TouchableOpacity>
            )
        )}
        </ScrollView>




    </View>
    </GestureHandlerRootView>
  )
}



const RestaurantImage = (props) => (
    <>    
        <Image
            source={{
                uri: props.image,
            }}
            style={{
                width: 240, 
                height: 155, 
                position: "relative", 
                borderTopRightRadius: 4,
                borderTopLeftRadius:4,
            }}
        />
        <TouchableOpacity style={{
            position: "absolute",
            right: 20,
            top: 20,
        }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
); 


const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItem: "Center",
        padding: 8,
        backgroundColor:'white',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        

    }}>
        <View style={{ gap:4, }}>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>
                {props.name}
            </Text>
            <View style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems:'center',
                }}>
                <Ionicons name="location-sharp" size={16} color={"#39735D"}/>
                <Text>1 mi</Text>
                <Ionicons name="star" size={12} color={"#FECA72"}/>
                <Text>{props.rating}</Text>
            </View>

            {/* testcode from here: tags */}
            <View style={{
                flexDirection: "row",
            }}>

            
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderColor: "#39735D",
                borderWidth: 1,
                borderRadius: 25,
                backgroundColor: "white",
                padding: 8,
                margin: 4,

            }}>
            <Ionicons name="egg" size={12} color={"#FECA72"}/><Text>egg</Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderColor: "#39735D",
                // borderWidth: 1,
                borderRadius: 25,
                backgroundColor: "#39735D",
                padding: 8,
                margin: 4,

            }}>
            <Text style={{ fontWeight: "700", color:"white" }}>Vegetarian</Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderColor: "#39735D",
                // borderWidth: 1,
                borderRadius: 25,
                backgroundColor: "#C5D2EF",
                padding: 8,
                margin: 4,

            }}>
            <Image source={require("../../assets/icons/Dairy.png")}/><Text>Dairy</Text>
            </View>
            </View>
            {/* testcode ends from here: tags */}
            {/* <Image source={require("../../assets/images/allergyTag.png")}/> */}
        </View>

    </View>
    
);