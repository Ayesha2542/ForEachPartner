import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';

import IconStyles from '../../assets/Styles/IconStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';

const Signup = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [userNameError, setUserNameError] = useState('');
  const [userEmailError, setUserEmailError] = useState('');
  const [userPasswordError, setUserPasswordError] = useState('');

  //FUNCTIONS

  const isEmailValid = userEmail => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(userEmail);
  };

  const isPasswordValid = userPassword => {
    return userPassword.length >= 8; // Minimum password length of 8 characters
  };
  const userRegister =  () => {
    if (!userName) {
      setUserNameError('Please enter your name.');
    }

    if (!userEmail) {
      setUserEmailError('Please enter your email address.');
    } else if (!isEmailValid(userEmail)) {
      setUserEmailError('Please enter a valid email address.');
    }
    if (!userPassword) {
      setUserPasswordError('Please enter your password.');
    } else if (!isPasswordValid(userPassword)) {
      setUserPasswordError('Password must be at least 8 characters long.');
    }

    if (
      !userName ||
      !userEmail ||
      !userPassword ||
      !isEmailValid(userEmail) ||
      !isPasswordValid(userPassword)
    ) {
      return false;
    }

    const formData = new FormData();
    formData.append('name', userName);
    formData.append('email', userEmail);
    formData.append('password', userPassword);

    axios({
      method: 'post',
      url: 'http://192.168.0.103:8888/signup',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(function (response) {
        if (response.data.save == true) {
          AsyncStorage.setItem('user', JSON.stringify(response.data.newUser));
          navigation.navigate('Home');
        } else if (response.data.save == false) {
          // setUserEmailError("A user With the same email already exists.");
          // alert('A user with this Email Address Already Exists');
          setUserEmailError('A user with this Email Address Already Exists');
        } else {
          alert('Account cannot be created! Please try again later.');
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    // console.warn("Stop");
  };

  // useEffect(() => {
  //   let currentUserStatus = AsyncStorage.getItem('user');
  //   if (currentUserStatus) {
  //     navigation.navigate('Signup');
  //   }
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <BackButtonHeader navigation={navigation} />
   
        <Text style={[TextStyles.leftHeading]}>Sign Up</Text>
        {/* ye view mai ne neomorhp ko center krny k liye diya hai */}
        <View style={{alignItems: 'center'}}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.inputFieldNeomorphContainer}>
            <View style={{flexDirection: 'row'}}>
              <SimpleLineIcons
                name="user"
                size={wp('5%')}
                style={IconStyles.signupIcons}
              />
              <TextInput
                placeholder="Enter User Name"
                // maxLength={20}
                style={[TextFieldStyles.inputField]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={userName}
                onChangeText={text => {
                  setUserName(text);
                  setUserNameError('');
                }}
              />
            </View>

            {userNameError ? (
              <Text style={[TextStyles.errorText]}>{userNameError}</Text>
            ) : null}
          </Neomorph>

          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.inputFieldNeomorphContainer}>
            <View style={{flexDirection: 'row'}}>
              <Fontisto
                name="email"
                size={wp('5%')}
                style={IconStyles.signupIcons}
              />
              <TextInput
                placeholder="Enter Email"
                style={[TextFieldStyles.inputField]}
                value={userEmail}
                autoCapitalize="none"
                onChangeText={text => {
                  setUserEmail(text);
                  setUserEmailError('');
                }}
              />
            </View>
            {userEmailError ? (
              <Text style={[TextStyles.errorText]}>{userEmailError}</Text>
            ) : null}
          </Neomorph>

          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            // inner // <- enable shadow inside of neomorph
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.inputFieldNeomorphContainer}>
            <View style={{flexDirection: 'row'}}>
              <SimpleLineIcons
                name="lock"
                size={wp('5%')}
                style={IconStyles.signupIcons}
              />
              <TextInput
                placeholder="Enter Password"
                style={[TextFieldStyles.inputField]}
                value={userPassword}
                secureTextEntry={passwordVisible}
                autoCapitalize="none"
                onChangeText={text => {
                  setUserPassword(text);
                  setUserPasswordError('');
                }}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Feather
                  name={passwordVisible ? 'eye' : 'eye-off'}
                  size={wp('5%')}
                  style={[
                    IconStyles.signupIcons,
                    {color: 'grey', opacity: 0.7},
                  ]}
                />
              </TouchableOpacity>
            </View>
            {userPasswordError ? (
              <Text style={[TextStyles.errorText]}>{userPasswordError}</Text>
            ) : null}
          </Neomorph>

          <TouchableOpacity
            onPress={() => {
              // userRegister();
              navigation.navigate('AfterSignup')
              console.log('signup is running');
            }}>
            <Neomorph
              darkShadowColor="white"
              lightShadowColor="white"
              swapShadows // <- change zIndex of each shadow color
              style={ContainerStyles.touchableOpacityNeomorphContainer}>
              <Text style={TextStyles.whiteCenteredLable}>SIGN UP</Text>
            </Neomorph>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontFamily: 'Poppins-SemiBold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              // style={{marginLeft: 150}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  color: AppColors.primary,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../../assets/Images/signup3.png')} // Specify the source of the image
          style={[ImageStyles.signupImage]} // Set the desired width and height of the image
        />
     
    </SafeAreaView>
  );
};

export default Signup;
