import React from 'react';

import { Text } from 'react-native';
import { LinearGradient } from './LinearGradient';
import { Box } from './ui/box';
import { CandlesIcons } from './ui/CandleIcons';
import { HStack } from './ui/hstack';

export const NextShabbatCard = () => {
  return (
    <Box className='border-l-jewish-blue-light rounded-lg'>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['hsl(220,65%,25%)', 'hsl(220,60%,35%)']}
        className='rounded-lg'
      >
        <HStack className='items-start justify-between mb-3 p-5'>
          <Box className=''>
            <CandlesIcons color='gold' />
          </Box>
          <Text className='font-display text-lg opacity-80 text-jewish-primary-foreground'>
            שבת וירא
          </Text>
        </HStack>
      </LinearGradient>
    </Box>
  );
};
