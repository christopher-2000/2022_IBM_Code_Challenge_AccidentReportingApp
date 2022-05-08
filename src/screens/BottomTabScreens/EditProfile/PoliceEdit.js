import { View, Text,Dimensions,TextInput } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('screen')
export default function PoliceEdit() {
  return (
    <View style={{flex:1,backgroundColor:'white',padding:20}}>
      <Text style={{color:'rgba(0,0,0,0.7)',fontSize:25,fontFamily:'Bold',marginBottom:20}}>Edit Profile/ Police</Text>
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{width:width/2.5}}>
            <Text style={{fontFamily:'Medium'}}>First Name</Text>
            <TextInput
            placeholder="First Name"
              style={{
                fontFamily:'Regular',
                fontSize:17,
                padding:6,
                backgroundColor:'#E3E5F3',
                marginTop:5
              }}
            />
          </View>
          <View style={{width:width/2.5}}>
            <Text style={{fontFamily:'Medium'}}>Last Name</Text>
            <TextInput
            placeholder="Last Name"
          style={{
            fontFamily:'Regular',
            fontSize:17,
            padding:6,
            backgroundColor:'#E3E5F3',
            marginTop:5
          }}
            />
          </View>
        </View>
        <View>
            <Text style={{fontFamily:'Medium',marginTop:15}}>Phone number</Text>
            <TextInput
            placeholder="Phone Number"
          style={{
            fontFamily:'Regular',
            fontSize:17,
            padding:6,
            backgroundColor:'#E3E5F3',
            marginTop:5
          }}
            />
          </View>
          <View>
            <Text style={{fontFamily:'Medium',marginTop:15}}>Email</Text>
            <TextInput
            placeholder="Email"
          style={{
            fontFamily:'Regular',
            fontSize:17,
            padding:6,
            backgroundColor:'#E3E5F3',
            marginTop:5
          }}
            />
          </View>
          <View>
            <Text style={{fontFamily:'Medium',marginTop:20}}>Emergeny Contacts</Text>
            <TextInput
            placeholder="Add Multiple Contacts By Adding a ' , '"
          style={{
            fontFamily:'Regular',
            fontSize:17,
            padding:6,
            backgroundColor:'#E3E5F3',
            marginTop:5
          }}
            />
          </View>
          <View>
            <Text style={{fontFamily:'Medium',marginTop:20}}>Vehicle Number</Text>
            <TextInput
            placeholder="Add Multiple Vehicle By Adding a ' , '"
          style={{
            fontFamily:'Regular',
            fontSize:17,
            padding:6,
            backgroundColor:'#E3E5F3',
            marginTop:5
          }}
            />
          </View>
      </View>
      <View style={{padding:10,alignItems: 'center',justifyContent: 'center',backgroundColor:'#BA1212',marginTop:35}}>
        <Text style={{color:'white',fontFamily:'Bold'}}>SUBMIT</Text>
      </View>
    </View>
  )
}