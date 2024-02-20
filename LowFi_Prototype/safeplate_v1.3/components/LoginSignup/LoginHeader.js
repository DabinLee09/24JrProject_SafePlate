import { View, Text } from 'react-native'
import React from 'react'

export default function LoginHeader() {
  return (
    <View style={{
        marginTop: 24,
        paddingTop: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
        }}>
      <Text style={{
        color: "#343434",
        fontSize: 20,
        fontWeight: "700",
      }}>
        Log in</Text>
    </View>
  )
}