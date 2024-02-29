import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import GlobalStyles from '../components/settings/GlobalStyle'
import { PrimaryColors, SecondaryColors, TintsColors } from '../components/settings/Colors'
import { spacing } from '../components/settings/Spacing'
import { type } from '../components/settings/Typography'
import DietaryPill from '../components/Pill'
import DietaryIcons from '../assets/Icons'

export default function StyleTest() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={[GlobalStyles.grid]}>
        <Text style={[type.heading1XL, spacing.vert2x]}>32px Heading - Bold</Text>
          <Text style={[type.heading2L, spacing.vert1x]}>20px Heading - Bold</Text>
          <Text style={[type.heading3M, spacing.vert1x]}>16px Heading - Bold</Text>
          <Text style={[type.heading4M, spacing.vert1x]}>16px Heading - Medium</Text>
          <Text style={[type.heading5M, spacing.vert3x]}>14px Heading - Bold</Text>

          <Text style={type.body1M}>16px Body - Regular</Text>
          <Text style={type.body2S}>14px Body - Regular</Text>
          <Text style={[type.body3S, GlobalStyles.spacing3x]}>14px Body - Light Italic</Text>
          
          <Text style={type.cap1XS}>12px Body - Bold</Text>
          <Text style={type.cap2XS}>12px Body - Medium</Text>
          <Text style={[type.cap3XS, spacing.vert3x]}>12px Body - Light Italic</Text>

        <View style={{ alignItems: 'left' }}>
          <DietaryPill
            style={spacing.vert2x} // Apply vertical spacing
            size="large" // Specify the size: 'small' or 'large'
            type="inactive" // Specify the type: 'active' or 'inactive'
            dietaryType="diet" // Specify the dietary type: 'allergy' or 'diet'
            text="Diet" // Specify the text to display in the pill
            icon={DietaryIcons.VegetarianSolid} // Pass the icon component or source if needed
          />
        <DietaryPill
            style={spacing.vert2x} // Apply vertical spacing
            size="large" // Specify the size: 'small' or 'large'
            type="inactive" // Specify the type: 'active' or 'inactive'
            dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
            text="Allergy" // Specify the text to display in the pill
            icon={DietaryIcons.WheatSolid} // Pass the icon component or source if needed
          />


        </View>

      </View>
      </SafeAreaView>
    </ScrollView>
  );
}