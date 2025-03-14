import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <TextInput style={styles.input} placeholder='Email'/>
      <TextInput style={styles.input} placeholder='Password'/>
      <TouchableOpacity> </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1b2e06',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#e7fccf',
    borderColor: '#4c8708',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
});

export default App;
