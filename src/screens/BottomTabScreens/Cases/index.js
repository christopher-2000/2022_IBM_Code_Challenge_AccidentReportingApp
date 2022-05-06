import { ScrollView, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { db } from '../../../../components/config';
import { ref, onValue, query, orderByChild } from 'firebase/database';
import { useState, useEffect } from 'react';
import { Button } from 'react-native-web';
import { async } from '@firebase/util';

export default function Cases(){
  
  const [cases, setCases] = useState(null);

  useEffect(() => {
    let accidents = {}
    const dbRef = ref(db, 'Accidents/');
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        accidents[childKey] = childData;
      });
      //console.log(accidents);
      setCases(accidents);
      
    }, {
      onlyOnce: true
    });
    }, [])
  


  return (
    <ScrollView >
      <StatusBar style="light" backgroundColor="black"/>
      <Text>{JSON.stringify(cases, null, 2)}</Text>
    </ScrollView>
  )
}
