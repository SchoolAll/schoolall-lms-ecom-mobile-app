import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <View className={styles.container}>
      <Text>Blogs Screen</Text>
    </View>
  );
}

const styles = {
  container: `flex-1 items-center justify-center`,
};
