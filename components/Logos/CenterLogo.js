import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles'; // Adjust the path as needed

// Declare your image source here
const logoImage = require('../../assets/AClogo.png'); // Adjust the path as needed

const CenterLogo = ({ width = 200, height = 200 }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={[styles.image, { width, height }]}
      />
    </View>
  );
};

export default CenterLogo;
