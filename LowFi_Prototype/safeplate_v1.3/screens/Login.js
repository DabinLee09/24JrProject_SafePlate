import { View, Text, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import LoginGreeting from '../components/LoginSignup/LoginGreeting'
import LoginHeader from '../components/LoginSignup/LoginHeader'
import IdPassword from '../components/LoginSignup/IdPassword'

export default function InfoTab() {
  return (
    <View 
    style={{
        backgroundColor: "white",
        padding: 16
      }}>
        <LoginHeader/>
        <LoginGreeting/>
        <IdPassword/>
    </View>
  )
}