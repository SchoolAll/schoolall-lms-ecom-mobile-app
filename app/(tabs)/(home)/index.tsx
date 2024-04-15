import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Container } from '~/src/components/Container';
import ProductCard from '~/src/components/products/ProductCard';

export default function Home() {
  const theme = useTheme();
  const image =
    'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Container style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ProductCard
        name={'Product name'}
        price={99.9}
        mediaUrls={image}
        ratingValue={4}
        totalRating={10}
        onPressCard={() => console.log('Product card pressed')}
        onPressBuyNow={() => console.log('Buy now product button pressed')}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
