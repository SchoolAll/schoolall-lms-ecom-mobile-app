import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { HeaderButton } from '~/src/components/HeaderButton';

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <Link href="/cart" asChild>
              <HeaderButton iconName={'shopping-cart'} iconColor="#000" iconSize={23} />
            </Link>
            <Link href="/profile" asChild>
              <HeaderButton iconName={'user-circle-o'} iconColor="#000" iconSize={23} />
            </Link>
          </View>
        ),
      }}>
      <Stack.Screen name="index" options={{ headerTitle: 'Blogs' }} />
    </Stack>
  );
}
