import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
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


const SingleProductDetail = ({navigation, route, item}) => {
const {productImage, productName, productPrice, productDescription} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground
        source={{uri: productImage}}
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

      <Text style={[TextStyles.leftText, {marginTop: hp('0'),marginRight:wp('4')}]}>
        {productName}
      </Text>
      <View style={{height: hp('30'),marginTop:hp('3')}}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            marginLeft: wp('4'),
            fontSize: wp('4'),
          }}>
          Description:
        </Text>
      
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            marginTop: hp('1'),
            textAlign: 'justify', // You can use 'left' if you want strict left alignment
            paddingRight: 16, // Adjust the padding as per your design
            paddingLeft: 16,
          }}>
          {productDescription}
        </Text>
      
        <Text style={[TextStyles.foodPrices]}>Rs.{productPrice}</Text>
      </View>
      <Image
        source={require('../../assets/Images/image10.png')}
        style={{height: hp(50), width: hp(100), marginTop: hp(3)}}
      />
    </SafeAreaView>
  );
};

export default SingleProductDetail;
