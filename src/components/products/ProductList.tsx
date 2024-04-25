import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductCard from './ProductCard';
import { products } from '~/constants/productsData';

const ProductSliderList = () => {
  const resnderItems = ({ item }: any) => {
    return (
      <ProductCard
        name={item.name}
        price={item.price}
        mediaUrls={item.image}
        ratingValue={item.rating}
        totalRating={item.ratingCount}
        onPressCard={() => console.log('Product card pressed')}
        onPressBuyNow={() => console.log('Buy now product button pressed')}
      />
    );
  };

  return (
    <View style={{ padding: 8 }}>
      <FlatList
        data={products}
        renderItem={resnderItems}
        keyExtractor={(item) => item.productId}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductSliderList;

const styles = StyleSheet.create({});
