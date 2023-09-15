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

const AfterSignup = ({navigation}) => {
  // states
  const [firstSecurityAnswer, setFirstSecurityAnswer] = useState('');
  const [secondSecurityAnswer, setSecondSecurityAnswer] = useState('');

  //FUNCTIONS

  return (
    
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <BackButtonHeader navigation={navigation} />
        <Image
            source={require('../../assets/Images/forgetPassword.jpg')} // Specify the source of the image
            style={[ImageStyles.loginImage, {marginTop: hp('0'),alignSelf:"center"}]} // Set the desired width and height of the image
          />
        <Text style={[TextStyles.leftHeading,{fontSize:hp('3%'),color:AppColors.primary}]}>Security Questions</Text>
        {/* ye view mai ne neomorhp ko center krny k liye diya hai */}
        <View style={{alignItems: 'center'}}>
        <Text style={[TextStyles.label,{marginRight:wp('32%')}]}>Q1 : What is your nick name ?</Text>

          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.inputFieldNeomorphContainer,{width:wp('70%')}]}>
            <View style={{flexDirection: 'row'}}>
              
              <TextInput
                placeholder="Answer"
                // maxLength={20}
                style={[TextFieldStyles.inputField, { paddingHorizontal: wp('5%'), width: wp('70%')}]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={firstSecurityAnswer}
                onChangeText={text => {
                  setFirstSecurityAnswer(text);
                 
                }}
              />
            
            </View>

          
          </Neomorph>
          <Text style={[TextStyles.label,{marginRight:wp('25%')}]}>Q2 : What is your favourite fruit ?</Text>

          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.inputFieldNeomorphContainer,{width:wp('70%')}]}>
            <View style={{flexDirection: 'row'}}>
            
              <TextInput
                placeholder="Answer"
                style={[TextFieldStyles.inputField,{ paddingHorizontal: wp('5%'), width: wp('70%') }]}
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
        {/* <Image
          source={require('../../assets/Images/signup3.png')} // Specify the source of the image
          style={[ImageStyles.signupImage,{marginTop:hp('11%')}]} // Set the desired width and height of the image
        /> */}
      </SafeAreaView>
    
  );
};

export default AfterSignup;
