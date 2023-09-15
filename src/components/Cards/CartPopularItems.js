import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartCardComponent from './CartCardComponent';


const CartPopularItems = ({navigation,title},props) => {
  const [allCards,setAllCards]=useState([{
    uri:require('../../assets/Images/shawarma1.jpg'),
    price:"Rs. 330.00",
    deliveryTime:"45 min"
  },
  {
    uri:require('../../assets/Images/pizza6.jpg'),
    price:"Rs. 330.00",
    deliveryTime:"25 min"
  },
  {
    uri:require('../../assets/Images/pizza3.jpeg'),
    price:"Rs. 330.00",
    deliveryTime:"30 min"
  },
  {
    uri:require('../../assets/Images/pizza8.webp'),
    price:"Rs. 330.00",
    deliveryTime:"40 min"
  },
  {
    uri:require('../../assets/Images/pizza5.jpeg'),
    price:"Rs. 330.00",
    deliveryTime:"45 min"
  },
])
  return (
  <FlatList data={allCards}
        horizontal

          renderItem={({item})=>{
              return <CartCardComponent props={props} item={item}/>

          }}
          showsHorizontalScrollIndicator={false}
          />

  );
};

export default CartPopularItems;
