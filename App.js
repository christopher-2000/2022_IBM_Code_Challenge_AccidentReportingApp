import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';

import Main from './src/navigation/Main';
import MainPolice from './src/navigation/MainPolice';
import MainAmbulance from './src/navigation/MainAmbulance';
import MainHospital from './src/navigation/MainHospital';
import { ToastProvider } from 'react-native-toast-notifications';
import SelectUser from './src/screens/SelectUser';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import User from './src/screens/BottomTabScreens/Profile/User';
import PoliceEdit from './src/screens/BottomTabScreens/EditProfile/PoliceEdit';
import Hospital from './src/screens/BottomTabScreens/Profile/Hospital';
import HospitalEdit from './src/screens/BottomTabScreens/EditProfile/HospitalEdit';
import UserEdit from './src/screens/BottomTabScreens/EditProfile/UserEdit';
import AmbulanceEdit from './src/screens/BottomTabScreens/EditProfile/AmbulanceEdit';
// import Home from './src/screens/BottomTabScreens/Home';
import UserReport from './src/screens/ReportPages/UserReport';
import HospitalReport from './src/screens/ReportPages/HospitalReport';
import MainScreen from './src/screens/MainScreen';
import AmbulanceTracker from './src/screens/AmbulanceTracker';

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

  const Stack = createStackNavigator();

  return (
    <ToastProvider offsetTop={100} placement='top' textStyle={{ fontSize: 22 }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='AuthPage'
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Selectuser'
              component={SelectUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Policeedit'
              component={PoliceEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Hospedit'
              component={HospitalEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Useredit'
              component={UserEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Ambulanceedit'
              component={AmbulanceEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Homescreen'
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='HomescreenHospital'
              component={MainHospital}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='HomescreenPolice'
              component={MainPolice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Homescreenambulance'
              component={MainAmbulance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Userreport'
              component={UserReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Ambulancereport'
              component={HospitalReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Ambulancetracker'
              component={AmbulanceTracker}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
