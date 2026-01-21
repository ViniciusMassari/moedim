import { CalendarPlus2 } from 'lucide-react-native';
import React from 'react';
import { Button, ButtonIcon, ButtonText } from './ui/button';

export const AddReminderButton = () => {
  return (
    <Button
      variant='solid'
      className='bg-jewish-primary-foreground/20 mt-4 rounded-xl data-[active=true]:bg-jewish-primary-foreground/30 transition-opacity'
    >
      <ButtonIcon as={CalendarPlus2}></ButtonIcon>
      <ButtonText className='capitalize text-jewish-primary-foreground'>
        adicionar lembrete
      </ButtonText>
    </Button>
  );
};
