import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';
import ProductSliderList from '~/src/components/products/ProductList';

export default function Home() {
  return (
    <>
      <View className={styles.container}>
        <ProductSliderList />
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
