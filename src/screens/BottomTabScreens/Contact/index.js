import { View, Text, Image, FlatList, TextInput,ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useToast } from 'react-native-toast-notifications';


export default function Contact() {

  const toast = useToast();

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Text style={styles.contact}>Our Contact</Text>
      <View>
        <View style={styles.detailContainer}>
          <AntDesign name="home" size={28} color="black" />
          <Text style={styles.text}>#210, Tribune Colony, Baltana, Punjab</Text>
        </View>
        <View style={styles.detailContainer}>
          <Feather name="phone" size={28} color="black" />
          <Text style={styles.text}>9321090000</Text>
        </View>
        <View style={styles.detailContainer}>
          <MaterialIcons name="email" size={28} color="black" />
          <Text style={styles.text}>Piyushbansal210@gmail.com</Text>
        </View>
      </View>
      <View>
        <Text style={styles.contactus}>Contact Form</Text>
        <View style={{marginTop:15}}>
          <View>
            <Text style={styles.name}>Full Name</Text>
            <TextInput 
              style={styles.input}
              placeholder={'Name'}
            />
          </View>
          <View>
            <Text style={styles.name}>Email</Text>
            <TextInput 
              style={styles.input}
              placeholder={'Email'}
            />
          </View>
          <View>
            <Text style={styles.name}>Message</Text>
            <View>
              <TextInput
                style={styles.message}
                multiline={true}
                placeholder={'Message'}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor:'black',marginTop:15}}>
        <Text onPress={() => {toast.show("Thank you!! We will get back to you soon!",{type:"success"})}} 
    style={{color:'white',justifyContent: 'center',padding:15,fontSize:16,fontFamily:'Bold'}}>Send Your Query</Text>
      </View>
      <View
        style={{height:50}}
      />
    </ScrollView>
  )
}
