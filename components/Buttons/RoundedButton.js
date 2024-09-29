import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundedButton = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { 
          backgroundColor: isPressed ? '#FFB800' : 'transparent', // Solid background when pressed
        }
      ]}
      activeOpacity={1} // Prevent fading effect
      onPressIn={() => setIsPressed(true)} // Set pressed state on press in
      onPressOut={() => setIsPressed(false)} // Reset pressed state on press out
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100, // 100% border radius
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#FFB800', // Default border color
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoundedButton;
