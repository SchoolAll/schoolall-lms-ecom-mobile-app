import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

import { ScreenContent } from '~/src/components/ScreenContent';
import ProductCard from '~/src/components/products/ProductCard';

export default function Home() {
  const image =
    'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <ProductCard
        name={'Product name'}
        price={99.9}
        mediaUrls={image}
        ratingValue={4}
        totalRating={10}
        onPressCard={function (): void {
          throw new Error('Function not implemented.');
        }}
        onPressBuyNow={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
