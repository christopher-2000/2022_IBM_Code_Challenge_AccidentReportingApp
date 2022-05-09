import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AmbulanceHome from '../screens/BottomTabScreens/Home/Ambulance';
import { Dimensions,View,Text,Image } from 'react-native'
import PoliceHome from '../screens/BottomTabScreens/Home/police';
const {height,width}=Dimensions.get('screen');

const Tab = createBottomTabNavigator();



import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import UserReport from '../screens/ReportPages/UserReport'
import HospitalReport from '../screens/ReportPages/HospitalReport'
import PoliceReport from '../screens/ReportPages/PoliceReport'

import HospitalCase from '../screens/BottomTabScreens/Cases/HospitalCase'
import PoliceCase from '../screens/BottomTabScreens/Cases/PoliceCase';
import AmbulanceCase from '../screens/BottomTabScreens/Cases/AmbulanceCase';

import Cases from '../screens/BottomTabScreens/Cases';
import Home from '../screens/BottomTabScreens/Home/User';
import Profile from '../screens/BottomTabScreens/Profile';
import Contact from '../screens/BottomTabScreens/Contact';

import User from '../screens/BottomTabScreens/Profile/User';
import Hospital from '../screens/BottomTabScreens/Profile/Hospital'
import Police from '../screens/BottomTabScreens/Profile/Police'
import Ambulance from '../screens/BottomTabScreens/Profile/Ambulance'
// import Police from '../screens/BottomTabScreens/Profile/Police';

import UserEdit from '../screens/BottomTabScreens/EditProfile/UserEdit';
import PoliceEdit from '../screens/BottomTabScreens/EditProfile/PoliceEdit';
import AmbulanceEdit from '../screens/BottomTabScreens/EditProfile/AmbulanceEdit';
import HospitalEdit from '../screens/BottomTabScreens/EditProfile/HospitalEdit'

import LOGO from '../assets/images/help-logos_transparent.png'

import ShowReport from '../screens/ShowReport'



export default function MainPolice() {
  return (
    // <NavigationContainer>
        <Tab.Navigator
        
          screenOptions={{
            tabBarStyle:{
              backgroundColor:'#000000',
              height:height/14
              
            },
            tabBarActiveTintColor:"white",
            indicatorStyle: { backgroundColor: 'red',},
            indicatorStyle: {
              backgroundColor: 'transparent',
              borderBottomColor: 'rgba(119,75,151,1)',
              borderBottomWidth: 2
            },
          }}
        >
            <Tab.Screen 
              name="PoliceHome" 
              component={PoliceHome} 
              options={{
                tabBarIcon:({color,size})=>(<Entypo name="home" size={size} color={color}/>),
                tabBarLabel:()=>null,
                headerTitle:()=>null,
                headerRight:()=>(
                  <View style={{alignItems: 'center',marginHorizontal:10}}>
                    <Ionicons name="md-reorder-three-outline" size={30} color="white" />
                  </View>
                ),
                headerLeft:()=>(
                  <View style={{flexDirection:'row',alignItems: 'center',marginHorizontal:10}}>
                    <Image source={LOGO} style={{width:width/9,height:width/9}}/>
                    <Text style={{color:'white',fontFamily:'Thin',fontSize:22,marginHorizontal:7}}>Jatayu/Home</Text>
                  </View>
                ),
                headerStyle:{
                  backgroundColor:'black',
                  height:height/13,
                }
              }}
            />
            <Tab.Screen 
              name="PoliceCases" 
              component={PoliceCase} 
              options={{
                tabBarIcon:({color,size})=>(<FontAwesome5 name="car-crash" size={size} color={color} />),
                tabBarLabel:()=>null,
                headerTitle:()=>null,
                headerRight:()=>(
                  <View style={{alignItems: 'center',marginHorizontal:10}}>
                    <Ionicons name="md-reorder-three-outline" size={30} color="white" />
                  </View>
                ),
                headerLeft:()=>(
                  <View style={{flexDirection:'row',alignItems: 'center',marginHorizontal:10}}>
                    <Image source={LOGO} style={{width:width/9,height:width/9}}/>
                    <Text style={{color:'white',fontFamily:'Thin',fontSize:22,marginHorizontal:7}}>Jatayu/Cases</Text>
                  </View>
                ),
                headerStyle:{
                  backgroundColor:'black',
                  height:height/13,
                }
              }}
            />
            <Tab.Screen 
              name="ProfilePolice"
              component={Police} 
              options={{
                tabBarIcon:({color,size})=>(<AntDesign name="profile" size={size} color={color}/>),
                tabBarLabel:()=>null,
                headerTitle:()=>null,
                headerRight:()=>(
                  <View style={{alignItems: 'center',marginHorizontal:10}}>
                    <Ionicons name="md-reorder-three-outline" size={30} color="white" />
                  </View>
                ),
                headerLeft:()=>(
                  <View style={{flexDirection:'row',alignItems: 'center',marginHorizontal:10}}>
                    <Image source={LOGO} style={{width:width/9,height:width/9}}/>
                    <Text style={{color:'white',fontFamily:'Thin',fontSize:22,marginHorizontal:7}}>Jatayu/Profile</Text>
                  </View>
                ),
                headerStyle:{
                  backgroundColor:'black',
                  height:height/13,
                }
              }}
            />
            <Tab.Screen 
              name="Contact" 
              component={Contact} 
              options={{
                tabBarIcon:({color,size})=>(<MaterialIcons name="contact-page" size={size} color={color} />),
                tabBarLabel:()=>null,
                headerTitle:()=>null,
                headerRight:()=>(
                  <View style={{alignItems: 'center',marginHorizontal:10}}>
                    <Ionicons name="md-reorder-three-outline" size={30} color="white" />
                  </View>
                ),
                headerLeft:()=>(
                  <View style={{flexDirection:'row',alignItems: 'center',marginHorizontal:10}}>
                    <Image source={LOGO} style={{width:width/9,height:width/9}}/>
                    <Text style={{color:'white',fontFamily:'Thin',fontSize:22,marginHorizontal:7}}>Jatayu/Contacts</Text>
                  </View>
                ),
                headerStyle:{
                  backgroundColor:'black',
                  height:height/13,
                }
              }}
            />
        </Tab.Navigator>
    // </NavigationContainer>
  );
}