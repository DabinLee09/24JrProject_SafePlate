import { View, Text, StyleSheet, TouchableOpacity, Animated, } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur';
import { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import PopularInPlace from '../home/PopularInPlace';
import WhoCheckBox from './WhoCheckBox';
import RestrictionCheckBox from './RestrictionCheckBox';


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
export default function SearchTabDefault({navigation, cityHandler}) {
  const router = useRoute();
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const onClearAll = () => {
    setOpenCard(0);
    setSelectedPlace(0);
  }
  return (
    <BlurView intensity={70} style={styles.container} tint='light'>

      {/* who */}
      {/* who */}
      <View style={styles.card}>
        {openCard != 0 &&(
          <AnimatedTouchableOpacity 
          onPress={() => setOpenCard(0)} 
          style={styles.cardPreview}
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewDate}>Buddies</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 0 && (
          <View style={styles.cardFocus}>
          <Text style={styles.cardHeader}>Who</Text>
          <Text style={styles.cardSub}>Select your dining buddies from the friend list</Text>
          <Animated.View style={styles.cardBody}>
          <WhoCheckBox/>
          </Animated.View>
          </View>
        )}
      </View>



      {/* what */}
      {/* what */}
      <View style={styles.card}>
        {openCard != 1 &&(
          <AnimatedTouchableOpacity onPress={() => setOpenCard(1)}  
          style={styles.cardPreview}
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>What</Text>
            <Text style={styles.previewDate}>Restrictions</Text>
          </AnimatedTouchableOpacity>
           )}

        {openCard === 1 && (
          <View style={styles.cardFocus}>
          <Text style={styles.cardHeader}>What</Text>
          <Text style={styles.cardSub}>Select your allergies</Text>
          <RestrictionCheckBox />

          <Text style={styles.cardSub}>Select your allergies</Text>
          <RestrictionCheckBox />
          <Animated.View>
            {/* <SearchBar  cityHandler={setCity}/> */}
            <RestrictionCheckBox />
            
          </Animated.View>
          </View>
        )}
      </View>



      {/* where */}
      {/* where */}
      <View style={styles.card}>
        {openCard != 2 &&(
          <AnimatedTouchableOpacity onPress={() => setOpenCard(2)}  
          style={styles.cardPreview}
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          > 
            <Text style={styles.previewText}>Where</Text> 
            <Text style={styles.previewDate}>Current location</Text>
          </AnimatedTouchableOpacity>
        )}
         {openCard === 2 && (
          <View style={styles.cardFocus}>
          <Text style={styles.cardHeader}>Where</Text>
          <Text style={styles.cardSub}>Enter the area where you'd like to discover dining options</Text>
          <Animated.View>
          
          </Animated.View>
          </View>
        )}
      </View>












      {/* Footer */}
      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <View style={{ 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

          <TouchableOpacity onPress={onClearAll}>
            <Text style={{
              fontSize: 18,
              textDecorationLine: 'underline'
            }}>Clear All</Text>
          </TouchableOpacity>


        {/* <TouchableOpacity onPress={() => router.back()} style={styles.btn}> */}
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("RestaurantListings")}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>

        </View>      
      </Animated.View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: "#FFFFFF"
  },
  footer: {
    flex: 1,
    position: 'absolute', 
    left: 0, right: 0, bottom: 0,
    padding: 16,
    backgroundColor: "white",
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#39735D',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "400",
    letterSpacing: 0.25,
    color: 'white',
  },
  card: {
    backgroundColor: "white",
    borderRadius: 4,
    // borderColor: "#53A385",
    // borderWidth: 1,
    margin: 10,
    gap: 8,
  },
  cardFocus: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 20,
    // borderColor: "#53A385",
    // borderWidth: 1,
    margin: 10,
    gap: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  previewText: {
    fontSize: 14,
    color: "#666",
    fontWeight: 'bold'
  },
  previewDate: {
    fontSize: 14,
    color: "#333",
    fontWeight: 'bold', 
  },
  cardPreview:{
    backgroundColor: "white",
    // borderColor: "#53A385",
    // borderWidth: 1,
    margin: 10,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderColor: '#39735D',
    borderWidth: 1,
    borderRadius: 4,
    shadowOpacity: 0,
  },
  cardHeader: {
    fontSize: 24,
    // paddingLeft: 20,
    // paddingTop: 20,
    fontWeight: 'bold'
  },
  cardSub: {
    fontSize: 14,
    color: "#333",
    fontWeight: '400', 
    // paddingLeft: 20,
    // paddingBottom: 20,
  },
  cardBody: {
    // paddingHorizontal: 20,
    // paddingBottom: 20,
  
  }



});  