import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Kotak from './components/kotak'; 

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tugas pertemuan 2 praktikum dpm</Text>

      <View style={styles.boxContainer}>
        <Kotak warna="grey" />
        <Kotak warna="red" /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#D3D3D3', 
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 20,
  },
});
export default App;
