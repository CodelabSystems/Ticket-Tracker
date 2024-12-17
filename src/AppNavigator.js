import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthContext} from './context/GlobaContext';
import Login from './auth/Login';
import Home from './screen/Home';
import FirstScreen from './onBoarding/FirstScreen';
import Form from './screen/Form';
import EditProfile from './screen/EditProfile';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const {isLogin, setIsLogin} = useAuthContext();
  let theme = useTheme();



  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen
              name="Onboarding"
              component={FirstScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login2"
              component={Login}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Spinner"
              component={Spinner}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Form"
              component={Form}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Edit Detail"
              component={EditProfile}
              options={{headerShown: false}}
            />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1d', // Dark royal theme
    justifyContent: 'center',
    alignItems: 'center',
  },
});
