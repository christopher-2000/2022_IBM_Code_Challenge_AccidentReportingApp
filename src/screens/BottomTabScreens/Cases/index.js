import { ScrollView, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { db } from '../../../../components/config';
import { ref, onValue, query, orderByChild } from 'firebase/database';
import { useState, useEffect } from 'react';

export default function Cases(){
  
  const [cases, setCases] = useState(null);
  
  useEffect(() => {
    const dbRef = ref(db, 'Accidents/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val()
        setCases(data);
      });
      //console.log(accidents);
    }, [])

  


  return (
    <ScrollView >
      <StatusBar style="light" backgroundColor="black"/>
      <Text>{JSON.stringify(cases,null,2)}</Text>
    </ScrollView>
  )
}
