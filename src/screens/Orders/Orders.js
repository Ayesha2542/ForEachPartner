import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabBarStyles from '../../assets/Styles/TabBarStyles';
import TabScreensHeader from '../../components/headers/TabScreensHeader';
import OrderCard from '../../components/Cards/OrderCard';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import AppContext from '../../Context/AppContext';
import axios from 'axios';

const Tab = createMaterialTopTabNavigator();

const NewOrders = ({navigation}) => {
  const {baseUrl} = useContext(AppContext)
  const [newOrderCards, setNewOrderCards] = useState([]);
  const viewAllOrders = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/viewAllOrders`,
      );

      setNewOrderCards(response.data);
      console.log('result',response.data)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      viewAllOrders();
    }, []),
  );

  const route = useRoute();
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={newOrderCards}
        renderItem={({item}) => {
          return (
            <OrderCard
              navigation={navigation}
              item={item}
              currentOrderRoute={route.name}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const OngoingOrders = ({navigation}) => {
  const route = useRoute();
  const [ongoingOrderCards, setOngoingOrderCards] = useState([
    {
      customerName: 'Ahmad',
      orderId: '348',
      dateTime: 'Today at 12:35 AM',
      totalPrice: 'Rs. 350.00',
      description:
        "Message: Hi, please pack green sauce in my order and please tell your delivery boy that he has to come on 2nd floor because I'm not at home.",
      uri: require('../../assets/Images/toqeer.jpeg'),
    },
    {
      customerName: 'Ali',
      orderId: '352',
      dateTime: 'Today at 11:35 AM',
      totalPrice: 'Rs. 750.00',
      description:
        "Message: Hi, please pack green sauce in my order and please tell your delivery boy that he has to come on 2nd floor because I'm not at home.",
      uri: require('../../assets/Images/image36.jpg'),
    },
  ]);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={ongoingOrderCards}
        renderItem={({item}) => {
          return (
            <OrderCard
              navigation={navigation}
              item={item}
              currentOrderRoute={route.name}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const PastOrders = ({navigation}) => {
  const route = useRoute();
  const [pastOrderCards, setPastOrderCards] = useState([
    {
      customerName: 'Ahmad',
      orderId: '348',
      dateTime: 'Today at 12:35 AM',
      totalPrice: 'Rs. 350.00',
      description:
        "Message: Hi, please pack green sauce in my order and please tell your delivery boy that he has to come on 2nd floor because I'm not at home.",
      uri: require('../../assets/Images/toqeer.jpeg'),
    },
    {
      customerName: 'Ali',
      orderId: '352',
      dateTime: 'Today at 11:35 AM',
      totalPrice: 'Rs. 750.00',
      description:
        "Message: Hi, please pack green sauce in my order and please tell your delivery boy that he has to come on 2nd floor because I'm not at home.",
      uri: require('../../assets/Images/image36.jpg'),
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={pastOrderCards}
        renderItem={({item}) => {
          return (
            <OrderCard
              navigation={navigation}
              item={item}
              currentOrderRoute={route.name}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const Orders = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: AppColors.white, flex: 1}}>
      <TabScreensHeader navigation={navigation} title=" Orders" />

      <Tab.Navigator screenOptions={TabBarStyles.customTabBar}>
        <Tab.Screen name="NewOrders" component={NewOrders} />
        <Tab.Screen name="OngoingOrders" component={OngoingOrders} />
        <Tab.Screen name="PastOrders" component={PastOrders} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Orders;
