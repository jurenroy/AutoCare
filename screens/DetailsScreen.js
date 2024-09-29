import React from 'react';
import { View, Text } from 'react-native';
import styles from '../components/styles';
import RoundedButton from '../components/Buttons/RoundedButton';

const DetailsScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text>Login as?</Text>
      <RoundedButton 
        title="Car Owner" 
        onPress={() => console.log('Transparent button pressed!')} 
      />
      <RoundedButton 
        title="Mechanic" 
        onPress={() => console.log('Transparent button pressed!')} 
      />
    </View>
  );
};

export default DetailsScreen;
