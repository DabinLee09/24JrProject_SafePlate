import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons   from "react-native-vector-icons/Ionicons";

export default function UserLocation() {
  return (

    <View style={{
        marginTop: 16,
        flexDirection: "row"
    }}>
        <Ionicons name="location-sharp" size={24} color={"#39735D"}/>
        <Text style={{
            fontWeight: "700",
            color: "#39735D",
            fontSize: 16,
        }}
        >University City, Philadelphia</Text>
        <Ionicons name="caret-down-outline" size={24} color={"#39735D"} />
    </View>




    // <View>
    //   <View style={{
    //     marginTop:15,
    //     flexDirection: "row",
    // }}>
    //   <GooglePlacesAutocomplete 
    //   query={{key: "AIzaSyCJ0Zb-uZYB2VWAEFqBh-xZX-DIb12NGF0" }}
    //   onPress={(data, details = null) => {
    //     console.log(data.description);
    //     const city = data.description.split(',')[0];
    //     cityHandler(city);
    //   }}

    //   placeholder='University City, Philadelphia'
    //   styles={{
    //     textInput: {
    //         fontWeight: "700",
    //         marginTop: 8,
    //     },
    //     textInputContainer: {
    //         backgroundColor: "#eee",
    //         flexDirection: "row",
    //         alignItems: "center",
    //     }
    //   }}

    //   renderLeftButton={() => (
    //   <View style={{marginLeft: 10 }}>
    //     <Ionicons name="location-sharp" size={24} />
    //   </View>
    //   )}  
    //   renderRightButton ={()=>( 
    //     <View style={{ position: "relative",}}>
    //         <Ionicons name="location-sharp" size={24} />
    //     </View>
    //   )}
    //   />
      
    // </View>


    // </View>
  )
}