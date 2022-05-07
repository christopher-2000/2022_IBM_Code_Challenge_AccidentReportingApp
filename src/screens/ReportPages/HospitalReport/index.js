import { View, Text, TextInput, ScrollView, Pressable,Image,Dimensions } from 'react-native'
import React from 'react'
import Switches from 'react-native-switches'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const {width, height}=Dimensions.get('screen')

export default function HospitalReport() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Bold' }}>Accident Report</Text>
                <MaterialCommunityIcons name="pencil" size={24} color="black" />
            </View>
            <Text style={{ fontSize: 20, fontFamily: 'Bold', marginTop: 10 }}>#Case ID</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }} >
                <Text style={{ fontSize: 20, fontFamily: 'Bold', marginTop: 10 }}>25-04-2022</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Bold', marginTop: 10 }}>21:05:50</Text>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 15, fontFamily: 'Bold', marginTop: 10 }}>Number of People Injured</Text>
                <TextInput
                    placeholder='Injured People'
                    style={{
                        padding: 10,
                        backgroundColor: '#E3E5F3',
                        fontFamily: 'Regular',
                        fontSize: 15,
                        marginTop: 10,
                        borderRadius: 5
                    }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 15, fontFamily: 'Bold', marginTop: 10 }}>Health Status</Text>
                <TextInput
                    placeholder='Health Status'
                    style={{
                        padding: 10,
                        backgroundColor: '#E3E5F3',
                        fontFamily: 'Regular',
                        fontSize: 15,
                        marginTop: 10,
                        borderRadius: 5,
                    }}
                />
            </View>
            <View style={{ }}>
                <Text style={{ fontSize: 15, fontFamily: 'Bold', marginTop: 10 }}>Vehicle Numbers</Text>
                <TextInput
                    placeholder='Vehicle Number'
                    style={{
                        padding: 10,
                        backgroundColor: '#E3E5F3',
                        fontFamily: 'Regular',
                        fontSize: 15,
                        marginTop: 10,
                        borderRadius: 5,
                        marginBottom: 17
                    }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 15, fontFamily: 'Bold', marginTop: 0 }}>Treatment Provided</Text>
                <TextInput
                    placeholder='Treatment Given'
                    style={{
                        padding: 10,
                        backgroundColor: '#E3E5F3',
                        fontFamily: 'Regular',
                        fontSize: 15,
                        marginTop: 10,
                        borderRadius: 5,
                        marginBottom: 17
                    }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 15, fontFamily: 'Bold' }}>Short Description</Text>
                <TextInput
                    placeholder='Description'
                    style={{
                        padding: 10,
                        backgroundColor: '#E3E5F3',
                        fontFamily: 'Regular',
                        fontSize: 15,
                        marginTop: 10,
                        borderRadius: 5,
                    }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 15, fontFamily: 'Bold' , marginTop: 10}}>Dr Incharge</Text>
                <TextInput
                    placeholder='Dr Incharge'
                    style={{
                        padding: 10,
                        backgroundColor: '#E3E5F3',
                        fontFamily: 'Regular',
                        fontSize: 15,
                        marginTop: 10,
                        borderRadius: 5,
                    }}
                />
            </View>


            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: '#BA1212', marginTop: 30, borderRadius: 5, }}>
                <Text style={{ fontSize: 15, fontFamily: 'Bold', color: 'white' }}>SUBMIT</Text>
            </View>
            <View
                style={{ height: 50 }}
            />
        </ScrollView>
  )
}