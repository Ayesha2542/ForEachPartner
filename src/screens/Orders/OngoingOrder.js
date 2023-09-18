import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import ImageStyles from '../../assets/Styles/ImageStyles';
import {SafeAreaView} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import OtherStyles from '../../assets/Styles/OtherStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconStyles from '../../assets/Styles/IconStyles';


const OngoingOrder = ({navigation}) => {
  const [ongoingOrders, setOngoingOrders] = useState([
    {
      id: '1',
      name: 'Cheeseburger',
      price: 10.99,
      uri: require('../../assets/Images/image38.jpg'),
      orderId: '#12345',
      restaurantName: 'Delicious Eats',
      total: 15.98,
    },
    {
      id: '1',
      name: 'Cheeseburger',
      price: 10.99,
      uri: require('../../assets/Images/image38.jpg'),
      orderId: '#12345',
      restaurantName: 'Delicious Eats',
      total: 15.98,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader navigation={navigation} item="OnGoing Order" />

      <FlatList
        data={ongoingOrders}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
                paddingBottom: hp('3'),
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={item.uri} style={[ImageStyles.orderImage]} />
                <View
                  style={{
                    marginTop: hp('2'),
                    marginLeft: wp('2.5'),
                  }}>
                  <View style={{width: wp('47')}}>
                    <Text style={[OtherStyles.text2]}>
                      Order_id {item.orderId}
                    </Text>
                  </View>
                  <View style={{width: wp('45')}}>
                    <Text
                      style={[
                        TextStyles.mediumTextStyle2,
                        {marginLeft: wp('0'), fontSize: hp('1.9')},
                      ]}>
                      {item.restaurantName}
                    </Text>
                  </View>
                  <View key={item.id} style={TextStyles.itemContainer}>
                    <Text style={TextStyles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.totalContainer}>
                    <Text style={styles.total}>
                      Total: ${item.total.toFixed(2)}
                    </Text>
                    <FontAwesome
                      name="trash"
                      size={25}
                      color={AppColors.primary}
                      style={{marginLeft: wp('20')}}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />

      {/* <View style={{alignItems:"center"}}>
          <TouchableOpacity>
        <Neomorph
          // darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          // inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={[ContainerStyles.SmalltouchableOpacityNeomorphContainer]}>
          <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:hp('1.5')}}>
            <Text style={{color:AppColors.white,fontFamily:"Poppins-SemiBold",fontSize:hp('2')}}>
             Cancel Order
            </Text>
          </View>
        </Neomorph>
      </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    // alignItems:"center"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderId: {
    fontSize: 18,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingTop: 10,
    flexDirection: 'row',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default OngoingOrder;
