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

const ForgetPassword = ({navigation}) => {
  // states

  const [userEmail, setUserEmail] = useState('');

  const [firstSecurityAnswer, setFirstSecurityAnswer] = useState('');
  const [secondSecurityAnswer, setSecondSecurityAnswer] = useState('');
  const [toggleState, setToggleState] = useState(1);
  const[newPassword,setNewPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);



  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <BackButtonHeader navigation={navigation} />
      <ScrollView>
       
          <Image
            source={require('../../assets/Images/forgetPassword.jpg')} // Specify the source of the image
            style={[ImageStyles.loginImage, {marginTop: hp('0'),alignSelf:"center"}]} // Set the desired width and height of the image
          />
          {toggleState==1 ?(
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
                }}
              />
            </View>
          </Neomorph>
        </View>
        <Text
          style={[
            TextStyles.leftHeading,
            {fontSize: hp('3%'), color: AppColors.primary, marginTop: hp('0')},
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
                }}
              />
            </View>
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
                }}
              />
            </View>
          </Neomorph>

          <TouchableOpacity
            onPress={() => {
              // userRegister();
              // navigation.navigate('Home');
              setToggleState(0);
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
          ):(
            <View>
            <Text
            style={[
              TextStyles.leftHeading,
              {fontSize: hp('3%'), color: AppColors.primary, marginTop: hp('0')},
            ]}>
            Change Password
          </Text>
            <View style={{alignItems: 'center'}}>
        <Text style={[TextStyles.label,{marginRight:wp('65%')}]}>Password :</Text>

          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.inputFieldNeomorphContainer,{width:wp('70%')}]}>
            <View style={{flexDirection: 'row'}}>
              
            <TextInput
                placeholder="Password"
                style={[TextFieldStyles.inputField, {paddingHorizontal: wp('5%'), width: wp('57%')},]}
                value={newPassword}
                secureTextEntry={isPasswordVisible}
                autoCapitalize="none"
                onChangeText={text => {
                  setNewPassword(text);
                  // setUserPasswordError('');
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
          <Text style={[TextStyles.label,{marginRight:wp('50%')}]}>Confirm Password :</Text>

          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.inputFieldNeomorphContainer,{width:wp('70%')}]}>
            <View style={{flexDirection: 'row'}}>
            <TextInput
                placeholder="Password"
                style={[TextFieldStyles.inputField, {paddingHorizontal: wp('5%'), width: wp('57%')},]}
                value={confirmPassword}
                secureTextEntry={isConfirmPasswordVisible}
                autoCapitalize="none"
                onChangeText={text => {
                  setConfirmPassword(text);
                  // setUserPasswordError('');
                }}
              />
              <TouchableOpacity
                onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
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
              // userRegister();
            navigation.navigate('Home')
    
            }}>
            <Neomorph
              darkShadowColor="white"
              lightShadowColor="white"
              swapShadows // <- change zIndex of each shadow color
              style={[ContainerStyles.touchableOpacityNeomorphContainer,{width:wp('70%')}]}>
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
