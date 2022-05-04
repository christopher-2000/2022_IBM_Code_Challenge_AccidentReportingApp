import { View, Text ,Image} from 'react-native'
import React from 'react'
import styles from './style'

import LOGO from '../../assets/images/logo.png'

export default function MainScreen(){
  return (
    <View>
        <Text>fasdf</Text>
      <Image source={{uri:LOGO}} style={{width:100,height:100,backgroundColor:'black'}}/>
    </View>
  )
}

