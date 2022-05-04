import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import MainScreen from './src/screens/MainScreen'

export default function App() {

  const [loaded] = useFonts({
    Black: require('./src/assets/fonts/Roboto-Black.ttf'),
    BlackItalic: require('./src/assets/fonts/Roboto-BlackItalic.ttf'),
    Bold: require('./src/assets/fonts/Roboto-Bold.ttf'),
    BoldItalic: require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
    Italic: require('./src/assets/fonts/Roboto-Italic.ttf'),
    Light: require('./src/assets/fonts/Roboto-Light.ttf'),
    LightItalic: require('./src/assets/fonts/Roboto-LightItalic.ttf'),
    Medium: require('./src/assets/fonts/Roboto-Medium.ttf'),
    MediumItalic: require('./src/assets/fonts/Roboto-MediumItalic.ttf'),
    Regular: require('./src/assets/fonts/Roboto-Regular.ttf'),
    Thin: require('./src/assets/fonts/Roboto-Thin.ttf'),
    ThinItalic: require('./src/assets/fonts/Roboto-ThinItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
