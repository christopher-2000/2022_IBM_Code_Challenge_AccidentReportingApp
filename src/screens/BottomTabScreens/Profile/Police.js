import { View, Text ,Button} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Police({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white',padding:20}}>
      <StatusBar style="light" backgroundColor="black"/>
      
      <View style={{alignItems: 'center'}}>
          <Text style={{color:'rgba(0,0,0,0.2)',fontSize:25,fontFamily:'Black'}}>Jhon doe</Text>
          <Text style={{color:'rgba(0,0,0,0.5)',fontSize:20,fontFamily:'Black'}}>abc@gmail.com</Text>
      </View>

      <Button onPress={() => {
        navigation.navigate("Policeedit")
      }}  title="Edit Profile" color={"gray"} />

      <View style={{marginTop:20}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>Police ID</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>f109874b</Text>
      </View>


      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>police station id</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>klohoo444</Text>
      </View>


      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>phone number</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>1234567890</Text>
      </View>

      <View style={{marginTop:10}}>
          <Text style={{color:'rgba(0,0,0,0.3)',fontSize:16,fontFamily:'Black'}}>Address</Text>
          <Text style={{color:'rgba(0,0,0,0.7)',fontSize:20,fontFamily:'Thin'}}>2-18-6/73 veer street gol district500078</Text>
      </View>

    </View>
  )
}