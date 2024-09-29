import React, { useState } from 'react';
import { View, Text,Image, TouchableOpacity, Button} from 'react-native';
import styles from '../components/styles';
import CustomButton from '../components/Buttons/CustomButton';
import InputField from '../components/InputField/InputField';

const logoImage = require('../assets/AClogo.png'); // Adjust the path as needed

const HomeScreen = ({ navigation }) => {

  const handleButtonPress = (color) => {
    console.log(`${color} button pressed!`);
  };

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <View style={[styles.container]}>
      {/* <Text>Home Screen</Text> */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Image source={logoImage} style={[styles.bigImage]}/>
      <Image source={logoImage} style={[styles.smallImage]} />

      {/* Custom styled buttons */}
      <CustomButton 
        title="Red Button" 
        style={styles.redButton} 
        onPress={() => handleButtonPress('Red')} 
      />
      <CustomButton 
        title="Orange Button" 
        style={styles.orangeButton} 
        onPress={() => handleButtonPress('Orange')} 
      />
      <CustomButton 
        title="Gray Button" 
        style={styles.grayButton} 
        onPress={() => handleButtonPress('Gray')} 
      />
      <CustomButton 
        title="Black Button" 
        style={styles.blackButton} 
        onPress={() => handleButtonPress('Black')} 
      />
      <InputField
        label="Email"
        value={emailValue}
        onChangeText={setEmailValue}
      />
      <InputField
        label="Password"
        value={passwordValue}
        onChangeText={setPasswordValue}
      />
    </View>
  );
};

export default HomeScreen;
