import { InternalizationExample } from '~/src/components/InternalizationExample';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { ScreenContent } from '~/src/components/ScreenContent';

export default function Modal() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>Cart Items</Text>
    </View>
  );
}
