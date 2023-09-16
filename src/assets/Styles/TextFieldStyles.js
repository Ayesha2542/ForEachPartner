import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../colors/AppColors';
const TextFieldStyles = StyleSheet.create({
  inputField: {
    width: wp('50%'),
    height: hp('7%'),
  },
  donorInputField: {
    paddingHorizontal: wp('5%'),
    width: wp('70%'),
    height: hp('7%'),
  },
  inputFieldEdit: {
    width: wp('70%'),
    height: hp('7%'),
    marginLeft: wp('3'),
  },

  profileInputField: {
    marginLeft: wp('4'),
    marginTop: hp('1.5'),
    color: AppColors.black,
  },
  profileInputFieldText: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp('4'),
    marginTop: hp('1'),
    color: AppColors.black,
  },
  profileInputField2: {
    marginLeft: wp('6'),
    marginTop: hp('1.5'),
    color: AppColors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  instructionInputField: {
    width: wp('80%'),
    alignSelf: 'center',
    height: hp('12'),
    marginTop: hp('2%'),
  },
});

export default TextFieldStyles;



