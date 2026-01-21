import { LinearGradientProps } from 'expo-linear-gradient';
import React from 'react';
import { LinearGradient } from './LinearGradient';

export const GoldenGradient = ({ children }: LinearGradientProps) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }} // equivale ao 135deg
      colors={['hsl(40,85%,40%)', 'hsl(45,90%,50%)', 'hsl(45,80%,70%)']}
    >
      {children}
    </LinearGradient>
  );
};
