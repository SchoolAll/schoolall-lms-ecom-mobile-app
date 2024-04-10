import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { IconButton } from '~/src/components/IconButton';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <Link href="/cart" asChild>
              <IconButton
                iconName={'shopping-cart'}
                iconColor="#000"
                iconSize={23}
                IconImport={FontAwesome}
              />
            </Link>
            <Link href="/profile" asChild>
              <FontAwesome iconName={'user-circle-o'} iconColor="#000" iconSize={23} />
            </Link>
          </View>
        ),
      }}>
      <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
    </Stack>
  );
}
