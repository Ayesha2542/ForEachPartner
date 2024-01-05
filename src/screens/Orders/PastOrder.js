import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import CartHeader from '../../components/headers/CartHeader';
import ImageStyles from '../../assets/Styles/ImageStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';

const PastOrder = ({navigation}) => {
  const [ongoingOrders, setOngoingOrders] = useState([
    {
      id: '1',
      name: 'Happy Biryani & Fast Food',
      delivery: 'Delivered on 28 Sep 19:05',
      description: 'Cream Bhallay, Double Egg Burger',
      uri: require('../../assets/Images/biryani5.jpeg'),
      price: '337',
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <CartHeader navigation={navigation} item="Orders" />
      <Text
        style={{
          color: AppColors.black,
          fontFamily: 'Poppins-SemiBold',
          fontSize: hp('2.7'),
          marginLeft: wp('4'),
          marginTop: hp('4'),
        }}>
        Past orders
      </Text>

      <FlatList
        data={ongoingOrders}
        renderItem={({item}) => {
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('OrderDetail')
              }}>
              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.darkgray}
                swapShadows // <- change zIndex of each shadow color
                style={{
                  height: hp('20'),
                  width: wp('94'),
                  borderRadius: wp('1.3%'),
                  shadowRadius: 2,
                  backgroundColor: AppColors.white,
                  marginVertical: hp('1%'),
                  shadowOpacity: 0.3,
                  marginTop: hp('3%'),
                  paddingBottom: hp('3'),
                  flex: 1,
                }}>
                <View style={{flexDirection: 'row', width: wp('70')}}>
                  <Image
                    source={item.uri}
                    style={{
                      width: wp('24'),
                      height: hp('13'),
                      marginLeft: wp('3'),
                      marginTop: hp('3'),
                      borderRadius: wp('2'),
                    }}
                  />

                  <View
                    style={{
                      marginTop: hp('3'),
                      marginLeft: wp('2.5'),
                      marginRight:wp('2')
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: hp(2),
                        color: AppColors.black,
                      }}>
      {item.name.length > 26 ? item.name.substring(0, 26) + '\n' + item.name.substring(26) : item.name}</Text>
                    <Text style={{marginTop: hp('0.5')}}>{item.delivery}</Text>

                    <Text style={{marginTop: hp('0.5')}}>
                      {item.description.length > 35 ? item.description.substring(0, 35) + '\n' + item.description.substring(35): item.description}
                    </Text>
                    <Text
                      style={{
                        marginLeft: 0,
                        fontFamily: 'Poppins-Medium',
                        marginTop: hp('0.7'),
                        fontSize:hp('2')
                      }}>
                      Total Rs. {item.price}
                    </Text>
                  </View>
                </View>
                 {/* <TouchableOpacity
                  onPress={() => {
                    
                  }}>
                     <View style={{justifyContent:"center",alignItems:"center"}}>
                  <Neomorph
                    darkShadowColor={AppColors.white}
                    lightShadowColor={AppColors.white}
                    swapShadows // <- change zIndex of each shadow color
                    style={{
                      width: wp('85%'),
                      marginTop: hp('3.5%'),
                      backgroundColor: AppColors.primary,
                      borderRadius: wp('2%'),
                      height: hp('5%'),
                      alignItems:"center",
                      justifyContent:"center"
                    }}>
                    <Text
                      style={{
                        color: AppColors.white,
                        // fontWeight: '600',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: hp('1.8%'),
                        textAlign: 'center',
                      }}>
                      Select items to reorder
                    </Text>
                  </Neomorph>
                  </View> 
                </TouchableOpacity> */}
              </Neomorph>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default PastOrder;
