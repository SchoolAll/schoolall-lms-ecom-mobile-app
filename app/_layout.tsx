import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen, Stack, router } from 'expo-router';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

import Storybook from '../.storybook';
import '../global.css';
import '../translation';

import { IconButton } from '~/src/components/IconButton';
import { StatusBar } from 'expo-status-bar';
import { customTheme } from '~/constants/customTheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
(Text as any).defaultProps.allowFontScaling = false;

const quantity = 2;

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function RootLayout() {
  const [loaded, error] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoMedium: Roboto_500Medium,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      // Hides the splash screen
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    ...customTheme,
  };
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <RootLayoutNav />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

function RootLayoutNav() {
  return (
    <>
      <App />
    </>
  );
}

function App() {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="cart"
        options={{
          presentation: 'modal',
          title: `Cart (${quantity})`,
          headerRight: () => (
            <IconButton
              iconName={'remove'}
              iconColor="#000"
              iconSize={24}
              onPress={() => router.dismiss()}
              IconImport={FontAwesome}
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
            <IconButton
              iconName={'remove'}
              iconColor="#000"
              iconSize={24}
              onPress={() => router.dismiss()}
              IconImport={FontAwesome}
            />
          ),
        }}
      />
    </Stack>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : RootLayout;
