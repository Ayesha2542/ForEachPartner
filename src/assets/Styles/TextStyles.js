import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';

const TextStyles = StyleSheet.create({
  leftHeading: {
    marginTop: hp('7%'),
    marginLeft: wp('11%'),
    // fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight:"700",
    fontSize: hp('4%'),
    marginBottom: hp('2%'),
  },
  whiteCenteredLable: {
    color: AppColors.white,
    // fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2.5%'),
    textAlign: 'center',
    marginTop: hp('1%'),
  },
  whiteMediumHeading: {
    color: 'white',
    fontSize: hp('3'),
    marginLeft: wp('19'),
    marginTop: hp('2'),
    fontFamily: 'Poppins-Medium',
  },
  primaryText: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: hp('3.4'),
    textAlign: 'center',
    margin: 10,
    marginBottom: 0,
  },

  primaryText2: {
    color: AppColors.black,
    fontFamily: 'Poppins-Medium',
    fontSize: hp('3.2'),
    textAlign: 'center',
    marginTop: hp('6'),
  },

  smallText: {
    color: AppColors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: hp('1.7'),
    marginLeft: wp('4'),
  },
  mediumTextStyle: {
    fontSize: hp('2.1'),
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp('6'),
  },
  drawerTextStyle: {
    fontSize: hp('2.1'),
    fontFamily: 'Poppins-Regular',
    marginLeft: wp('6'),
  },
  errorText: {
    color: AppColors.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: hp('1.5%'),
    marginTop: hp('0.7%'),
  },
  backButtonTitle: {
    position: 'absolute',
    left: wp('15%'),
    top: hp('3%'),
    fontFamily: 'Poppins-SemiBold',
    color: AppColors.black,
    fontSize:wp('4.5')
  },
  leftText: {
    color: AppColors.black,
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp('4%'),
    marginLeft: wp('4%'),
    fontSize:hp('2.8')
  },
  leftMediumText: {
    color: AppColors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('3%'),
    marginTop: hp('1%'),
    marginLeft: wp('4%'),
  },
  
  leftMediumText2: {
    color: AppColors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('3%'),
    marginTop: hp('1%'),
    marginLeft: wp('4%'),
  },


  leftSmallText: {
    color: AppColors.black,
    fontFamily: 'Poppins-Regular',
    // marginLeft: wp('4%'),
  },
  popularFoodLabel: {
    color: AppColors.white,
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
  },
  simpleText: {
    color: AppColors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2.5'),
    marginLeft:hp('3')
  },

  fetchTextStyle: {
    fontFamily: 'Poppins-Medium',
    marginLeft: wp('5'),
  },

  whiteCenteredLable2: {
    color: AppColors.white,
    // fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2%'),
    // textAlign: 'center',
    marginTop: hp('1.9%'),
  },
  simpleText2: {
    marginTop: hp('3%'),
    marginLeft: wp('6'),
    color: AppColors.black,
    fontFamily: 'Poppins-Regular',
  },
  cartTextStyle: {
    color: 'black',
    fontSize: hp('3%'),
    marginRight: wp('40'),
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp('2.4%'),
  },
  text3: {
    fontFamily: 'Poppins-SemiBold',
    color: AppColors.primary,
    fontSize: hp('2.1'),
    marginLeft: wp('4'),
    letterSpacing: -1,
    marginTop: hp('3'),
  },
  profileSimpleText: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp('8'),
    marginTop: hp('2'),
    fontSize: hp('2.5'),
    marginTop: hp('4'),
    letterSpacing: -1,
    color: AppColors.black,
  },
  profileTextStyle: {
    color: "black", 
    fontSize: hp('2.3%'), 
    marginLeft: wp('25%'), 
    fontFamily: "Poppins-SemiBold",
     marginTop: hp('2.4%'),
  },
  productsLeftText:{
    fontFamily:"Poppins-Regular",
    marginTop:hp('1'),
    marginLeft:wp('4'),
    color: 'black',
    fontSize: hp('2.2%'),
    marginLeft: wp('7%'),
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp('2.4%'),
  },
  productsLeftText: {
    fontFamily: 'Poppins-Regular',
    marginTop: hp('1'),
    marginLeft: wp('4')
  },
  dealText: {
    fontFamily: 'Poppins-Regular',
    justifyContent:"space-between",
    alignItems:"center",
    textAlign:"right",
    textAlign:"left",
    marginLeft:wp('6'),
    marginRight:wp('3'),
    marginTop:hp('1.5')
  },
  dealPriceText: {
    color: AppColors.black,
    fontFamily: 'Poppins-Regular',
    // fontSize: hp('1.7'),
    marginLeft: wp('4%'),
  },
  whiteCenteredLable3: {
    color: AppColors.white,
    // fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    // fontSize: hp('2.5%'),
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('3%'),
    color: 'black', // Customize the label color as needed
    marginBottom: hp('1%'), // Add margin below the label
  },
  donorLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('3%'),
    color: 'black', // Customize the label color as needed
    // marginBottom: hp('1%'), // Add margin below the label
    // marginRight: wp('58%'),
    marginLeft: wp('15%'),
  },
  decrementText: {
    color: AppColors.white,
    marginBottom: hp('2%'),
    fontSize: wp('5%'),
  },
  countText: {
    marginTop: hp('4%'),
    fontSize: wp('5%'),
    fontFamily: 'Poppins-Regular',
    color: AppColors.black,
  },
  incrementText: {
    color: AppColors.white,
    fontSize: wp('6%'),
  },
  mediumTextStyle2: {
    fontSize: hp('2.4'),
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp('6'),
  },
smallButtonText:{
  color: AppColors.white,
  fontFamily: 'Poppins-Regular',
  fontSize: hp('2%'),
  alignSelf:"center",
 marginTop: hp('1.5%'),
},
modalContent: {
  backgroundColor: 'white',
padding:10,
  borderRadius: 10,
  width: '80%',

},
foodPrice:{
  fontSize: 16,
  fontFamily: 'Poppins-Bold',
  marginLeft: wp('43.5')
},

foodPrices:{
  fontSize: hp('2.8'),
  fontFamily: 'Poppins-Bold',
  marginLeft: wp('4'),
  marginTop:hp('4')
},

  label2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('3%'),
    color: AppColors.black,
    flex: 1,
  },
  label3: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp('3%'),
    color: AppColors.black,
    flex: 1,
  },
  miniPrimaryColorText: {
    color: AppColors.primary,
    textAlign: 'center',
    marginTop: hp('0.5'),
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('1'),
  },
  miniWhiteText: {
    color: AppColors.white,
    textAlign: 'center',
    marginTop: hp('0.5'),
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('1'),
  },
  mediumWhiteText: {
    color: AppColors.white,
    textAlign: 'center',
    marginTop: hp('1.3'),
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('1.5'),
  },
  orderDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp('3%'),
  },
  DealDescription:{
    fontFamily: 'Poppins-Bold',
    fontSize: wp('3.4'),
    // marginTop:hp('2'),
    marginLeft:wp('3')
  },
  lightText: {
    fontFamily: 'Poppins-Regular',
    flex: 1,
    marginTop: hp('-3'),
    fontSize: wp('3%'),
  },
});

export default TextStyles;
