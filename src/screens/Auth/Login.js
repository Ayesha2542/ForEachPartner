import React, {useEffect, useState,useContext} from 'react';

import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import IconStyles from '../../assets/Styles/IconStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import Feather from 'react-native-vector-icons/Feather';
import AppContext from '../../Context/AppContext';

const Login = ({navigation}) => {
  const {baseUrl,updateCurrentUser}=useContext(AppContext)
  // states
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  // functions
  const userLogin = () => {
    const formData = new FormData();
    formData.append('email', userEmail);
    formData.append('password', userPassword);

    axios({
      method: 'post',
      url: `${baseUrl}/Login`,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(function (response) {
        if (response.data.match == true) {
          AsyncStorage.setItem(
            'provider',
            JSON.stringify(response.data.loggedInUser),
          );
          navigation.navigate('RestaurantDetail');
        } else {
          alert('No User found with this email and password');
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const resetPassword = () => {
    if (userEmail != null) {
    } else {
      alert('Please Enter a valid email.');
    }
  };

  // useEffect(() => {
  //   let currentUserStatus = AsyncStorage.getItem('user');
  //   if (currentUserStatus) {
  //     navigation.navigate('Login');
  //   }
  // }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <BackButtonHeader navigation={navigation} />
      <Text style={TextStyles.leftHeading}>Log In</Text>
      {/* ye view mai ne neomorhp ko center krny k liye diya hai */}
      <View style={{alignItems: 'center'}}>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.inputFieldNeomorphContainer}>
          <View style={{flexDirection: 'row'}}>
            <Fontisto
              name="email"
              size={wp('5%')}
              style={[IconStyles.signupIcons]}
            />
            <TextInput
              placeholder="Enter Email"
              style={[TextFieldStyles.inputField]}
              value={userEmail}
              autoCapitalize="none"
              onChangeText={text => {
                setUserEmail(text);
              }}
            />
          </View>
        </Neomorph>

        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
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
              autoCapitalize="none"
              secureTextEntry={passwordVisible}
              onChangeText={text => {
                setUserPassword(text);
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
        </Neomorph>

        <TouchableOpacity
          style={{marginLeft: wp('42%')}}
          onPress={() => {
            // resetPassword();
            navigation.navigate('ForgetPassword')
          }}>
          <Text style={{fontFamily: 'Poppins-SemiBold'}}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            userLogin();
            console.log('user logged in');
            // navigation.navigate('Login');
          }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.touchableOpacityNeomorphContainer}>
            <Text style={[TextStyles.whiteCenteredLable]}>LOG IN</Text>
          </Neomorph>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 25}}>
          <Text style={{fontFamily: 'Poppins-SemiBold'}}>
            Don't have an account ?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text
              style={{
                color: AppColors.primary,
                fontFamily: 'Poppins-SemiBold',
              }}>
              SIGNUP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('../../assets/Images/signup3.png')} // Specify the source of the image
        style={[ImageStyles.loginImage]} // Set the desired width and height of the image
      />
    </SafeAreaView>
  );
};

export default Login;
// transform: [{ rotate: '45deg' }]
