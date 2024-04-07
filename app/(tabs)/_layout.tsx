import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../src/components/HeaderButton';
import { TabBarIcon } from '../../src/components/TabBarIcon';
import { View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        // headerTitleAlign: 'left',
        headerShown: false,
        // headerRight: () => (
        //   <View style={{ flexDirection: 'row' }}>
        //     <Link href="/cart" asChild>
        //       <HeaderButton iconName={'shopping-cart'} iconColor="#000" iconSize={23} />
        //     </Link>
        //     <Link href="/profile" asChild>
        //       <HeaderButton iconName={'user-circle-o'} iconColor="#000" iconSize={23} />
        //     </Link>
        //   </View>
        // ),
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

          // headerLeft: () => (
          //   <>
          //     <Text>Hello</Text>
          //   </>
          // ),
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
