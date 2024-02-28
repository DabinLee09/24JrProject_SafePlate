import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryColors, SecondaryColors, TintsColors } from './settings/Colors';

const DietaryPill = ({ size = 'small', type = 'active', dietaryType = 'allergy', text, icon, style }) => {
    const primaryColor = dietaryType === 'allergy' ? PrimaryColors.Green : PrimaryColors.LightBlue;
    const textColor = type === 'active' ? TintsColors.White : primaryColor;
    const borderColor = type === 'inactive' ? primaryColor : 'transparent';
  
    const paddingVertical = size === 'large' ? 9 : 5;
    const paddingHorizontal = size === 'large' ? 16 : 8;
  
    const styles = StyleSheet.create({
      pill: {
        borderRadius: 100,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        backgroundColor: type === 'active' ? primaryColor : TintsColors.White,
        borderWidth: type === 'inactive' ? 1 : 0,
        borderColor: borderColor,
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        color: textColor,
        marginLeft: 4,
      },
    });
  
    return (
      <View style={[styles.pill, style]}>
        {icon && <IconComponent icon={icon} />}
        <Text style={styles.text}>{text}</Text>
      </View>
    );
};  

export default DietaryPill;
