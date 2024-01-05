import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import TabScreensHeader from '../../components/headers/TabScreensHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

const YourOrder = ({navigation}) => {

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <TabScreensHeader navigation={navigation} item=" Your Order" />
      <ScrollView>
        <View
          style={{
            padding: 20,
            flex: 1,
            alignItems: 'center',
            backgroundColor: AppColors.white,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: AppColors.black,
              fontSize: hp('2.3'),
            }}>
            Estimated Delivery time
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: AppColors.black,
              fontSize: hp('4.5'),
            }}>
            10:05 - 10:15
          </Text>
          <LottieView
            source={require('../../assets/animations/estimateDeleivery.json')}
            autoPlay
            loop
            style={{width: 210, height: 210}}
          />
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: AppColors.black,
              fontSize: hp('3.5'),
            }}>
            Got your Order!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: AppColors.white,
            marginVertical: hp('1%'),
            paddingBottom: hp('3'),
            flex: 1,
          }}>
          <View style={{flexDirection: 'row', width: wp('100%')}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColors.black,
                marginTop: hp('3'),
                marginLeft: wp('4'),
                fontSize: hp('2.2'),
              }}>
              Order Details
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('4'),
              marginRight: wp('3'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: AppColors.black,
                fontSize: hp('1.8'),
              }}>
              Your order from:
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColors.black,
                fontSize: hp('1.7'),
              }}>
              Lahore Food Point
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('4'),
              marginRight: wp('3'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: AppColors.black,
                fontSize: hp('1.8'),
              }}>
              Your order number:
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColors.black,
                fontSize: hp('1.7'),
              }}>
              #l7rt-xutj
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('4'),
              marginRight: wp('3'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: AppColors.black,
                fontSize: hp('1.8'),
              }}>
              Delivery address:
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColors.black,
                fontSize: hp('1.7'),
              }}>
              Satellite town gujranwala
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'red', fontSize: hp('6')}}>...</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('4'),
              marginRight: wp('3'),
              marginTop: hp('3'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: AppColors.black,
                fontSize: hp('1.8'),
              }}>
              {truncateText('2x   Fresh Fried Egg', 30)}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppColors.black,
                fontSize: hp('1.7'),
              }}>
              Rs. 160
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
              marginLeft: wp('4'),
              marginRight: wp('3'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('1.8'),
                color: AppColors.black,
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('1.8'),
                color: AppColors.black,
              }}>
              Rs. 160
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('1.5'),
              justifyContent: 'space-between',
              marginLeft: wp('4'),
              marginRight: wp('3'),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('1.8'),
                color: AppColors.black,
              }}>
              Deleivery Fee
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: hp('1.8'),
                color: AppColors.black,
              }}>
              Rs. 45
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourOrder;
