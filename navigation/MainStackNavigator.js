import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle'; // Import the HeaderTitle component

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{  headerTitle: HeaderTitle, headerStyle: { backgroundColor: '#2E617E' } }}/>
        <Stack.Screen name="Details" component={DetailsScreen}  options={{ headerTitle: HeaderTitle, headerStyle: { backgroundColor: '#2E617E' } }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
