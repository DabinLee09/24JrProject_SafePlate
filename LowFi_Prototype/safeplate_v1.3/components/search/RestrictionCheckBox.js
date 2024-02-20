import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'


const items = [
    {
        image: require("../../assets/images/dairy_solid.png"),
        name: "Dairy",
    },
    {
        image: require("../../assets/images/egg_solid.png"),
        name: "Egg",
    },
    // {
    //     image: require("../../assets/images/icon.png"),
    //     name: "Peanut",
    // },
    // {
    //     image: require("../../assets/images/dairy_solid.png"),
    //     name: "Dairy",
    // },
    // {
    //     image: require("../../assets/images/egg_solid.png"),
    //     name: "Egg",
    // },
    // {
    //     image: require("../../assets/images/icon.png"),
    //     name: "Peanut",
    // },
    // {
    //     image: require("../../assets/images/dairy_solid.png"),
    //     name: "Dairy",
    // },
    // {
    //     image: require("../../assets/images/egg_solid.png"),
    //     name: "Egg",
    // },
    // {
    //     image: require("../../assets/images/icon.png"),
    //     name: "Peanut",
    // },
 ]; 

export default function RestrictionCheckBox() {
    const [selected, setSelected] = useState(false)
  return (
    <View style={styles.iconContainer}>
      {items.map((item, index) => (
        <View 
        value={selected}
        onValueChange={setSelected} 
        style={styles.iconWrap}
        >
            <TouchableOpacity key={index} style={styles.iconCard}>
                <Image source={item.image} style={styles.icon} />
                <Text style={styles.iconText}>{item.name}</Text>
            </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
    iconContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        // justifyContent: "space-between",
        // alignItems: "center",
        // backgroundColor: "blue"
    },
    iconWrap: {
        flexDirection: "row",
        // backgroundColor: "blue"
    },
    iconCard: {
        flexDirection: "row",
        gap: 4,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#53A385",
        padding: 8,
        // backgroundColor: "pink",
        width: 100,
        alignItems: "center",

    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
    },
    iconText: {
        fontSize: 20,
        color: "#53A385"
    }
})