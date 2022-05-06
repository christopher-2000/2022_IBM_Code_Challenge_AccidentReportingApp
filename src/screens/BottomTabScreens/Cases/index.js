import { ScrollView, Text ,Image,FlatList,View} from 'react-native'
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

  
{/* <Text>{JSON.stringify(cases, null, 2)}</Text> 
        <Text>{JSON.stringify(cases,null,2)}</Text>*/}

  return (
    <ScrollView style={{flex:1}}>
      <StatusBar style="light" backgroundColor="black"/>
      
      <View>
        <Text style={{fontFamily:'Bold',fontSize:22,padding:20}}>Recent Reports by you</Text>
        <View style={{backgroundColor:'green',padding:15,marginTop:16,paddingVertical:20,borderRadius:10,elevation:10,margin:20}}>
          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20-02-2022 </Text>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20:25:15</Text>
          </View>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15,marginTop:8}}>Banarjee Rd, kochi</Text>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15}}>Status: Taken to hospital</Text>
        </View>
      </View>
      <View style={{marginTop:20}}>
      <Text style={{fontFamily:'Bold',fontSize:22,paddingHorizontal:20}}>Accidents Nearby</Text>
        <View style={{backgroundColor:'#B80606',padding:15,marginTop:16,paddingVertical:20,borderRadius:10,elevation:10,margin:20}}>
          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20-02-2022 </Text>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20:25:15</Text>
          </View>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15,marginTop:8}}>Banarjee Rd, kochi</Text>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15}}>Status: Taken to hospital</Text>
        </View> 
        <View style={{backgroundColor:'#B80606',padding:15,marginTop:16,paddingVertical:20,borderRadius:10,elevation:10,margin:20}}>
          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20-02-2022 </Text>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20:25:15</Text>
          </View>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15,marginTop:8}}>Banarjee Rd, kochi</Text>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15}}>Status: Taken to hospital</Text>
        </View>
        <View style={{backgroundColor:'#B80606',padding:15,marginTop:16,paddingVertical:20,borderRadius:10,elevation:10,margin:20}}>
          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20-02-2022 </Text>
            <Text style={{color:'white',fontFamily:'Bold',fontSize:17}}>20:25:15</Text>
          </View>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15,marginTop:8}}>Banarjee Rd, kochi</Text>
          <Text style={{color:'white',fontFamily:'Regular',fontSize:15}}>Status: Taken to hospital</Text>
        </View>
      </View>
    </ScrollView>
  )
}
