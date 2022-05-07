import { View, Text, TextInput, ScrollView, Pressable,Image,Dimensions } from 'react-native'
import React from 'react'
import Switches from 'react-native-switches'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const {width, height}=Dimensions.get('screen')

export default function PoliceReport() {

    const [switchValue, setswitchValue] = React.useState(false);

    const [image, setImage] = React.useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

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
                <Text style={{ fontSize: 15, fontFamily: 'Bold', marginTop: 10 }}>Accident Cause</Text>
                <TextInput
                    placeholder='Cause Of Accident'
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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 20 }}>
                <Text style={{ fontSize: 17, fontFamily: 'Bold', marginTop: 10 }}>Ambulance Required?</Text>
                <Switches shape={'pill'} showText={false} colorSwitchOn={'black'} colorSwitchOff={'grey'} sliderHeight={25} buttonSize={24} sliderWidth={60} onChange={() => setswitchValue(!switchValue)} value={switchValue} />
            </View>
            <View style={{ marginTop: 5 }}>
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
                <Text style={{ fontSize: 15, fontFamily: 'Bold', marginTop: 0 }}>Short description</Text>
                <TextInput
                    placeholder='Cause Of Accident'
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
                <Text style={{ fontSize: 15, fontFamily: 'Bold', marginBottom: 10 }}>Attach Image</Text>
            </View>
            <View>
                {
                    image ? <Image source={{ uri: image }} style={{ width: width/3, height: width/3 }} /> :
                        <Pressable onPress={pickImage}>
                            <AntDesign name="addfile" size={55} color="black" />
                        </Pressable>
                }

            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: '#BA1212', marginTop: 20, borderRadius: 5, }}>
                <Text style={{ fontSize: 15, fontFamily: 'Bold', color: 'white' }}>SUBMIT</Text>
            </View>
            <View
                style={{ height: 30 }}
            />
        </ScrollView>
    )
}