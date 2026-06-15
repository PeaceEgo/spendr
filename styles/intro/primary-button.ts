import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

export const introPrimaryButtonStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxWidth: 382,
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.9,
  },
  gradientButton: {
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Slide 1 — white button → blue label
  labelSlide1: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.intro.slide1.buttonText,
  },
  // Slides 2 & 3 — blue button → white label
  labelOnWhite: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});