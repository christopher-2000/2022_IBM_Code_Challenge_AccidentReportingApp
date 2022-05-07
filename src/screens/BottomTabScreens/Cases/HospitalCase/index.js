import { ScrollView, Text, Image, FlatList, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
// import { db } from '../../../../components/config';
// import { ref, onValue, query, orderByChild } from 'firebase/database';
// import { useState, useEffect } from 'react';

export default function HospitalCase() {

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

    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar style="light" backgroundColor="black" />

            <View>
                <Text style={{ fontFamily: 'Bold', fontSize: 22, padding: 20 }}>Latest Report</Text>

                <View style={{ backgroundColor: 'green', padding: 15, marginTop: 5, paddingVertical: 20, borderRadius: 10, elevation: 10, margin: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20-02-2022</Text>
                        <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 17 }}>20:25:15</Text>
                    </View>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15, marginTop: 8 }}>Banarjee Rd, kochi</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 15 }}>Status: Requesting Ambulance</Text>
                </View>
            </View>



            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Bold', fontSize: 22, paddingHorizontal: 20 }}>Reports in the station</Text>
                <View style={{ backgroundColor: '#B80606', padding: 15, marginTop: 16, paddingVertical: 20, borderRadius: 10, elevation: 10, margin: 20 }}>
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
