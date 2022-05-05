import { View, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from './style'

export default function Home(){
  return (
    <View style={styles.container}>
        <StatusBar style="light" backgroundColor="black"/>

        <View style={styles.innerContainer}>
          <Text style={styles.help}>Would you need Help?</Text>
          <View style={styles.accident}>
            <Text style={styles.text}>Accident Report</Text>
          </View>
          <View style={styles.emergency}>
            <Text style={styles.text}>Emergency Report</Text>
          </View>
        </View>
    </View>
  )
}
