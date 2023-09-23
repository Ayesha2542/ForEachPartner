import React from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import CartHeader from '../../components/headers/CartHeader';
import TabScreensHeader from '../../components/headers/TabScreensHeader';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import {Neomorph} from 'react-native-neomorph-shadows';
import ImageStyles from '../../assets/Styles/ImageStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import {ScrollView} from 'react-native';
const OrderCard = ({navigation, item}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.darkgray}
          swapShadows // <- change zIndex of each shadow color
          style={[
            ContainerStyles.recipientNeomorphContainer,
            {height: hp('36'), width: wp('94')},
          ]}>
          <View style={[ContainerStyles.bottomBorder2, {marginTop: hp('1')}]}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/Images/toqeer.jpeg')} // Specify the source of the image
                style={[ImageStyles.orderProfileImage]} // Set the desired width and height of the image
              />
              <Text style={[TextStyles.label2, {marginLeft: wp('3%')}]}>
                {item.customerName}
              </Text>

              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  flex: 1,
                  fontSize: wp('3%'),
                }}>
                Order id: {item.orderId}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  TextStyles.lightText,
                  {
                    marginLeft: wp('17'),
                  },
                ]}>
                {item.dateTime}
              </Text>
              <Text style={[TextStyles.lightText]}>
                Total: {item.totalPrice}
              </Text>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp('15'),
                marginTop: hp('1'),
              }}>
              <Text style={[TextStyles.label2]}>Burger</Text>
              <Text style={[TextStyles.label2]}>Qty:1</Text>
              <Text style={[TextStyles.label2]}>Rs. 150</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('15')}}>
              <Text style={[TextStyles.label2]}>Shawarma</Text>
              <Text style={[TextStyles.label2]}>Qty:1</Text>
              <Text style={[TextStyles.label2]}>Rs. 150</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('15')}}>
              <Text style={[TextStyles.label2]}>Pizza</Text>
              <Text style={[TextStyles.label2]}>Qty:1</Text>
              <Text style={[TextStyles.label2]}>Rs. 550</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('15')}}>
              <Text style={[TextStyles.label2]}>Pizza</Text>
              <Text style={[TextStyles.label2]}>Qty:1</Text>
              <Text style={[TextStyles.label2]}>Rs. 550</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: wp('15')}}>
              <Text style={[TextStyles.label2]}>Pizza</Text>
              <Text style={[TextStyles.label2]}>Qty:1</Text>
              <Text style={[TextStyles.label2]}>Rs. 550</Text>
            </View>
          </ScrollView>
          <View
            style={[
              ContainerStyles.bottomBorder2,
              {flex: 1, marginTop: hp('3')},
            ]}></View>
          <Text style={[TextStyles.orderDescription]}>{item.description}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[ContainerStyles.borderTouchable]}>
              <Text style={[TextStyles.miniPrimaryColorText]}>
                Call Customer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ContainerStyles.borderTouchable]}>
              <Text style={[TextStyles.miniPrimaryColorText]}>
                View Details
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[ContainerStyles.cancelOrderTouchable]}>
              <Text style={[TextStyles.miniWhiteText]}>Cancel Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ContainerStyles.acceptOrderTouchable]}>
              <Text style={[TextStyles.miniWhiteText]}>Accept Order</Text>
            </TouchableOpacity>
          </View>
        </Neomorph>
      </View>
    </SafeAreaView>
  );
};

export default OrderCard;
