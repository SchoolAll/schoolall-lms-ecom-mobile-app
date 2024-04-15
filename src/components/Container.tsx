import { SafeAreaView, ViewProps, ViewStyle } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
  style: ViewStyle;
};

export const Container = ({ children, style }: ContainerProps) => {
  return (
    <SafeAreaView style={[{ flex: 1 }, style]} className={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = {
  container: 'flex flex-1',
};
