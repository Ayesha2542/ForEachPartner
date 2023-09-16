import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../colors/AppColors';

const ContainerStyles = StyleSheet.create({
  inputFieldNeomorphContainer: {
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: wp('3%'),
    shadowRadius: 4,
    backgroundColor: AppColors.white,
    marginVertical: hp('3%'),
    shadowOpacity: 0.3,
    marginTop: hp('1.4%'),
   } ,

   EditNameNeomorphContainer:{
      width: wp('87%'),
      height: hp('7%'),
      borderRadius: wp('3%'),
      shadowRadius: 3,
      backgroundColor: AppColors.white,
      // alignSelf:"center",
      // alignItems: 'center',
      // justifyContent: 'center',
      marginVertical: hp('2%'),
      shadowOpacity: 0.2,
      marginLeft:wp('6'),
      marginTop: hp('1.1%'),

     } ,
  

   profileInputFieldContainer:{
      
      shadowRadius: 2,
      shadowOpacity: 0.15,
      borderRadius: 10,
      backgroundColor: AppColors.white,
      width: hp('43'),
      height: hp('12'),
      

   },
    NeomorphContainer:{
      shadowRadius: 2,
      shadowOpacity: 0.15,
      borderRadius: 10,
      backgroundColor: 'white',
      width: hp('43'),
      height: hp('10'),
      

    },


  EditNameNeomorphContainer: {
    width: wp('87%'),
    height: hp('7%'),
    borderRadius: wp('3%'),
    shadowRadius: 3,
    backgroundColor: AppColors.white,
    // alignSelf:"center",
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: hp('2%'),
    shadowOpacity: 0.2,
    marginLeft: wp('6'),
    marginTop: hp('1.1%'),
  },

  profileInputFieldContainer: {
    shadowRadius: 4,
    shadowOpacity: 0.15,
    borderRadius: 10,
    backgroundColor: 'white',
    width: hp('43'),
    height: hp('12'),
  },
  NeomorphContainer: {
    shadowRadius: 4,
    shadowOpacity: 0.15,
    borderRadius: 10,
    backgroundColor: 'white',
    width: hp('43'),
    height: hp('10'),
  },


  touchableOpacityNeomorphContainer: {
    marginTop: hp('3%'),

    shadowRadius: 6,
    backgroundColor: AppColors.primary,
    borderRadius: wp('3%'),
    height: hp('6%'),
    width: wp('80%'),
    marginVertical: hp('1.4%'),
    shadowOpacity: 0.3,
  },
  headerViewStyle: {
    height: hp('8%'),
    width: wp('100%'),
    backgroundColor: AppColors.primary,
    flexDirection: 'row',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  largeNeomorphStyle: {
    shadowRadius: 4,
    shadowOpacity: 0.2,
    borderRadius: 25,
    backgroundColor: AppColors.white,
    width: wp('42'),
    height: hp('43'),
  },
  smallNeomorphStyle: {
    shadowRadius: 4,
    shadowOpacity: 0.2,
    borderRadius: 25,
    backgroundColor: AppColors.white,
    width: wp('42.3'),
    height: hp('21'),
  },
  TwoitemsCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabScreenTextContainer: {
    height: hp('4%'),
    width: wp('60%'),
    backgroundColor: AppColors.primary,
    position: 'absolute',
    top: hp('3.5%'),
    borderTopRightRadius: wp('5%'),
    borderBottomRightRadius: wp('5%'),
    justifyContent: 'center',
  },
  tabScreenDeliveryTextContainer: {
    height: hp('4%'),
    width: wp('18%'),
    backgroundColor: AppColors.white,
    position: 'absolute',
    top: hp('22%'),
    left: wp('4%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacityNeomorphContainer2: {
    shadowRadius: 6,
    backgroundColor: AppColors.primary,
    borderRadius: wp('3%'),
    height: hp('7%'),
    width: wp('92%'),
    marginVertical: hp('1.4%'),
    shadowOpacity: 0.2,
    marginLeft: wp('4'),
  },
  cartNeomorph: {
    shadowRadius: 3,
    shadowOpacity: 0.3,
    borderRadius: 10,
    backgroundColor: 'white',
    width: hp('45'),
    height: hp('15'),
  },

  squareBoxHalfScreenContainer: {
    width: wp('44'),
    height: hp('22'),
    shadowRadius: 4,
    backgroundColor: AppColors.white,
    marginHorizontal: wp('2'),
    marginVertical: hp('1'),
    borderRadius: wp('3'),
  },
  popularFoodPiceTextContainer: {
    height: hp('3%'),
    width: wp('22%'),
    backgroundColor: AppColors.white,
    position: 'absolute',
    top: hp('18.5%'),
    right: wp('1%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  productBackButtonContainer: {
    height: hp('5%'),
    width: wp('10%'),
    justifyContent: 'center',
    backgroundColor: AppColors.white,
    marginLeft: wp('4%'),
    alignItems: 'center',
    marginTop: hp('5%'),
    borderRadius: hp('10%'),
  },


  tabScreenTextContainer: {
    height: hp('4%'),
    width: wp('60%'),
    backgroundColor: AppColors.primary,
    position: 'absolute',
    top: hp('3.5%'),
    borderTopRightRadius: wp('5%'),
    borderBottomRightRadius: wp('5%'),
    justifyContent: 'center',
  },
  tabScreenDeliveryTextContainer: {
    height: hp('4%'),
    width: wp('18%'),
    backgroundColor: AppColors.white,
    position: 'absolute',
    top: hp('22%'),
    left: wp('4%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  PrimaryheaderViewStyle: {
    height: hp('10'),
    width: wp('100'),
    flexDirection: 'row',
  },
  searchNeomorphStyle: {
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: wp('10%'),
    shadowRadius: 3,
    backgroundColor: AppColors.white,
    shadowOpacity: 0.13,
    marginTop: hp('1.4%'),
    marginLeft: wp('10'),
    marginBottom: hp('3'),
  },
  smallCategoriesNeomorphStyle: {
    width: wp('33'), // Adjust card width as per your requirement
    height: hp('14'),
    borderRadius: 15,
    shadowRadius: 4,
    backgroundColor: AppColors.white,
    shadowOpacity: 0.2,
    marginTop: hp('2'),
    alignItems: 'center',
  },
  productsContainerSeparator: {
    backgroundColor: AppColors.background,
    width: wp('100%'),
    height: hp('1%'),
    marginTop: hp('2%'),
  },
  bottomBorder: {
    width: wp('100%'),
    height: hp('1%'),
    borderBottomWidth: 0.3,
    borderColor: AppColors.Gray,
    marginTop: hp('0%'),
    marginBottom:hp('2%')
  },
  productsCartButtonContainer: {
   height: hp('4%'),
   width: wp('8.5%'),
   justifyContent: 'center',
   backgroundColor: AppColors.primary,
   alignItems: 'center',
   borderRadius: hp('10%'),
   position:"relative",
   left:wp('89%'),
   // bottom:hp('3%')
   top:hp('-3%')
 },
 singleProductTouchableOpacityNeomorphContainer: {
  marginTop: hp('2%'),
  shadowRadius: 6,
  backgroundColor: AppColors.primary,
  borderRadius: wp('3%'),
  height: hp('6.5%'),
  width: wp('55%'),
  // marginVertical: hp('1.4%'),
  shadowOpacity: 0.3,
   },
   TwoitemsCenter: {
      flexDirection: 'row',
       alignItems: 'center'
    },
     tabScreenTextContainer:{
      height:hp('4%'),
     width:wp('60%'),
     backgroundColor:AppColors.primary,
     position:"absolute",
     top:hp('3.5%') ,
     borderTopRightRadius:wp('5%'),
     borderBottomRightRadius:wp('5%'),
     justifyContent:"center"
   },
   tabScreenDeliveryTextContainer:{
      height:hp('4%'),
   width:wp('18%'),
   backgroundColor:AppColors.white,
   position:"absolute",
   top:hp('22%'),
   left:wp('4%'),
   borderRadius:wp('5%'),
   justifyContent:"center",
   alignItems:"center"
},
     touchableOpacityNeomorphContainer2:{
      shadowRadius: 6,
      backgroundColor:AppColors.primary,
      borderRadius:wp('3%'),
      height:hp('7%'),
      width:wp('92%'),
      marginVertical: hp('1.4%'),
      shadowOpacity: 0.2,
      marginLeft:wp('4')
     } ,
     cartNeomorph: {
      shadowRadius: 3,
      shadowOpacity: 0.1,
      borderRadius: 10,
      backgroundColor: 'white',
      width: hp('45'),
      height: hp('15'),
    },
  

popularFoodPiceTextContainer:{
   height:hp('3%'),
width:wp('22%'),
backgroundColor:AppColors.white,
position:"absolute",
top:hp('18.5%'),
right:wp('1%'),
borderRadius:wp('5%'),
justifyContent:"center",
alignItems:"center"
},

   profileNeomorph:{
    shadowRadius: 4,
    shadowOpacity:0.3,
    borderRadius: 10,
    backgroundColor: 'white',
    width: hp('43'),
    height: hp('12'),
    
    },
    smallCircleNeomorph: {
      width: wp('15'), // Adjust card width as per your requirement
      height: hp('7'),
      borderRadius: 70,
      shadowRadius: 2,
      backgroundColor: AppColors.white,
      shadowOpacity: 0.3,
      marginTop: hp('2'),
      alignItems: 'center',
    },

    notificationInputFieldContainer:{
      marginTop:hp('2.5'),
      shadowRadius: 2,
      shadowOpacity: 0.2,
      borderRadius: 10,
      backgroundColor: AppColors.white,
      width: hp('43'),
      height: hp('12'),
      marginBottom:hp('0.3'),
      elevation: 5,
      shadowOffset: { width: 2, height: 2 },     

   },
   orderContainer:{
    marginTop:hp('2.5'),
    shadowRadius: 2,
    shadowOpacity: 0.2,
    borderRadius: 10,
    backgroundColor: AppColors.white,
    width: hp('43'),
    height: hp('20'),
    marginBottom:hp('0.3'),
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },     

 },
 OrdersContainer: {
  shadowRadius: 4,
  shadowOpacity: 0.4,
  borderRadius: 25,
  backgroundColor: AppColors.white,
  width: wp('90'),
  height: hp('21'),
  marginTop:hp('4'),
  elevation: 5,
  shadowOffset: { width: 2, height: 2 },     

},
OrdersContainer2: {
  shadowRadius: 4,
  shadowOpacity: 0.2,
  borderRadius: 25,
  backgroundColor: AppColors.white,
  width: wp('42.3'),
  height: hp('21'),

},



  donorInputFieldNeomorphContainer: {
      width: wp('72%'),
      height: hp('7%'),
      borderRadius: wp('3%'),
      shadowRadius: 4,
      backgroundColor: AppColors.white,
      marginVertical: hp('2%'),
      shadowOpacity: 0.3,
      // marginTop: hp('1.4%'),
     } ,
     recipientNeomorphContainer: {
      width: wp('90%'),
      height: hp('28%'),
      borderRadius: wp('3%'),
      shadowRadius: 4,
      backgroundColor: AppColors.white,
      marginVertical: hp('3%'),
      shadowOpacity: 0.3,
      marginTop: hp('1.4%'),
      paddingBottom: hp('3'),
      // elevation:8
     } ,
     smallRoundContainer: {
      height: hp('5%'),
      width: wp('10%'),
      justifyContent: 'center',
      // marginLeft: wp('4%'),
      alignItems: 'center',
      borderRadius: hp('10%'),
      backgroundColor: AppColors.primary,
      //  marginRight: wp('2/%'),
       marginTop:hp('3%')
    },
    cartButtonContainer:{
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: AppColors.background,
      width: wp('100%'),
      height: hp('10%'),
      marginTop:hp('28'),
      justifyContent: 'space-evenly',
    }
  
});

export default ContainerStyles;