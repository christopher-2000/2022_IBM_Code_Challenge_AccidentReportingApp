import { View, Text ,Image, FlatList, Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import * as Location from 'expo-location';
import { db } from '../../../../components/config';
import { ref, set } from 'firebase/database';

export default function Home(){

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  

  // Function for submitting the Accident Case
  function submitCase(){
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let date_time = new Date().toLocaleString();
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = location;
    }
    
    set(ref(db,'Accidents/' + date_time),
      {
        "amulance id": "",
        "cause": "",
        "date reported": date,
        "emergency contacts": "",
        "hospital details": {
          "description": "",
          "dr incharge": "",
          "health status": "",
          "injured": "",
          "treatment provided": ""
        },
        "hospital name": "",
        "images links": "",
        "injured": "",
        "location": text,
        "police description": "",
        "police station": "",
        "status": "Ambulance Requested",
        "time reported": time,
        "vehicle number": "",
        "witness descriptions": ""
      }
    );
    console.log("Accident Reported");
  }

  return (
    <View style={styles.container}>
        <StatusBar style="light" backgroundColor="black"/>

        <View style={styles.innerContainer}>
          <Text style={styles.help}>Would you need Help?</Text>
          <View style={styles.accident}>
            <Text style={styles.text}>Accident Report</Text>
          </View>
          <View style={styles.emergency}>
            <Text onPress={submitCase} style={styles.text}>Emergency Report</Text>
          </View>
        </View>
    </View>
  )
}






