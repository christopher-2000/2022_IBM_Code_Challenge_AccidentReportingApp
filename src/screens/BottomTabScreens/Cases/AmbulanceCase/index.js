import { ScrollView, Text, Image, FlatList, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
// import { db } from '../../../../components/config';
// import { ref, onValue, query, orderByChild } from 'firebase/database';
// import { useState, useEffect } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')

export default function AmbulanceCase() {

    //   const [cases, setCases] = useState([
    //     {
    //       "date reported": "date",
    //       "emergency contacts": ["8547544489","8756475412"],
    //       "hospital name": "Amala Hospital Thrissur",
    //       "location": "location",
    //       "police station": "South Zone police station Thrissur",
    //       "status": "Ambulance Requested",
    //       "time reported": "time",
    //       "vehicle number": "KL-34-324"
    //     }
    //   ]);

    //   useEffect(() => {
    //     const dbRef = ref(db, 'Accidents/');
    //     onValue(dbRef, (snapshot) => {
    //       let data = [];
    //       snapshot.forEach((childSnapshot) => {
    //         const childData = childSnapshot.val();
    //         data.push(childData);
    //         // ...
    //       });
    //       setCases(data);
    //       });
    //       //console.log(accidents);
    //     }, [])


    {/* <Text>{JSON.stringify(cases, null, 2)}</Text> 
        <Text>{JSON.stringify(cases,null,2)}</Text>*/}

    const [showRequest, setShowRequest] = React.useState(false);

    const request = () => {
        setShowRequest(!showRequest)
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar style="light" backgroundColor="black" />

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Bold', fontSize: 22, paddingHorizontal: 20 }}>Ongoing Requests</Text>
                <View style={{ backgroundColor: '#DB7093', padding: 15, marginTop: 16, paddingVertical: 20, borderRadius: 10, elevation: 10, margin: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20-02-2022 </Text>
                        <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20:25:15</Text>
                    </View>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15, marginTop: 8 }}>Banarjee Rd, kochi</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15 }}>Status: Taken to hospital</Text>
                </View>
            </View>

            <View>
                <Text style={{ fontFamily: 'Bold', fontSize: 22, padding: 20 }}>Latest Report</Text>

                <Pressable style={{ backgroundColor: '#B80606', padding: 15, marginTop: 5, paddingVertical: 20, borderRadius: 10, elevation: 10, margin: 20 }}>

                    {
                        !showRequest ? <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20-02-2022</Text>
                                <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20:25:15</Text>
                            </View>
                            <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15, marginTop: 8 }}>Banarjee Rd, kochi</Text>
                            <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15 }}>Status: Requesting Ambulance</Text>
                            <Pressable onPress={() => request()}>
                                <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17,marginTop:10 }}>Click To see Request</Text>
                            </Pressable>
                            
                        </View> : <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20-02-2022</Text>
                                <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20:25:15</Text>
                            </View>
                            <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15, marginTop: 8 }}>Banarjee Rd, kochi</Text>
                            <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15 }}>Status: Requesting Ambulance</Text>
                            <MapView
                            style={{ marginBottom:'0%', height:200,width:'80%',marginHorizontal:'10%',}}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.05,
                                longitudeDelta: 0.05,
                            }}
                            >
                                <Marker coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }} title='Marker' />
                            </MapView>
                            <View style={{ marginTop: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="md-location" size={30} color="white" />
                                    <Text style={{ color: 'white', marginLeft: 20, fontSize: 15, fontFamily: 'Bold' }}>Near Bus Station, thrissur 680523 </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <FontAwesome5 name="hospital-alt" size={26} color="white" />
                                    <Text style={{ color: 'white', marginLeft: 20, fontSize: 15, fontFamily: 'Bold' }}>Amala Hospital, thrissur 680523 </Text>
                                </View>
                                
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: width / 9 }}>
                                <View style={{ padding: 10, backgroundColor: 'green', width: width / 3.5, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 16 }}>Accept</Text>
                                </View>
                                <View style={{ padding: 10, backgroundColor: '#F8A0A0', width: width / 3.5, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 16 }}>Reject</Text>
                                </View>
                            </View>

                            <Pressable onPress={() => request()}>
                                <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17,marginTop:20 }}>Click To Minimize</Text>
                            </Pressable>
                        </View>
                    }







                </Pressable>
            </View>



            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Bold', fontSize: 22, paddingHorizontal: 20 }}>FulFilled Requests</Text>
                <View style={{ backgroundColor: '#098424', padding: 15, marginTop: 16, paddingVertical: 20, borderRadius: 10, elevation: 10, margin: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20-02-2022 </Text>
                        <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20:25:15</Text>
                    </View>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15, marginTop: 8 }}>Banarjee Rd, kochi</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15 }}>Status: Taken to hospital</Text>
                </View>
            </View>

        </ScrollView>
    )
}
