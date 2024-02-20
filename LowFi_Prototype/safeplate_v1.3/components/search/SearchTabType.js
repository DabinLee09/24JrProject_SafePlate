import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import React from 'react'
import { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated';

export default function SearchTabType() {
  const onClearAll = () => {
    setOpenCard(0);
    setSelectedPlace(0);
  }
  return (
    <View>
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
    </View>
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
})