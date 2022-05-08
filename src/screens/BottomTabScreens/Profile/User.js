import { View, Text, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function User({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white',padding:20}}>
      <StatusBar style="light" backgroundColor="black"/>
      
      <View style={{alignItems: 'center',marginBottom:10}}>
          <Text style={{color:'rgba(0,0,0,0.2)',fontSize:25,fontFamily:'Black'}}>Jhon doe</Text>
          <Text style={{color:'rgba(0,0,0,0.5)',fontSize:20,fontFamily:'Black'}}>abc@gmail.com</Text>
      </View>

      <Button onPress={() => {
        navigation.navigate("Useredit")
      }}  title="Edit Profile" color={"gray"} />

      <View style={{marginTop:20}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>Contact Number</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>1234567890</Text>
      </View>


      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>Emergency Contact</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>0987654321</Text>
      </View>


      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>Vehicle Number</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>MH04AB0909</Text>
      </View>

      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>Address</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}> 2-18-6/73 veer street gol district500078</Text>
      </View>

    </View>
  )
}