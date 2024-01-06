import React, { useContext } from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import {Neomorph} from 'react-native-neomorph-shadows';
import ImageStyles from '../../assets/Styles/ImageStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddressHeader from '../../components/headers/AddressHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AppContext from '../../Context/AppContext';

const NewOrder = ({navigation, item}) => {
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <AddressHeader navigation={navigation} item="New Order" />
      <View style={[ContainerStyles.bottomBorder2, {marginTop: hp('2')}]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/Images/toqeer.jpeg')} // Specify the source of the image
            style={[ImageStyles.orderProfileImage, {marginLeft: wp('7')}]} // Set the desired width and height of the image
          />

          <Text
            style={{
              fontSize: hp('2'),
              fontFamily: 'Poppins-SemiBold',
              color: AppColors.black,
              marginLeft: wp('2'),
            }}>
            Ahmad
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: hp('2.2'),
              color: AppColors.black,
              marginLeft: wp('28'),
              marginTop: hp('1'),
            }}>
            Order id: 348
          </Text>
        </View>
        <Text
          style={[
            TextStyles.lightText,
            {
              marginLeft: wp('21'),
            },
          ]}>
          Today at 12:35 AM
        </Text>
      </View>

      <View
        style={{
          height: hp('6'),
          width: wp('100'),
          justifyContent: 'center',
          marginTop:hp('1.5'),
          borderBottomWidth: hp('0.2'),
          borderColor: AppColors.background2,
        }}>
        <View style={{flexDirection: 'row', marginLeft: wp('10')}}>
          <TouchableOpacity>
            <FontAwesome
              name="phone"
              size={wp('6')}
              style={{color: AppColors.primary, marginTop: hp('1')}}
            />
          </TouchableOpacity>
      
          <Text
            style={{
              color: AppColors.black,
              marginTop: hp('1'),
              marginLeft: wp('6'),
            }}>
            +923239545377
          </Text>
          <TouchableOpacity>
            <Neomorph
              darkShadowColor={AppColors.primary}
              lightShadowColor={AppColors.darkOrange}
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 1,
                backgroundColor: AppColors.white,
                borderRadius: wp('1%'),
                height: hp('5%'),
                width: wp('14%'),
                shadowOpacity: 0.3,
                marginBottom: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp('34'),
              }}>
              <Text
                style={[TextStyles.miniPrimaryColorText, {fontSize: wp('3')}]}>
                Call
              </Text>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
         height: hp('6'),
         width: wp('100'),
         justifyContent: 'center',
         marginTop:hp('1.5'),
         borderBottomWidth: hp('0.2'),
         borderColor: AppColors.background2,
      }}>
        <View style={{flexDirection: 'row', marginLeft: wp('10')}}>
          <TouchableOpacity>
            <MaterialIcons
              name="email"
              size={wp('6')}
              style={{color: AppColors.primary, marginTop: hp('1')}}
            />
          </TouchableOpacity>
          <View style={{width: wp('60')}}>
            <Text
              style={{
                color: AppColors.black,
                marginTop: hp('1.2'),
                marginLeft: wp('5'),
              }}>
              Ahmad25@gamil.com
            </Text>
          </View>
          <TouchableOpacity>
            <Neomorph
              darkShadowColor={AppColors.primary}
              lightShadowColor={AppColors.darkOrange}
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 1,
                backgroundColor: AppColors.white,
                borderRadius: wp('1%'),
                height: hp('5%'),
                width: wp('14%'),
                shadowOpacity: 0.3,
                marginBottom: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp('5'),
              }}>
              <Text
                style={[TextStyles.miniPrimaryColorText, {fontSize: wp('3')}]}>
                Email
              </Text>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
         height: hp('8'),
         width: wp('100'),
         justifyContent: 'center',
         marginTop:hp('2.5'),
         borderBottomWidth: hp('0.2'),
         borderColor: AppColors.background2,
      }}>
        <View style={{flexDirection: 'row', marginLeft: wp('10')}}>
          <TouchableOpacity>
            <MaterialIcons
              name="location-pin"
              size={wp('6')}
              style={{color: AppColors.primary, marginTop: hp('1')}}
            />
          </TouchableOpacity>
          <View style={{height: wp('17'), width: wp('63')}}>
            <Text
              style={{
                color: AppColors.black,
                marginTop: hp('0.5'),
                marginLeft: wp('4'),
              }}>
              332-B Billa Chowk Settlite Town ,Gugjranwala
            </Text>
          </View>
          <TouchableOpacity>
            <Neomorph
              darkShadowColor={AppColors.primary}
              lightShadowColor={AppColors.darkOrange}
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 1,
                backgroundColor: AppColors.white,
                borderRadius: wp('1%'),
                height: hp('5%'),
                width: wp('15%'),
                shadowOpacity: 0.3,
                marginBottom: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp('2'),
              }}>
              <Text
                style={[TextStyles.miniPrimaryColorText, {fontSize: wp('3')}]}>
                Navigate
              </Text>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </View>
      <View
            style={[
              ContainerStyles.centeredContainer,
              {
                paddingHorizontal: 10,
              },
            ]}>

            <Text style={[TextStyles.orderDescription,{margin:10}]}>
            Message: Hi, please pack green sauce in my order and please tell your delivery boy that he has to come on 2nd floor because I'm not at home.
            </Text>
          </View>
        <View style={{
         height: hp('6'),
         width: wp('100'),
         justifyContent: 'center',
         marginTop:hp('2.5'),
         borderWidth: hp('0.2'),
         borderColor: AppColors.background2,
         backgroundColor:AppColors.lightGray
      }}>
         <View style={{flexDirection: 'row', marginLeft: wp('8')}}>
              <Text style={[TextStyles.label2]}>Item</Text>
              <Text style={[TextStyles.label2,{marginLeft:wp('30')}]}>Quantity</Text>
              <Text style={[TextStyles.label2,{marginLeft:wp('3')}]}>Price</Text>
            </View>
        </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp('8'),
                marginTop: hp('1'),
              }}>
               
              <Text style={[TextStyles.label3]}>Burgerks</Text>
              <Text style={[TextStyles.label3,{marginLeft:wp('32')}]}>Qty:1</Text>
              <Text style={[TextStyles.label3]}>Rs. 150</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('8')}}>
              <Text style={[TextStyles.label3]}>Shawarma</Text>
              <Text style={[TextStyles.label3,{marginLeft:wp('32')}]}>Qty:1</Text>
              <Text style={[TextStyles.label3]}>Rs. 150</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('8')}}>
              <Text style={[TextStyles.label3]}>Pizza</Text>
              <Text style={[TextStyles.label3,{marginLeft:wp('32')}]}>Qty:1</Text>
              <Text style={[TextStyles.label3]}>Rs. 550</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('8')}}>
              <Text style={[TextStyles.label3]}>Pizza</Text>
              <Text style={[TextStyles.label3,{marginLeft:wp('32')}]}>Qty:1</Text>
              <Text style={[TextStyles.label3]}>Rs. 550</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('8')}}>
              <Text style={[TextStyles.label3]}>Pizza</Text>
              <Text style={[TextStyles.label3,{marginLeft:wp('32')}]}>Qty:1</Text>
              <Text style={[TextStyles.label3]}>Rs. 550</Text>
            </View>
            <View style={{
         height: hp('15'),
         width: wp('100'),
         marginTop:hp('2.5'),
         borderWidth: hp('0.2'),
         borderColor: AppColors.background2,
         backgroundColor:AppColors.lightGray,
         
      }}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <TouchableOpacity>
            <Neomorph
              darkShadowColor={AppColors.primary}
              lightShadowColor={AppColors.darkOrange}
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: 1,
                backgroundColor: AppColors.white,
                borderRadius: wp('1.5'),
                height: hp('5%'),
                width: wp('22%'),
                shadowOpacity: 0.3,
                marginLeft: wp('3'),
                justifyContent:"center"
                ,marginTop:hp(2)
              }}>
              <Text
                style={[TextStyles.miniPrimaryColorText, {fontSize: wp('3')}]}>
                Print Invoice
              </Text>
            </Neomorph>
          </TouchableOpacity>
          <View style={{flexDirection:"column"}}>
          <Text style={{marginTop:hp('2')}}> Subtotal : Rs. 200</Text>
          <Text style={{marginTop:wp('2'),marginRight:wp('4')}}> DeliveryFee : Rs. 0.00</Text>
          </View>
          </View>
          <Text style={[TextStyles.mediumTextStyle2,{marginLeft:wp(61),color:AppColors.black,marginTop:hp('2')}]}>Total: Rs. 200</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={[ContainerStyles.cancelOrderTouchableMedium]}>
              <Text style={[TextStyles.mediumWhiteText]}>Cancel Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ContainerStyles.acceptOrderTouchableMedium]}>
              <Text style={[TextStyles.mediumWhiteText]}>Accept Order</Text>
            </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

export default NewOrder;
