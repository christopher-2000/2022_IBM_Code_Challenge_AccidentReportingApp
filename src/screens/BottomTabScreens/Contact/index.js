import { View, Text ,Image,FlatList,TextInput} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from './style'

export default function Contact(){
  return (
    <View style={styles.container}>
        <StatusBar style="light" backgroundColor="black"/>
        <Text>Get in Touch</Text>
        <View>
          <View>
            <Text>piyush twxt</Text>
          </View>
        </View>
    </View>
  )
}
