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
  //naming convention: type(heading,body,or caption); hierarchy(1-5); size(XS,S,M,L,orXL)
  
  // headings (5 total)
  heading1XL: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 32,
    lineHeight: 48,
  },
  heading2L: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 20,
    lineHeight: 32,
  },
  heading3M: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 16,
    lineHeight: 28,
  },
  heading4M: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 14,
    lineHeight: 24,
  },
  heading5M: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 14,
    lineHeight: 24,
  },

  // Body text (3 total)
  body1M: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    lineHeight: 28,
  },
  body2S: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    lineHeight: 24,
  },
  body3S: {
    fontFamily: 'SF-Pro-Text-LightItalic',
    fontSize: 14,
    lineHeight: 24,
  },

  // Captions (3 total)
  cap1XS: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 12,
    lineHeight: 22,
  },
  cap2XS: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 12,
    lineHeight: 22,
  },
  cap3XS: {
    fontFamily: 'SF-Pro-Text-LightItalic',
    fontSize: 12,
    lineHeight: 22,
  },

  // pill styles
  // apply ctaSreg for S,M,L pills; apply bodyLreg for XL pills; add icons for S, M, XL pills
  pillSprimary: {
    display: 'flex',
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#53A385',
  },

  pillSsecondary: {
    display: 'flex',
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: '#white',
    borderWidth: 1,
    borderColor: '#53A385',
  },

  pillMprimary: {
    display: 'flex',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#53A385',
  },

  pillMsecondary: {
    display: 'flex',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: '#white',
    borderWidth: 1,
    borderColor: '#53A385',
  },

  pillLprimary: {
    display: 'flex',
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#39735D',
  },

  pillLsecondary: {
    display: 'flex',
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: '#white',
    borderWidth: 1,
    borderColor: '#39735D',
  },

  pillXLprimary: {
    display: 'flex',
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#53A385',
  },

  pillXLsecondary: {
    display: 'flex',
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#53A385',
  },

  // button styles
  // apply ctaSbold for S, M, L btns
  btnSprimary: {
    display: 'flex',
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#39735D',
  },

  btnSsecondary: {
    display: 'flex',
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#39735D',
  },

  btnMprimaryRound: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#39735D',
  },

  btnMsecondaryRound: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#39735D',
  },

  btnMprimary: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#39735D',
  },

  btnMsecondary: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#39735D',
  },

  btnLprimary: {
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,

    backgroundColor: '#39735D',
  },

  btnLsecondary: {
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#39735D',
  },
});

export default GlobalStyles;