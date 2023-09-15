import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';

const OtherStyles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
    color: AppColors.primary,
    fontSize: hp('2'),
    resizeMode: 'cover',
  },
  // text2:{fontFamily:"poppins-SemiBold",color:AppColors.primary,fontSize:hp('2'),marginHorizontal:wp('8')},

  text4: {
    marginLeft: wp('4'),
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2.1'),
    letterSpacing: -1,
  },

});
export default OtherStyles;
