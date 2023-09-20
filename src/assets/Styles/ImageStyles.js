import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../colors/AppColors';

const ImageStyles = StyleSheet.create({
  signupImage: {
    width: wp('65%'),
    height: hp('30%'),
    // borderRadius: 20
    marginTop: hp('3%'),
  },
  loginImage: {
    width: wp('65%'),
    height: hp('30%'),
    borderRadius: wp('2%'),
    marginTop: hp('7%'),
  },
  rightCornerImage: {
    height: hp(40),
    width: hp(80),
    marginTop: hp(12),
  },
  logoImageStyle: {
    height: hp('11.5'),
    width: wp('23'),
    borderRadius: 40,
    marginBottom: hp('2'),
    marginTop: hp('8'),
  },
  advertiseImageStyle: {
    height: hp('25'),
    width: wp('40'),
    borderRadius: 10,
    marginLeft: wp('3'),
    marginTop: hp('3'),
  },

  deliveryImg: {
    height: hp('12.5'),
    width: wp('25'),
    margin: 10,
    borderRadius: 15,
  },
  cartImage: {
    width: wp('17'),
    marginLeft: wp('3'),
    marginTop: hp('1.6'),
    borderRadius: wp('2'),
    height: hp('9'),
    borderWidth: 4,
  },
  scheduleImage: {
    width: wp('32'),
    height:hp('15'),
    marginLeft: wp('10'),
    marginTop: hp('1.6'),
    borderRadius: wp('2'),
    borderWidth: 4,
  },
  smallSquareBoxImage: {
    width: wp('25%'),
    height: hp('12%'),
    borderRadius: wp('3%'),
  },
  donationImage: {
    height: hp('8'),
    width: wp('35%'),
    alignSelf: 'center',
    marginTop: hp('1'),
    borderRadius: hp('1%'),
  },
  orderImage: {
    width: wp('20'),
    height:hp('10'),
    marginLeft: wp('5'),
    marginTop: hp('3'),
    borderRadius: wp('15'),
    borderWidth: 4,
  },

});

export default ImageStyles;
