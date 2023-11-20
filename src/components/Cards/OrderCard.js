import React, {useContext,useState} from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity, Modal,FlatList} from 'react-native';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomDropdown from '../CustomDropdown';
import {SelectList} from 'react-native-dropdown-select-list';


const OrderCard = ({navigation, item, currentOrderRoute}) => {
  const [selected, setSelected] =React.useState('');
  const data = [
    {value: 'Sort by Default Order'},
    {value: 'Sort by Name'},
    {value: 'Sort by Price'},
    {value: 'Sort by Date'},
    {value: 'Sort by Popularity'},
    {value: 'Sort by Rating'},
  ];
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
                source={item.uri} // Specify the source of the image
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
          {currentOrderRoute === 'NewOrders' ? (
            <>
              <View
                style={[
                  ContainerStyles.bottomBorder2,
                  {flex: 1, marginTop: hp('3')},
                ]}></View>
              <View
                style={[
                  ContainerStyles.centeredContainer,
                  {
                    paddingHorizontal: 10,
                  },
                ]}>
                <Text style={[TextStyles.orderDescription]}>
                  {item.description}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[ContainerStyles.borderTouchable]}>
                  <Text style={[TextStyles.miniPrimaryColorText]}>
                    Call Customer
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('NewOrder');
                  }}
                  style={[ContainerStyles.borderTouchable]}>
                  <Text style={[TextStyles.miniPrimaryColorText]}>
                    View Details
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[ContainerStyles.cancelOrderTouchable]}>
                  <Text style={[TextStyles.miniWhiteText]}>Cancel Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[ContainerStyles.acceptOrderTouchable]}>
                  <Text style={[TextStyles.miniWhiteText]}>Accept Order</Text>
                </TouchableOpacity>
              </View>
            </>
          ) :  currentOrderRoute === 'OngoingOrders' ? (
            <View
            style={{
              height: hp('8%'),
              width: wp('100'),
              justifyContent: 'center',
              // borderTopEndRadius: wp('3%'),
              // borderTopStartRadius: wp('3'),
              borderTopWidth: hp('0.2'),
              borderColor: AppColors.background2,
              flex: 1,
              flexDirection:"row"
            }}>
       <Text style={{color:"green",marginLeft:wp('1.5'),fontSize:wp('4'),fontFamily:"Poppins-SemiBold"}}>Order Status : </Text>
          <SelectList
          setSelected={setSelected}
          data={data}
          search={false}
          boxStyles={{
            borderRadius: 10,
            width: wp('40'),
            marginTop: 0,
            marginLeft: 10,
          }} 
          defaultOption={{value: 'Sort by Default Order'}}
          dropdownStyles={{width: 200, marginLeft: 70}} //default selected option
        />
        </View>
          ):  (
          <View
            style={{
              height: hp('8%'),
              width: wp('100'),
              justifyContent: 'center',
              // borderTopEndRadius: wp('3%'),
              // borderTopStartRadius: wp('3'),
              borderTopWidth: hp('0.2'),
              borderColor: AppColors.background2,
              flex: 1
            }}>

          
            <View style={{flexDirection:"row"}}>
            <Text style={{color:"green",marginLeft:wp('1.5'),fontSize:wp('4'),fontFamily:"Poppins-SemiBold"}}>Order Status : </Text>
            <Text style={{color:"green",marginLeft:wp('1.5'),fontSize:wp('4'),fontFamily:"Poppins-SemiBold"}}>Order Delivered</Text>
            <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('NewOrder');
                  }}
                  style={[ContainerStyles.borderTouchable,{marginTop:0,marginLeft:wp('10')}]}>
                  <Text style={[TextStyles.miniPrimaryColorText]}>
                    View Details
                  </Text>
                </TouchableOpacity>
            </View>
          </View>
          )
        }
        </Neomorph>
      </View>
    </SafeAreaView>
  );
};

export default OrderCard;
