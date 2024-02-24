import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GlobalStyles = StyleSheet.create({
  // spacing guidelines
  spacing1x: {
    marginBottom: 8,
  },
  spacing2x: {
    marginBottom: 16,
  },
  spacing3x: {
    marginBottom: 24,
  },
  spacing4x: {
    marginBottom: 32,
  },
  spacing5x: {
    marginBottom: 40,
  },
  spacing6x: {
    marginBottom: 48,
  },
  spacing7x: {
    marginBottom: 56,
  },
  spacing8x: {
    marginBottom: 64,
  },
  spacing10x: {
    marginBottom: 80,
  },
  spacing12x: {
    marginBottom: 96,
  },

// grid defining left/right and top/bottom margins
  grid: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  // text styling
  //naming convention: type(heading,body,or cta); size(XL,L,M,S,or XS); weight(bold,medium,regular,or light italic)
  
  // headings
  headingXLbold: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 36,
    lineHeight: 40,
    color: "pink"
  },
  headingXLreg: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 36,
    lineHeight: 40,
  },

// body text
  bodyLbold: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 20,
    lineHeight: 32,
  },
  bodyLreg: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 20,
    lineHeight: 32,
  },
  bodyMbold: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 16,
    lineHeight: 28,
  },
  bodyMmed: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 16,
    lineHeight: 28,
  },
  bodyMreg: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    lineHeight: 28,
  },
  bodySital: {
    fontFamily: 'SF-Pro-Text-LightItalic',
    fontSize: 14,
    lineHeight: 24,
  },
  bodyXSmed: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 12,
    lineHeight: 22,
  },
  bodyXSital: {
    fontFamily: 'SF-Pro-Text-LightItalic',
    fontSize: 12,
    lineHeight: 22,
  },

  // CTAs
  ctaSbold: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 14,
    lineHeight: 24,
  },

  ctaSreg: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    lineHeight: 24,
  },

  ctaXSbold: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 12,
    lineHeight: 22,
  },

  ctaXSreg: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 12,
    lineHeight: 22,
  },
});

export default GlobalStyles;