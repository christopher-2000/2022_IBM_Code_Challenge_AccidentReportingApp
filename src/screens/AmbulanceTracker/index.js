import { Text, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function AmbulanceTracker() {
  return (
    <View style={styles.container}>
      <MapView
        
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={'title'}
          description={'description'}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
