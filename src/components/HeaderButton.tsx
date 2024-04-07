import FontAwesome from '@expo/vector-icons/FontAwesome';
import { forwardRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';

export const HeaderButton = forwardRef<
  typeof Pressable,
  { onPress?: () => void; iconName: string | undefined | any; iconColor: string; iconSize: number }
>(({ onPress, iconName, iconColor, iconSize }, ref) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <FontAwesome
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
