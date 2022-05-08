import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import Cases from '../screens/BottomTabScreens/Cases'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createStackNavigator();

export function UserCases() {
  return (
    null
  )
}

export function HospitalCases() {
  return (
    <View>
      <Text>Cases</Text>
    </View>
  )
}

export function AmbulanceCases() {
    return (
      <View>
        <Text>Cases</Text>
      </View>
    )
}


export function PoliceCases() {
    return (
      <View>
        <Text>Cases</Text>
      </View>
    )
  }