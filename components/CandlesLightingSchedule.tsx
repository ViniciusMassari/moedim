import React from 'react';
import { Text } from 'react-native';
import { CandlesIcons } from './ui/CandleIcons';
import { HStack } from './ui/hstack';

export const CandlesLightingSchedule = () => {
  return (
    <HStack className='gap-4 mb-4 text-sm '>
      <HStack className='items-center gap-1.5'>
        <CandlesIcons size={14} color='gold' />
        <Text className='text-jewish-primary-foreground'>Velas: 19:12</Text>
      </HStack>
      <HStack className='items-center gap-1.5'>
        <Text className='text-jewish-gold'>✦</Text>
        <Text className='text-jewish-primary-foreground'>havdalá: 19:12</Text>
      </HStack>
    </HStack>
  );
};
