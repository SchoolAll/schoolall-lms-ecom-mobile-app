import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const ProductCardMeta: Meta<typeof ProductCard> = {
  title: 'ProductCard',
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
          mediaUrls={
            'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
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
