import { View, Text ,Image,} from 'react-native'
import React from 'react'
import styles from './style'

import { FontAwesome } from '@expo/vector-icons';



import LOGO from '../../assets/images/logo.png'

export default function MainScreen(){
  return (
    <View style={styles.container}>
        <Image source={LOGO} style={styles.image}/>
        <View style={styles.buttonContainer}>
          <View style= {styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
          <View style= {styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="facebook-square" size={24} color="black" />
          <FontAwesome name="envelope" size={24} color="black" />
          <FontAwesome name="phone-square" size={24} color="black" />
        </View>
        <Text style={styles.loginContainer}>Login With another account</Text>
    </View>
  )
}

