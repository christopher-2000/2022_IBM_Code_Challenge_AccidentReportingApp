import { FlatList, Pressable, Text, View } from 'react-native';
import styles from './style';

import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const users = [
  {
    id: 1,
    item: 'Police',
    icon: (
      <MaterialCommunityIcons name='police-badge' size={24} color='#151C48' />
    ),
  },
  {
    id: 2,
    item: 'Hospital',
    icon: <FontAwesome5 name='hospital-alt' size={24} color='#151C48' />,
  },
  {
    id: 3,
    item: 'User',
    icon: <Entypo name='user' size={24} color='#151C48' />,
  },
  {
    id: 4,
    item: 'Ambulance',
    icon: <Fontisto name='ambulance' size={24} color='#151C48' />,
  },
];

export default function SelectUser({ navigation }) {
  const [userType, setUserType] = useState(null);

  

  

  useEffect(() => {
    if (userType == 'Police') navigation.navigate('Policeedit');
    if (userType == 'Hospital') navigation.navigate('Hospedit');
    if (userType == 'User') navigation.navigate('Useredit');
    if (userType == 'Ambulance') navigation.navigate('Ambulanceedit');
  }, [userType]);

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Select User</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.itemBox}
              onPress={() => setUserType(item.item)}
            >
              {item.icon}
              <Text style={styles.itemText}>{item.item}</Text>
            </Pressable>
          );
        }}
        numColumns={2}
        style={styles.list}
      />
    </View>
  );
}
