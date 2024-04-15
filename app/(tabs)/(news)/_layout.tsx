import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { IconButton } from '~/src/components/IconButton';
import { FontAwesome } from '@expo/vector-icons';
import { TabBarHeaderLayout } from '~/src/components/TabBarHeaderLayout';

export default function _layout() {
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
              <IconButton
                iconName={'user-circle-o'}
                iconColor="#000"
                iconSize={23}
                IconImport={FontAwesome}
              />
            </Link>
          </View>
        ),
      }}>
      <Stack.Screen name="index" options={{ ...TabBarHeaderLayout, headerTitle: 'Blogs' }} />
    </Stack>
  );
}
