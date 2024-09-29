import React from 'react';
import { Image } from 'react-native';
import styles from '../styles';

// Header Component
const HeaderTitle = () => {
  const logoImage = require('../../assets/AClogo.png'); // Adjust the path to your image
  return <Image source={logoImage} style={[styles.smallImage]} />;
};

export default HeaderTitle;
