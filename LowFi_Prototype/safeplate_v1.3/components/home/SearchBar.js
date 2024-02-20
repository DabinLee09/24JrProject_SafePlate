import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons   from "react-native-vector-icons/Ionicons";
import AntDesign   from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// AIzaSyCJ0Zb-uZYB2VWAEFqBh-xZX-DIb12NGF0

export default function SearchBar({cityHandler}) {
  return (
    <View style={{
        marginTop:15,
        flexDirection: "row",
    }}>
      <GooglePlacesAutocomplete 
      query={{key: "AIzaSyCJ0Zb-uZYB2VWAEFqBh-xZX-DIb12NGF0" }}
      onPress={(data, details = null) => {
        console.log(data.description);
        const city = data.description.split(',')[0];
        cityHandler(city);
      }}

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

      renderLeftButton={() => (
      <View style={{marginLeft: 12 }}>
        <MaterialCommunityIcons name="magnify" size={24} color={"#39735D"} />
      </View>
      )}  
      // renderRightButton={()=>(
      //   <View
      //   style={{
      //           flexDirection: 'row',
      //           marginRight: 8,
      //           backgroundColor: "white",
      //           padding: 9,
      //           borderRadius: 30,
      //           alignItems: "center",
      //       }}
      //   >
      //       <AntDesign name='clockcircle' size={11} />
      //   <Text>Search</Text>    
      //   </View>
      // )}
      />
      
    </View>
  );
}