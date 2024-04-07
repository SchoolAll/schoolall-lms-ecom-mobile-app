import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { AppButton } from './Button';

const MyButtonMeta: Meta<typeof AppButton> = {
  title: 'MyButton',
  component: AppButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof AppButton> = {};

export const AnotherExample: StoryObj<typeof AppButton> = {
  args: {
    text: 'Another example',
  },
};
