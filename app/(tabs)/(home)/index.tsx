import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

import { ScreenContent } from '~/src/components/ScreenContent';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
