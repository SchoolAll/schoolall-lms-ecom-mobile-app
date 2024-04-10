import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from './Button.Types';

export const AppButton = ({ onPress, text, backgroundColor, borderRadius }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor, borderRadius }]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: { color: 'white' },
});
