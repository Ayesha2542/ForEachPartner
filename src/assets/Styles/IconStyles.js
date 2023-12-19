import React from 'react';
import {StyleSheet} from 'react-native';
import AppColors from '../colors/AppColors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const IconStyles = StyleSheet.create({
  signupIcons: {
    color: AppColors.primary,
    margin: 15,
  },
  drawerManuIcon: {
    color: AppColors.white,
    marginTop: hp('5'),
    marginLeft: wp('4'),
  },
  arrowLeftIcon: {
    color: AppColors.primary,
    marginTop: hp('5'),
    marginLeft: wp('5'),
  },
  heartIcon: {
    color: AppColors.primary,
    marginTop: hp('4%'),
    marginLeft: wp('37'),
  },
  shoppingCartIcon: {
    color: AppColors.primary,
    marginTop: hp('1%'),
    marginLeft: wp('28'),
  },
  editIcon: {
    marginRight: wp(2),
    marginTop: hp('1'),
    color: AppColors.primary,
  },

  signupIcons: {
    color: AppColors.primary,
    margin: 15,
  },
  drawerManuIcon: {
    color: AppColors.white,
    marginTop: hp('5'),
    marginLeft: wp('4'),
  },

  drawerManuIcon2: {
    color: AppColors.white,
    marginTop: hp('1.5'),
    marginLeft: wp('4'),
  },

  arrowLeftIcon: {
    color: AppColors.primary,
    marginTop: hp('5'),
    marginLeft: wp('5'),
  },
  heartIcon: {
    color: AppColors.primary,
    marginTop: hp('4%'),
    marginLeft: wp('37'),
  },
  shoppingCartIcon: {
    color: AppColors.primary,
    marginTop: hp('1%'),
    marginLeft: wp('28'),
  },
 
  bellIcon: {
    color: AppColors.primary,
    marginTop: hp('1.5'),
    marginLeft: wp('3'),
  },
  bellIcon2: {
    color: AppColors.white,
    marginTop: hp('6'),
    marginRight: wp('5'),
  },

  LocationIcon: {
    marginLeft: wp('4'),
    marginTop: hp('1.8'),
    color: AppColors.primary,
  },

  EditIcons: {
    marginLeft: wp('5'),
    marginTop: hp('2'),
    color: AppColors.primary,
  },
  Trash: {
    marginLeft: wp('2'),
    marginTop: hp('2'),
    color: AppColors.primary,
  },
  fireIcon: {
    color: AppColors.goldenYellow,
    marginLeft: wp('4'),
    marginVertical: hp('1'),
  },
  productsIcon: {
    color: AppColors.primary,
    marginLeft: wp('4'),
    marginVertical: hp('1'),
  },
  fireIcon2: {
    color: AppColors.goldenYellow,
    // marginLeft:wp('1'),
    // marginVertical:hp('1')
    marginTop: hp('2.5%'),
  },
  smallNeomorphIcon: {
    marginTop: hp('2.2'),
    color: AppColors.primary,
  },
});

export default IconStyles;
