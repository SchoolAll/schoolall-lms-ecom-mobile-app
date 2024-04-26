import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <View className={styles.container}>
        <Text>Shop Screen</Text>
        <Link href={'/productDetails'} asChild>
          <Button title="Go to Product Details" />
        </Link>
      </View>
    </>
  );
}

const styles = {
  container: `flex-1 items-center justify-center`,
};
