import { View, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { db } from '../../../../components/config';
import { ref, onValue } from 'firebase/database';
import { useState } from 'react/cjs/react.production.min';
import { Button } from 'react-native-web';


export default function Cases(){
  //const [test_case, setCase] = useState({})

  function readData(){
    const starCountRef = ref(db, 'Accidents/CaseID');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      //setCase(data,test_case);
});

  }

  return (
    <View >
      <Text onPress={readData}> hello </Text>
      <StatusBar style="light" backgroundColor="black"/>
    </View>
  )
}
