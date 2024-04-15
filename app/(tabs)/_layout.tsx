import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { BlurView } from 'expo-blur';

import { TabBarIcon } from '../../src/components/TabBarIcon';

export default function TabLayout() {
  const theme = useTheme();
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#000',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
        },
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 5,
          backgroundColor: theme.colors.outlineVariant,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              // ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: theme.colors.surface,
            }}
          />
        ),
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(shop)"
        options={{
          headerTitle: 'Shop',
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(news)"
        options={{
          headerTitle: 'Blogs',
          tabBarLabel: 'Blogs',
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(xdashboard)"
        options={{
          headerTitle: 'Dashboard',
          tabBarLabel: 'Dashobard',
          tabBarIcon: ({ color }) => <TabBarIcon name="dashboard" color={color} />,
        }}
      />
    </Tabs>
  );
}
