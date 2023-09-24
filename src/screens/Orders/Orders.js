import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList
} from 'react-native';
import {Button} from 'react-native-paper';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TabBarStyles from '../../assets/Styles/TabBarStyles';

import TabScreensHeader from '../../components/headers/TabScreensHeader';
import OrderCard from '../../components/Cards/OrderCard';

const Tab = createMaterialTopTabNavigator();
const NewOrders = ({navigation}) => {
  const[ongoingOrderCards,setOngoingOrderCards]=useState([
    {
      customerName:"Ahmad",
      orderId:"348",
      dateTime:"Today at 12:35 AM",
      totalPrice:"Rs. 350.00",
      description:"Message: Hi, please pack green sauce in my order and please tell your delivery boy that he has to come on 2nd floor because I'm not at home."
    
    },
    {
      customerName:"Ali",
      orderId:"352",
      dateTime:"Today at 11:35 AM",
      totalPrice:"Rs. 750.00",
      description:"Message: Hi, please pack green sauce in my order and please tell your delivery boy that he has to come on 2nd floor because I'm not at home."

    
    }
  ])
  return (
    <SafeAreaView style={{flex:1,backgroundColor:AppColors.white}}>
       <FlatList
        data={ongoingOrderCards}
        renderItem={({item}) => {
          return <OrderCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};
// const ReadyToDeliver = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:AppColors.white}}>
//       <OrderCard navigation={navigation} />
//     </SafeAreaView>
//   );
// };
// const OngoingOrders = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:AppColors.white}}>
//       <OrderCard navigation={navigation} />
//     </SafeAreaView>
//   );
// };
// const PastOrders = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:AppColors.white}}>
//       <OrderCard navigation={navigation} />
//     </SafeAreaView>
//   );
// };


const Orders = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: AppColors.white, flex: 1}}>
      <TabScreensHeader navigation={navigation} title=" Our Orders" />

      <Tab.Navigator
        // initialRouteName={categoryName} // Set the initial route based on categoryName
        screenOptions={TabBarStyles.customTabBar}>
        <Tab.Screen name="NewOrders" component={NewOrders} />
        {/* <Tab.Screen name="Ready" component={ReadyToDeliver} /> */}
        {/* <Tab.Screen name="OngoingOrders" component={OngoingOrders} />
        <Tab.Screen name="PastOrders" component={PastOrders} /> */}

      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Orders;
