import { View, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import styles from './style'
import { FontAwesome } from '@expo/vector-icons';



import LOGO from '../../assets/images/logo.png'
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const users =[
    {
        id:1,
        item:"Police",
        icon: <MaterialCommunityIcons name="police-badge" size={24} color="#151C48" />
    },
    {
        id:2,
        item:"Hospital",
        icon: <FontAwesome5 name="hospital-alt" size={24} color="#151C48" />
    },
    {
        id:3,
        item:"User",
        icon: <Entypo name="user" size={24} color="#151C48" />
    },
    {
        id:4,
        item:"Ambulance",
        icon: <Fontisto name="ambulance" size={24} color="#151C48" />
    }
]

export default function SelectUser(){
  return (
    <View style={styles.container}>
        <Text style={styles.user}>Select User</Text>
            <FlatList
                data={users}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                    return(
                        <View style={styles.itemBox}>
                            {item.icon}
                            <Text style={styles.itemText}>{item.item}</Text>
                        </View>
                    )
                }}
                numColumns={2}
                style={styles.list}
            />
    </View>
  )
}

