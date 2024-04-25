import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { Badge, Card, TouchableRipple } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import { AppButton } from '../Button/Button';
// import { Button, Card, H2, Paragraph, XStack } from 'tamagui';
import { Link } from 'expo-router';
import { ProductCardProps } from './ProductCard.types';

const { width } = Dimensions.get('window');

const ProductCard = ({
  name,
  price,
  onPressCard,
  mediaUrls,
  ratingValue,
  totalRating,
  onPressBuyNow,
}: ProductCardProps) => {
  const [rating, setRating] = React.useState(3.5);
  const [ratingCount, setRatingCount] = React.useState(10);

  return (
    <Link href={'/productDetails'} asChild style={{ width: width * 0.5, marginHorizontal: 8 }}>
      <TouchableRipple style={{ width: width * 0.5 }}>
        <Card style={{ justifyContent: 'center' }}>
          <Card.Cover
            source={mediaUrls}
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          />

          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 8,
              }}>
              <Text numberOfLines={1} className={''}>
                {name}
              </Text>
              <Text style={{ marginRight: 0 }} className={''}>
                Le {price}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <StarRating rating={ratingValue} onChange={setRating} color="red" starSize={18} />
              <Text className={''}>({totalRating})</Text>
            </View>
          </Card.Content>

          <View style={{ width: 90, marginLeft: 8, paddingVertical: 8 }}>
            <AppButton
              text="Buy Now"
              backgroundColor={'purple'}
              borderRadius={8}
              onPress={onPressBuyNow}
            />
          </View>
        </Card>
      </TouchableRipple>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
