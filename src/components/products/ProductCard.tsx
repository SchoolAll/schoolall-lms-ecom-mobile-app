import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { Badge, Card, TouchableRipple } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import { AppButton } from '../Button/Button';
// import { Button, Card, H2, Paragraph, XStack } from 'tamagui';
import { Link } from 'expo-router';
import { ProductCardProps } from './ProductCard.types';

// export function DemoCard(props: CardProps) {
//   return (
//     <Card elevate size="$4" bordered {...props}>
//       <Card.Header padded>
//         <H2>Sony A7IV</H2>
//         <Paragraph theme="alt2">Now available</Paragraph>
//       </Card.Header>
//       <Card.Footer padded>
//         <XStack flex={1} />
//         <Button borderRadius="$10">Purchase</Button>
//       </Card.Footer>
//       <Card.Background>
//         <Image
//           resizeMode="contain"
//           // alignSelf="center"
//           source={{
//             width: 300,
//             height: 300,
//             uri: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//           }}
//         />
//       </Card.Background>
//     </Card>
//   );
// }

const { width } = Dimensions.get('window');
const productName = 'Product name';

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
    <Link href={'/productDetails'} asChild style={{ width: width * 0.55, marginHorizontal: 8 }}>
      <TouchableRipple style={{ width: width * 0.55 }}>
        <Card style={{ justifyContent: 'center' }}>
          <Card.Cover
            source={{ uri: mediaUrls }}
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
                {`${name.slice(0, 20)}`}
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
            <View></View>
          </View>
        </Card>
      </TouchableRipple>
    </Link>
    // <Link href={'/productDetails'}>
    //   <XStack $sm={{ flexDirection: 'column' }} paddingHorizontal="$4" space>
    //     <DemoCard
    //       animation="bouncy"
    //       size="$4"
    //       width={250}
    //       height={300}
    //       scale={0.9}
    //       hoverStyle={{ scale: 0.925 }}
    //       pressStyle={{ scale: 0.875 }}
    //     />
    //     <DemoCard size="$5" width={250} height={300} />
    //   </XStack>
    // </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
