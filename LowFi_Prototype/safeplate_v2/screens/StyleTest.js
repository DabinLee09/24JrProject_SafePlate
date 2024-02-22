import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyles from '../components/settings/GlobalStyle'
import { ScrollView } from 'react-native'

export default function StyleTest() {
  return (
    <ScrollView>
    <SafeAreaView style={{margin: 16, gap: 8,}}>
      <Text style={GlobalStyles.titleText}>GlobalStyles.titleText</Text>
      <Text style={GlobalStyles.subTextText}>GlobalStyles.subText</Text>
      <Text style={GlobalStyles.subTextText}>GlobalStyles.subText</Text>
      <Text style={GlobalStyles.subTextText}>GlobalStyles.subText</Text>
    </SafeAreaView>
    </ScrollView>
  )
}