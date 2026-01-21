import { Text } from 'react-native';
import { HStack } from './ui/hstack';
import { VStack } from './ui/vstack';

export const WeeklyPortionReadings = () => {
  return (
    <VStack className='mt-3 gap-2'>
      <HStack className='gap-1'>
        <Text className='text-jewish-primary-foreground font-semibold'>
          Torá:
        </Text>
        <Text className='text-jewish-muted'>Gênesis 18:1 - 22:24</Text>
      </HStack>
      <HStack className='gap-1'>
        <Text className='text-jewish-primary-foreground font-semibold'>
          Haftará:
        </Text>
        <Text className='text-jewish-muted'>2 Reis 4:1-37</Text>
      </HStack>
      <HStack className='gap-1'>
        <Text className='text-jewish-primary-foreground font-semibold'>
          Brit Chadashá:
        </Text>
        <Text className='text-jewish-muted'>Lucas 17:26-37</Text>
      </HStack>
    </VStack>
  );
};
