import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        placeholderTextColor={'#FFFFFF'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, // Spacing around the input field
    width: '70%'
  },
  label: {
    marginBottom: 5, // Space between label and input
    color: '#FFB800', // Label color
  },
  input: {
    height: 40,
    borderWidth: 0, // No border
    borderBottomWidth: 1, // Optional: if you want a border at the bottom
    paddingHorizontal: 10, // Padding inside the input
    borderColor: '#FFB800',
    color: '#FFFFFF'
  },
});

export default InputField;
