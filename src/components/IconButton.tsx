import { forwardRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';

export const IconButton = forwardRef<
  typeof Pressable,
  {
    onPress?: () => void;
    iconName: string | undefined | any;
    iconColor: string;
    iconSize: number;
    IconImport: any;
  }
>(({ onPress, iconName, iconColor, iconSize, IconImport }, ref) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <IconImport
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={[
            styles.headerRight,
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        />
      )}
    </Pressable>
  );
});

export const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});
