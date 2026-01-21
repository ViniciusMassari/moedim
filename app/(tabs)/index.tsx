import { Header } from '@/components/Header';
import { NextShabbatCard } from '@/components/NextShabbatCard';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View className='px-4 py-6'>
          <Text className='font-display text-xl text-jewish-foreground font-bold mb-3'>
            Próximo Shabbat
          </Text>
          <NextShabbatCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
