
import { SafeAreaView, StyleSheet, Text, View,Platform ,StatusBar} from 'react-native';
import { useFonts } from 'expo-font';

import Main from './src/navigation/Main'
import { ToastProvider } from 'react-native-toast-notifications';

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
    <ToastProvider offsetTop={100} placement="top" textStyle={{ fontSize: 22 }}>
    <SafeAreaView style={styles.container}>
      <Main/>
    </SafeAreaView>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Platform.OS==='ios'?0:StatusBar.currentHeight 
  },
});
