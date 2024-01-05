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

const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: AppColors.white, flex: 1}}>
      <TabScreensHeader navigation={navigation} item=" My Orders" />
      <View
        style={{
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical:hp('10')
        }}>
        <LottieView
          source={require('../../assets/animations/OrderEmpty.json')}
          autoPlay
          loop
          style={{width: 230, height: 230}}
        />
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            color: AppColors.black,
            fontSize: hp('2.5'),
          }}>
          No orders yet
        </Text>

        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: hp('1.7'),
          }}>
          you don't have any orders yet. Try one of our awesome restaurants and
          place your first order!
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('');
          }}>
          <View style={{alignItems: 'center'}}>
            <Neomorph
              // darkShadowColor={AppColors.primary}
              lightShadowColor={AppColors.background}
              // inner // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 2,
                backgroundColor: AppColors.primary,
                height: hp('6.2%'),
                width: wp('65%'),
                marginVertical: hp('4%'),
                shadowOpacity: 0.2,
                marginLeft: wp('3'),
                marginRight: wp('4'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: AppColors.white,
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp('2'),
                }}>
                BROWSE RESTAURANTS
              </Text>
            </Neomorph>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;
