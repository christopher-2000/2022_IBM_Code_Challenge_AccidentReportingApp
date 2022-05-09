import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView, Text, View
} from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { db } from '../../../../../components/config';
import styles from './style';
const { width, height } = Dimensions.get('screen');

export default function Home({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const toast = useToast();
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
  function submitCase() {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let date_time = new Date().toLocaleString();
    let text = 'Waiting..';

    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = location;
    }

    set(ref(db, 'Accidents/' + date_time), {
      'date reported': date,
      'emergency contacts': ['8547544489', '8756475412'],
      'hospital name': 'Amala Hospital Thrissur',
      location: text,
      'police station': 'South Zone police station Thrissur',
      status: 'Ambulance Requested',
      'time reported': time,
      'vehicle number': 'KL-34-324',
    });
    toast.show('Accident Reported!! Hang in there.. Help is on the way', {
      type: 'success',
    });
    console.log('Accident Reported');
  }

  const [expand, setExpand] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      {/* <StatusBar style="light" backgroundColor="black"/> */}
      <View
        style={{
          backgroundColor: '#077239',
          width: width / 1.3,
          marginTop: 30,
          marginBottom: 50,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'white', fontFamily: 'Bold', fontSize: 16 }}>
            ACCIDENT REPORTED
          </Text>
          <Ionicons name='ios-checkmark-circle' size={24} color='white' />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 4,
          }}
        >
          <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 14 }}>
            20-05-2024
          </Text>
          <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 14 }}>
            20-05-2024
          </Text>
        </View>

        {!expand ? (
          <Pressable onPress={() => setExpand(true)}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Bold',
                fontSize: 17,
                marginTop: 10,
              }}
            >
              Click To Expand
            </Text>
          </Pressable>
        ) : (
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <FontAwesome5 name='hospital-alt' size={24} color='white' />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  marginLeft: 10,
                  fontFamily: 'Regular',
                }}
              >
                Amala Hospital, thrissur 680523{' '}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <MaterialIcons name='local-police' size={24} color='white' />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  marginLeft: 10,
                  fontFamily: 'Regular',
                }}
              >
                Police Station thrissur 8934
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <FontAwesome name='phone' size={24} color='white' />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  marginLeft: 10,
                  fontFamily: 'Regular',
                }}
              >
                Call - Dad, Mom, bro, Uncle
              </Text>
            </View>
            <Pressable onPress={() => setExpand(false)}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  marginTop: 15,
                  fontFamily: 'Bold',
                }}
              >
                Click To Minimize
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.help}>Would you need Help?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Userreport")
          }}
          style={styles.accident}
        >
          <Text style={styles.text}>Accident Report</Text>
        </Pressable>
        <View style={styles.emergency}>
          <Text onPress={submitCase} style={styles.text}>
            Emergency Report
          </Text>
        </View>
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

/*
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
*/
