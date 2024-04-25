import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const image = '../../../assets/images/bag.jpg';

const ProductCardMeta: Meta<typeof ProductCard> = {
  title: 'Product Card',
  component: ProductCard,
  argTypes: {
    // onPress: { action: 'pressed the button' },
  },

  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ProductCard
          name="Product name"
          price={99.9}
          mediaUrls={require(image)}
          ratingValue={4}
          totalRating={10}
          onPressCard={() => console.log('Product card pressed')}
          onPressBuyNow={() => console.log('Buy now product button pressed')}
        />
      </View>
    ),
  ],
};

export default ProductCardMeta;

export const Basic: StoryObj<typeof ProductCard> = {};
