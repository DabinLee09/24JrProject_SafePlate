import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyles from '../components/settings/GlobalStyle'
import { ScrollView, Pressable } from 'react-native'

export default function StyleTest() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={[GlobalStyles.grid]}>
        <Text style={[GlobalStyles.heading1XL, GlobalStyles.spacing1x]}>32px Heading - Bold</Text>
          <Text style={[GlobalStyles.heading2L, GlobalStyles.spacing1x]}>20px Heading - Bold</Text>
          <Text style={[GlobalStyles.heading3M, GlobalStyles.spacing1x]}>16px Heading - Bold</Text>
          <Text style={[GlobalStyles.heading4M, GlobalStyles.spacing1x]}>16px Heading - Medium</Text>
          <Text style={[GlobalStyles.heading5M, GlobalStyles.spacing3x]}>14px Heading - Bold</Text>

          <Text style={GlobalStyles.body1M}>16px Body - Regular</Text>
          <Text style={GlobalStyles.body2S}>14px Body - Regular</Text>
          <Text style={[GlobalStyles.body3S, GlobalStyles.spacing3x]}>14px Body - Light Italic</Text>
          
          <Text style={GlobalStyles.cap1XS}>12px Body - Bold</Text>
          <Text style={GlobalStyles.cap2XS}>12px Body - Medium</Text>
          <Text style={[GlobalStyles.cap3XS, GlobalStyles.spacing3x]}>12px Body - Light Italic</Text>

        <View style={{ alignItems: 'left' }}>
          <Pressable style={GlobalStyles.btnLsecondary}>
            <Text style={[GlobalStyles.cap1XS, { color: '#39735D' }]}>Sample Btn</Text>
          </Pressable>
        </View>

        <View style={{ alignItems: 'left' }}>
          <Pressable style={GlobalStyles.pillXLsecondary}>
            <Text style={[GlobalStyles.cap1XS, { color: '#53A385' }]}>Secondary Pill</Text>
          </Pressable>
        </View>

      </View>
      </SafeAreaView>
    </ScrollView>
  );
}