import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import GlobalStyles from '../components/settings/GlobalStyle';
import { PrimaryColors, TintsColors } from '../components/settings/Colors';
import SearchBar from '../components/SearchBar';
import { type } from '../components/settings/Typography';
import { spacing } from '../components/settings/Spacing';
import { Ionicons } from '@expo/vector-icons';
import ButtonRow from '../components/buddies/ButtonRow';
import BuddyInfo from '../components/buddies/BuddyInfo';

export default function Buddies() {

  return (
    <ScrollView style={{ backgroundColor: TintsColors.White }}>
      <SafeAreaView>
        <View style={GlobalStyles.grid}>
          <Text style={GlobalStyles.pageHeader}>Buddies</Text>

          <SearchBar placeholder="Search Your Buddies" />

          <Text style={[type.heading3M, spacing.vert2x, {color: TintsColors.DarkGray}]}>Expand Your Dining Circle</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', ...spacing.vert3x}}>
            <ButtonRow iconName="person-add-outline" text="Add New Buddies"/>
            <ButtonRow iconName="document-outline" text="Create Buddy"/>
            <ButtonRow iconName="share-outline" text="Invite Buddies"/>
          </View>

          <Text style={[type.heading3M, spacing.vert2x, {color: TintsColors.DarkGray}]}>Your Dining Buddies</Text>

          <BuddyInfo
            imageSource={require('../assets/images/avt-1.png')}
            name="Emily Smith"
            username="@emilysmith"
            restrictions="No dietary restrictions"
          />

          <BuddyInfo
            imageSource={require('../assets/images/avt-3.png')}
            name="Gianna"
            username="@gianna123"
            restrictions="No dietary restrictions"
          />

          <BuddyInfo
            imageSource={require('../assets/images/avt-4.png')}
            name="Cheryl"
            username="@cheryl123"
            restrictions="No dietary restrictions"
          />

        </View>

      </SafeAreaView>
    </ScrollView>
  );
}