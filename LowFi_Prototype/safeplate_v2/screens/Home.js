import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import UserGreeting from '../components/home/UserGreeting';
import SearchBtn from '../components/home/SearchBtn';
import { type } from '../components/settings/Typography';
import { spacing } from '../components/settings/Spacing';
import { PrimaryColors, TintsColors } from '../components/settings/Colors';
import GlobalStyles from '../components/settings/GlobalStyle';
import GuidesScroll from '../components/home/GuidesScroll';

const YELP_API_KEY = "DaWbOrSWK54qhbQSXVUzcYTsEunAKnfwJ3i4NA8F4oVSSbUdvK5aDF4_xKpSh7fCO63rAVHvuQqEk6V7R3mTFg0y9Q5MiC4hSGEs7AdsE88FTfM7NFlzL73weZQ3ZXYx"

const guideImages = [
  { source: require('../assets/images/Diet-card-treenut.png'), restriction: 'treenut' },
  { source: require('../assets/images/Diet-card-vegetarian.png'), restriction: 'vegetarian' },
  { source: require('../assets/images/Diet-card-keto.png'), restriction: 'keto' },
  { source: require('../assets/images/Diet-card-dairy.png'), restriction: 'dairy' },
  { source: require('../assets/images/Diet-card-gluten.png'), restriction: 'gluten' },
  { source: require('../assets/images/Diet-card-shellfish.png'), restriction: 'shellfish' },
  { source: require('../assets/images/Diet-card-peanut.png'), restriction: 'peanut' },
  { source: require('../assets/images/Diet-card-soy.png'), restriction: 'soy' },
  { source: require('../assets/images/Diet-card-sesame.png'), restriction: 'sesame' },
  { source: require('../assets/images/Diet-card-egg.png'), restriction: 'egg' },
  { source: require('../assets/images/Diet-card-fish.png'), restriction: 'fish' },
  { source: require('../assets/images/Diet-card-vegan.png'), restriction: 'vegan' },
  { source: require('../assets/images/Diet-card-halal.png'), restriction: 'halal' },
];

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1 }}>
      <ScrollView>
      <View style={GlobalStyles.grid}>
        <UserGreeting />
        {/* <UserLocation cityHandler={setCity}/> */}
        <SearchBtn />

        <Text style={[type.heading2L, spacing.vert1x, {color: TintsColors.DarkGray}]}>Curated Guides by SafePlate</Text>
        <Text style={[type.body1M, spacing.vert2x, {color: TintsColors.DarkGray}]}>Tips and educational content for each dietary need</Text>
        
        <GuidesScroll images={guideImages} navigation={navigation} />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}