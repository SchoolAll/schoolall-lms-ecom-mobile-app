import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const TabBarHeaderLayout: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: '#FFFBFF',
  },
  headerLargeTitleStyle: {
    color: '#000',
  },
  headerTintColor: '#000',
  headerTransparent: true,
  headerBlurEffect: 'prominent',
  headerShadowVisible: false,
};
