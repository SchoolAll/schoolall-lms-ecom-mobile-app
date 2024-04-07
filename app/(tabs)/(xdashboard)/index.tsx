import { View, Text } from 'react-native';
import React from 'react';

export default function Dashboard() {
  return (
    <View className={styles.container}>
      <Text>Dashboard Screen</Text>
    </View>
  );
}

const styles = {
  container: `flex-1 justify-center items-center`,
};
