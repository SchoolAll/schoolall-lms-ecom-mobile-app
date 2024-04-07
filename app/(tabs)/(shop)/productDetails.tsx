import { View, Text, Button } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function ProductDetails() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Product Details Screen</Text>
      <Button title="Go to home" onPress={() => router.back()} />
    </View>
  );
}
