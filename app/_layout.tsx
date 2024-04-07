import '../global.css';

import '../translation';

import { Stack, router } from 'expo-router';
import { HeaderButton } from '~/src/components/HeaderButton';

const quantity = 2;

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return <App />;
}

function App() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="cart"
        options={{
          presentation: 'modal',
          title: `Cart (${quantity})`,
          headerRight: () => (
            <HeaderButton
              iconName={'remove'}
              iconColor="#000"
              iconSize={24}
              onPress={() => router.dismiss()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          presentation: 'modal',
          title: `Profile`,
          headerRight: () => (
            <HeaderButton
              iconName={'remove'}
              iconColor="#000"
              iconSize={24}
              onPress={() => router.dismiss()}
            />
          ),
        }}
      />
    </Stack>
  );
}
