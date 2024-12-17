import {
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Button, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Header from '../component/Header';
import {useAuthContext} from '../context/GlobaContext';
import {fonts} from '../customText/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  let theme = useTheme()
  const {setIsLogin, Checknetinfo, setUserDetail} = useAuthContext();
  let navigation = useNavigation();
  // State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spinner, setSpinner] = useState(false);

  let screenName = '';

  const handleLogin = async () => {
    setSpinner(true);
    if (!email || !password) {
      showToast('All fields are required !');
      setSpinner(false);
      return;
    }

    const isConnected = await Checknetinfo();
    if (!isConnected) {
      setSpinner(false);
      return;
    }

    await CheckDataBase();
  };
  

  

  return (
    <>
      <Header screenName={screenName} />
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: theme.colors.background},
        ]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {/* Heading */}
          <View style={styles.headingContainer}>
            <CustomTex
              style={[
                styles.authHead,
                {fontFamily: fonts.Bold, color: theme.colors.onBackground},
              ]}>
              Sign in
            </CustomTex>
            <CustomText
              style={{
                fontFamily: fonts.Regular,
              }}>
              Sign in to manage fares, capture customer details, and track your
              daily collections.
            </CustomText>
          </View>

          {/* Inputs */}
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.inpu,
                {
                  color: theme.colors.onBackground,
                  borderColor: theme.colors.onBackground,
                },
              ]}
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[
                styles.input,
                {
                  color: theme.colors.onBackground,
                  borderColor: theme.colors.onBackground,
                },
              ]}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password2}
              onChangeText={setPassword2}
            />2

            <Button
              onPress={spinner ? () => {} : }
              mode="contained"
              style={[styles.btn, {backgroundColor: theme.colors.btn}]}>
              {spinner ? (
                <ActivityIndicator size={24} color={theme.colors.background} />
              ) : (
                <CustomText
                  style={{
                    color: '#fff',
                    fontFamily: fonts.Bold,
                  }}>
                  Login
                </CustomText>
              )}
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  headingContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  authHead: {
    fontSize: 30,
    // textAlign: 'center',
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  btn: {
    padding: 4,
    marginTop: 20,
    borderRadius: 16,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
});
