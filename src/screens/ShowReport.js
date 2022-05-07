import { View, Text ,Image,ScrollView,Dimensions } from 'react-native'
import React from 'react'

const {width, height}=Dimensions.get('screen')

const ShowReport = () => {
  return (
    <ScrollView style={{flex:1,padding:20}}>
      <Text style={{ fontSize:22,fontFamily:'Black'}}>Accident Details</Text>
      <Text style={{fontSize:20,fontFamily:'Black'}}>#Case ID</Text>
      <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
          <Text style={{fontSize:18,fontFamily:'Light'}}>25-04-2022</Text>
          <Text style={{fontSize:18,fontFamily:'Light'}}>21:05:50</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:15}}>
          <Text style={{fontFamily:'Bold',fontSize:20}}>people injured : </Text>
          <Text style={{fontFamily:'Light',fontSize:20}}>4</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:8}}>
          <Text style={{fontFamily:'Bold',fontSize:20}}>cause : </Text>
          <Text style={{fontFamily:'Light',fontSize:20}}>drowsy driving</Text>
      </View>
      <View style={{marginTop:8}}>
          <Text style={{fontFamily:'Bold',fontSize:20}}>Vehicle Numbers </Text>
          <Text style={{fontFamily:'Light',fontSize:20}}>KL-45h-2021</Text>
      </View>
      <View style={{marginTop:8}}>
        <Text style={{fontFamily:'Bold',fontSize:20}}>Ambulance requested description :</Text>
          <Text style={{fontFamily:'Light',fontSize:20}}>The car was coming out of control</Text>
      </View>
      <View style={{marginTop:8,marginBottom:16}}>
          <Text style={{fontFamily:'Bold',fontSize:20,marginTop:20}}>Images</Text>
      </View>

      
      <Image style={{width:width/1.1,height:width/1.1}} source={{uri:'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}}/>
        <View style={{height:36}}/>
    </ScrollView>
  )
  //Carousel Image slide could be added, But multiple images addition is not enabled
}

export default ShowReport