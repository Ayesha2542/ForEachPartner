import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ProductsBackButton from '../../components/headers/ProductsBackButton';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const OrderDetail = ({navigation, route, item}) => {

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        }
        return text;
      };
    
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
                <ScrollView>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground
        source={require('../../assets/Images/biryani5.jpeg')}
        style={{height: hp('40%'), width: wp('100%')}}>
        <ProductsBackButton navigation={navigation} />

        <View
          style={{
            flexDirection: 'row',
            width: wp('100%'),
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            marginTop: hp('22'),
            height: hp('8'),
            backgroundColor: 'white',
          }}>
          </View>
      </ImageBackground>
      <View style={{alignItems:"center"}}>

      <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp('2.2'),color:AppColors.black}}>Order #v3ds-bq6a</Text>
      <Text style={{fontFamily:"Poppins-Regular",fontSize:hp('1.8'),color:AppColors.black}}>Delivered on 28 Sep 19:05</Text>
      </View>
      <View style={{marginLeft:wp('8'),marginTop:hp('3'),marginRight:wp('7')}}>
        <Text style={{fontFamily:"Poppins-Regular"}}>Order from</Text>
        <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp('2.2'),color:AppColors.primary}}>Happy Biryani & Fast Food</Text>
        <Text style={{fontFamily:"Poppins-Regular",marginTop:hp('2')}}>Delivered to</Text>
        <Text style={{fontFamily:"Poppins-Regular",color:AppColors.black,fontSize:hp('2')}}>Sharjah Swimming Pool Bazar no 1, street no 9, Gujranwala</Text>
      </View>
      <View
            style={{
              marginTop: hp('2'),
              width: wp('100'),
              borderBottomWidth: hp('1'),
              borderColor: AppColors.background2,
            }}></View>
      <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('8'),
              marginRight: wp('7'),
              marginTop: hp('3'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColors.black,
                fontSize: hp('2'),
              }}>
              {truncateText('1x  Cream Bhallay', 30)}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: AppColors.black,
                fontSize: hp('1.9'),
              }}>
              Rs. 300
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('8'),
              marginRight: wp('7'),
              marginTop: hp('1'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColors.black,
                fontSize: hp('2'),
              }}>
              {truncateText('1x  Double Egg Burger', 30)}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: AppColors.black,
                fontSize: hp('1.9'),
              }}>
              Rs. 230
            </Text>
          </View>
          <View
            style={{
              marginTop: hp('2'),
              width: wp('100'),
              borderBottomWidth: hp('0.3'),
              borderColor: AppColors.background2,
            }}></View>
               <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('8'),
              marginRight: wp('7'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('2'),
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('1.9'),
                color: AppColors.black,
              }}>
              Rs. 530
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('8'),
              marginRight: wp('7'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('2'),
              }}>
              Plateform Fee
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('1.8'),
                color: AppColors.black,
              }}>
              Rs. 08
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('8'),
              marginRight: wp('7'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: hp('2.3'),
                color:AppColors.black
              }}>
              Total
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('1.9'),
                color: AppColors.black,
              }}>
              Rs. 538
            </Text>
          </View>
          <View
            style={{
              marginTop: hp('2'),
              width: wp('100'),
              borderBottomWidth: hp('0.3'),
              borderColor: AppColors.background2,
            }}></View>
            <Text style={{marginLeft:wp('8'),fontFamily: 'Poppins-SemiBold', fontSize: hp('2'), color:AppColors.black,marginTop:hp('4')
}}>Paid with</Text>
<View
              style={{
                flexDirection: 'row',
                width: wp('100%'),
                marginTop: hp('1.5'),
                marginLeft:wp('8'),
                marginRight:wp('7'),
                marginBottom:hp('4')

              }}>
              <MaterialCommunityIcons
                name="cash"
                size={24}
                color={AppColors.Gray}
                style={{}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: AppColors.black,
                  marginLeft: wp('2'),
                  fontSize: hp('2'),
                }}>
                Cash on Deleivery
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: AppColors.black,
                  marginLeft: wp('25'),
                  fontSize: hp('2'),
                }}>
                Rs. 650
              </Text>
            </View>
          </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetail;
