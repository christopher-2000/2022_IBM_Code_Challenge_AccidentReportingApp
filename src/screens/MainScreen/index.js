import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import styles from './style';

import { FontAwesome } from '@expo/vector-icons';

import LOGO from '../../assets/images/logo.png';

export default function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.image} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button onPress={() => {navigation.navigate("Homescreen")}} title='Sign In' color={'#151C48'} />
        </View>
        <View style={styles.button}>
          <Button onPress={() => {navigation.navigate("Selectuser")}} title='Create Account' color={'#151C48'} />
        </View>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name='facebook-square' size={24} color='black' />
        <FontAwesome name='envelope' size={24} color='black' />
        <FontAwesome name='phone-square' size={24} color='black' />
      </View>
      <Text style={styles.loginContainer}>Login With another account</Text>
    </View>
  );
}
