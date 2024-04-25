import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Container } from '~/src/components/Container';
import ProductCard from '~/src/components/products/ProductCard';
import { products } from '~/constants/productsData';

export default function Home() {
  const theme = useTheme();

  return (
    <Container style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ProductCard
        name={products[0].name}
        price={products[0].price}
        mediaUrls={products[0].image}
        ratingValue={products[0].rating}
        totalRating={products[0].ratingCount}
        onPressCard={() => console.log('Product card pressed')}
        onPressBuyNow={() => console.log('Buy now product button pressed')}
      />
    </Container>
  );
}
