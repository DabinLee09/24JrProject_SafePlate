import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { type } from '../settings/Typography';
import { spacing } from '../settings/Spacing';
import { TintsColors, PrimaryColors } from '../settings/Colors';

const AccountPreferences = ({ iconName, text }) => {
  return (
    <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottomWidth: 1, 
        borderColor: TintsColors.Platinum, 
        ...spacing.vert2x,
        paddingBottom: 16
    }}>

      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons style={{ marginRight: 16 }} name={iconName} size={24} color={PrimaryColors.Green} />
        <Text style={type.body1M}>{text}</Text>
      </View>

      <Ionicons name="chevron-forward" size={24} color={PrimaryColors.Green} />
    </View>
  );
};

export default AccountPreferences;
