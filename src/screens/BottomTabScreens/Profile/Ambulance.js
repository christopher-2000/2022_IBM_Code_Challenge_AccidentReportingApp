import { View, Text,Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Ambulance({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white',padding:20}}>
      <StatusBar style="light" backgroundColor="black"/>
      
      <View style={{alignItems: 'center'}}>
          <Text style={{color:'rgba(0,0,0,0.2)',fontSize:25,fontFamily:'Black'}}>Jhon doe</Text>
          <Text style={{color:'rgba(0,0,0,0.5)',fontSize:20,fontFamily:'Black'}}>abc@gmail.com</Text>
      </View>

      <Button onPress={() => {
        navigation.navigate("Ambulanceedit")
      }}  title="Edit Profile" color={"gray"} />

      <View style={{marginTop:20}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>vehicle number</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>AP23AN8976</Text>
      </View>


      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>ph num 1</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}> 8988977767</Text>
      </View>


      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>ph num 2</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}> 1234567890</Text>
      </View>

      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>Address</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}> 2-18-6/73 veer street gol district500078</Text>
      </View>

    </View>
  )
}