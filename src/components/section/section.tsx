import { FC } from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';

import { Button, Divider, IconButton, Surface, Text, useTheme } from 'react-native-paper';
import { SectionProps } from './section.types';

const Section: FC<SectionProps> = ({
  Header,
  headerTitle,
  Content,
  Footer,
  hideHeader,
  hideFooter,
  ViewAllButtonPressAction,
  onPressSection,
}: SectionProps) => {
  Header = Header ? Header : header({ title: headerTitle });

  //   Footer = Footer ? Footer : footer();

  // const onPressSection = () => {
  //   console.log("Section cARD pRESSED!");
  // };

  const { height, width, ...rest } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {hideHeader || <View style={styles.footer}>{Header}</View>}
      <View style={styles.content}>{Content}</View>
      {/* {hideFooter || <View style={styles.footer}>{Footer}</View>} */}
    </View>
  );
};

const header = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <Surface
      mode="flat"
      style={{
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginHorizontal: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          gap: 4,
        }}>
        <Divider
          bold={true}
          style={{
            backgroundColor: theme.colors.primary,
            width: '2%',
            height: '100%',
          }}
          theme={{ colors: { primary: 'green' } }}
        />
        <Text variant="headlineSmall">{title}</Text>
      </View>
      <Pressable onPress={() => console.log('View more option button pressed')}>
        {({ pressed }) => (
          <IconButton icon="arrow-right" size={24} style={{ opacity: pressed ? 0.5 : 1 }} />
        )}
      </Pressable>
    </Surface>
  );
};

// const footer = () => (
//   <Button mode="contained" compact={true} style={{ paddingHorizontal: '2%' }}>
//     View all
//   </Button>
// );

const styles = StyleSheet.create({
  container: {},
  header: {},
  content: {},
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Section;
