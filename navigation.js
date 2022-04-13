import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './App';
import First from './First';
import Second from './Second';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};
const navigation = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App" screenOptions={screenOptions}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
