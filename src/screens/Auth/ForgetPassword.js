import React, {useContext, useEffect, useState} from 'react';

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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
import AppContext from '../../Context/AppContext';

const ForgetPassword = ({navigation}) => {
  const {baseUrl, storeUpdatedCurrentUser} = useContext(AppContext);

  const [userEmail, setUserEmail] = useState('');
  const [firstSecurityAnswer, setFirstSecurityAnswer] = useState('');
  const [secondSecurityAnswer, setSecondSecurityAnswer] = useState('');
  const [toggleState, setToggleState] = useState(1);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(true);

  const [userEmailError, setUserEmailError] = useState('');
  const [firstSecurityAnswerError, setFirstSecurityAnswerError] = useState('');
  const [secondSecurityAnswerError, setSecondSecurityAnswerError] =
    useState('');
  const isEmailValid = userEmail => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(userEmail);
  };

  const handleForgetPassword = () => {
    // Validate inputs
    if (!userEmail || !isEmailValid(userEmail)) {
      setUserEmailError('Please enter a valid email address.');
    }

    if (!firstSecurityAnswer) {
      setFirstSecurityAnswerError('*Required field');
    }

    if (!secondSecurityAnswer) {
      setSecondSecurityAnswerError('*Required field');
    }
    if (
      !userEmail ||
      !isEmailValid(userEmail) ||
      !firstSecurityAnswer ||
      !secondSecurityAnswer
    ) {
      return false;
    }
    const formData = new FormData();
    formData.append('userEmail', userEmail);
    const securityQuestions = [
      {question: 'what is your nickname?', answer: firstSecurityAnswer},
      {
        question: 'What is your favourite fruit?',
        answer: secondSecurityAnswer,
      },
    ];
    formData.append('securityQuestions', JSON.stringify(securityQuestions));

    fetch(`${baseUrl}/restaurantForgetPassword`, {
      method: 'post',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data', // Use 'multipart/form-data' for form data
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('res aya after matching', data);
        if (data.matched === true) {
          setToggleState(0);
        } else {
          alert('Please enter the right answers');
        }
      })
      .catch(error => console.log('res error', error));
  };

  const handleResetPassword = async () => {
    try {
      const formdata = new FormData();
      formdata.append('userEmail', userEmail);
      formdata.append('userPassword', newPassword);
  
      const response = await fetch(`${baseUrl}/restaurantResetPassword`, {
        method: 'post',
        body: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const data = await response.json();  
      if (data.login === true) {
        const res = data.updated;
        AsyncStorage.setItem(
          'user',
          JSON.stringify({
            userId: res._id,
            userName: res.userName,
            userEmail: res.userEmail,
            userPassword: res.userPassword,
            restaurantImage: res.restaurantImage,
            restaurantName: res.restaurantName,
            restaurantAddress: res.restaurantAddress,
            restaurantCnic: res.restaurantCnic,
            restaurantPhoneNumber: res.restaurantPhoneNumber,
            restaurantCategories: res.restaurantCategories,
          })
        );
        storeUpdatedCurrentUser({
          userId: res._id,
          userName: res.userName,
          userEmail: res.userEmail,
          userPassword: res.userPassword,
          restaurantImage: res.restaurantImage,
          restaurantName: res.restaurantName,
          restaurantAddress: res.restaurantAddress,
          restaurantCnic: res.restaurantCnic,
          restaurantPhoneNumber: res.restaurantPhoneNumber,
          restaurantCategories: res.restaurantCategories,
        });
        navigation.navigate('Home');
      } else {
        alert('There was an issue in logging in, try again');
      }
    } catch (error) {
      console.error('Error updating', error);
    }
  };
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <BackButtonHeader navigation={navigation} />
      <ScrollView>
        <Image
          source={require('../../assets/Images/forgetPassword.jpg')} // Specify the source of the image
          style={[
            ImageStyles.loginImage,
            {marginTop: hp('0'), alignSelf: 'center'},
          ]} // Set the desired width and height of the image
        />
        {toggleState == 1 ? (
          <View>
            <View style={{alignItems: 'center'}}>
              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.background}
                swapShadows // <- change zIndex of each shadow color
                style={[
                  ContainerStyles.inputFieldNeomorphContainer,
                  {width: wp('70%')},
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder=" Enter Email"
                    // maxLength={20}
                    style={[
                      TextFieldStyles.inputField,
                      {paddingHorizontal: wp('5%'), width: wp('70%')},
                    ]}
                    // style={{fontFamily:'Poppins-Thin'}}
                    value={userEmail}
                    onChangeText={text => {
                      setUserEmail(text);
                      setUserEmailError('');
                    }}
                    autoCapitalize="none"
                  />
                </View>
                {userEmailError ? (
                  <Text style={[TextStyles.errorText]}>{userEmailError}</Text>
                ) : null}
              </Neomorph>
            </View>
            <Text
              style={[
                TextStyles.leftHeading,
                {
                  fontSize: hp('3%'),
                  color: AppColors.primary,
                  marginTop: hp('0'),
                },
              ]}>
              Security Questions
            </Text>
            {/* ye view mai ne neomorhp ko center krny k liye diya hai */}
            <View style={{alignItems: 'center'}}>
              <Text style={[TextStyles.label, {marginRight: wp('32%')}]}>
                Q1 : What is your nick name ?
              </Text>

              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.background}
                swapShadows // <- change zIndex of each shadow color
                style={[
                  ContainerStyles.inputFieldNeomorphContainer,
                  {width: wp('70%')},
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder="Answer"
                    // maxLength={20}
                    style={[
                      TextFieldStyles.inputField,
                      {paddingHorizontal: wp('5%'), width: wp('70%')},
                    ]}
                    // style={{fontFamily:'Poppins-Thin'}}
                    value={firstSecurityAnswer}
                    onChangeText={text => {
                      setFirstSecurityAnswer(text);
                      setFirstSecurityAnswerError('');
                    }}
                    autoCapitalize="none"
                  />
                </View>
                {firstSecurityAnswerError ? (
                  <Text style={[TextStyles.errorText]}>
                    {firstSecurityAnswerError}
                  </Text>
                ) : null}
              </Neomorph>
              <Text style={[TextStyles.label, {marginRight: wp('25%')}]}>
                Q2 : What is your favourite fruit ?
              </Text>

              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.background}
                swapShadows // <- change zIndex of each shadow color
                style={[
                  ContainerStyles.inputFieldNeomorphContainer,
                  {width: wp('70%')},
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder="Answer"
                    style={[
                      TextFieldStyles.inputField,
                      {paddingHorizontal: wp('5%'), width: wp('70%')},
                    ]}
                    value={secondSecurityAnswer}
                    autoCapitalize="none"
                    onChangeText={text => {
                      setSecondSecurityAnswer(text);
                      setSecondSecurityAnswerError('');
                    }}
                  />
                </View>
                {secondSecurityAnswerError ? (
                  <Text style={[TextStyles.errorText]}>
                    {secondSecurityAnswerError}
                  </Text>
                ) : null}
              </Neomorph>

              <TouchableOpacity
                onPress={() => {
                  handleForgetPassword();
                }}>
                <Neomorph
                  darkShadowColor="white"
                  lightShadowColor="white"
                  swapShadows // <- change zIndex of each shadow color
                  style={[
                    ContainerStyles.touchableOpacityNeomorphContainer,
                    {width: wp('70%')},
                  ]}>
                  <Text style={TextStyles.whiteCenteredLable}>Next</Text>
                </Neomorph>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Text
              style={[
                TextStyles.leftHeading,
                {
                  fontSize: hp('3%'),
                  color: AppColors.primary,
                  marginTop: hp('0'),
                },
              ]}>
              Change Password
            </Text>
            <View style={{alignItems: 'center'}}>
              <Text style={[TextStyles.label, {marginRight: wp('65%')}]}>
                Password :
              </Text>

              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.background}
                swapShadows // <- change zIndex of each shadow color
                style={[
                  ContainerStyles.inputFieldNeomorphContainer,
                  {width: wp('70%')},
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder="Password"
                    style={[
                      TextFieldStyles.inputField,
                      {paddingHorizontal: wp('5%'), width: wp('57%')},
                    ]}
                    value={newPassword}
                    secureTextEntry={isPasswordVisible}
                    autoCapitalize="none"
                    onChangeText={text => {
                      setNewPassword(text);
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Feather
                      name={isPasswordVisible ? 'eye' : 'eye-off'}
                      size={wp('5%')}
                      style={[
                        IconStyles.signupIcons,
                        {color: 'grey', opacity: 0.7},
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </Neomorph>
              <Text style={[TextStyles.label, {marginRight: wp('50%')}]}>
                Confirm Password :
              </Text>

              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.background}
                swapShadows // <- change zIndex of each shadow color
                style={[
                  ContainerStyles.inputFieldNeomorphContainer,
                  {width: wp('70%')},
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    placeholder="Password"
                    style={[
                      TextFieldStyles.inputField,
                      {paddingHorizontal: wp('5%'), width: wp('57%')},
                    ]}
                    value={confirmPassword}
                    secureTextEntry={isConfirmPasswordVisible}
                    autoCapitalize="none"
                    onChangeText={text => {
                      setConfirmPassword(text);
                    }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }>
                    <Feather
                      name={isConfirmPasswordVisible ? 'eye' : 'eye-off'}
                      size={wp('5%')}
                      style={[
                        IconStyles.signupIcons,
                        {color: 'grey', opacity: 0.7},
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </Neomorph>

              <TouchableOpacity
                onPress={() => {
                  handleResetPassword();
                }}>
                <Neomorph
                  darkShadowColor="white"
                  lightShadowColor="white"
                  swapShadows // <- change zIndex of each shadow color
                  style={[
                    ContainerStyles.touchableOpacityNeomorphContainer,
                    {width: wp('70%')},
                  ]}>
                  <Text style={TextStyles.whiteCenteredLable}>Next</Text>
                </Neomorph>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
