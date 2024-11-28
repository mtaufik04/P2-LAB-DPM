import React from 'react';
import { View, StyleSheet } from 'react-native';

const Kotak = ({ warna }) => {
  return <View style={[styles.box, { backgroundColor: warna }]}></View>;
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});

export default Kotak;
