import { View, Text, StyleSheet, TouchableOpacity, Animated, Touchable } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur';
import { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import PopularInPlace from './PopularInPlace';


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
export default function SearchProcess({navigation, cityHandler}) {
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
            <Text style={styles.previewDate}>Anyone</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 0 && (
          <>
          <Text style={styles.cardHeader}>Who</Text>
          <Text style={styles.cardSub}>Im flexible</Text>
          <Animated.View style={styles.cardBody}>
          
          </Animated.View>
          </>
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
            <Text style={styles.previewDate}>Im flexible</Text>
          </AnimatedTouchableOpacity>
           )}

        {openCard === 1 && (
          <>
          <Text style={styles.cardHeader}>What</Text>
          <Text style={styles.cardSub}>Im flexible</Text>
          <Animated.View>
            {/* <SearchBar  cityHandler={setCity}/> */}
          </Animated.View>
          </>
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
            <Text style={styles.previewDate}>Anywhere</Text>
          </AnimatedTouchableOpacity>
        )}
         {openCard === 2 && (
          <>
          <Text style={styles.cardHeader}>Where</Text>
          <Text style={styles.cardSub}>Im flexible</Text>
          <Animated.View>
          
          </Animated.View>
          </>
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
        <TouchableOpacity style={styles.btn}>
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
    backgroundColor: 'black',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  cardHeader: {
    fontSize: 24,
    padding: 20,
    fontWeight: 'bold'
  },
  cardSub: {
    fontSize: 14,
    color: "#333",
    fontWeight: '400', 
    paddingLeft: 20,
    paddingBottom: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  }



});  