import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyles from '../components/settings/GlobalStyle'
import { ScrollView, Pressable } from 'react-native'

export default function StyleTest() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={[GlobalStyles.grid]}>
          <Text style={[GlobalStyles.headingXLbold, GlobalStyles.spacing3x]}>This is an XL heading</Text>
          <Text style={GlobalStyles.bodyLreg}>Hello world!</Text>
          <Text style={GlobalStyles.bodyXSital}>I am styling things</Text>
          
        <View style={{ alignItems: 'left' }}>
          <Pressable style={GlobalStyles.pillLprimary}>
            <Text style={[GlobalStyles.ctaSreg, { color: 'white' }]}>Primary Pill</Text>
          </Pressable>
        </View>

        <View style={{ alignItems: 'left' }}>
          <Pressable style={GlobalStyles.pillXLsecondary}>
            <Text style={[GlobalStyles.bodyLreg, { color: '#53A385' }]}>Secondary Pill</Text>
          </Pressable>
        </View>

      </View>
      </SafeAreaView>
    </ScrollView>
  );
}