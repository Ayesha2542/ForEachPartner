import React, { useState } from 'react';
import { FlatList} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RestaurantsCard from './RestaurantsCard';

const LargeCard= ({navigation},props) => {
const[allResturantsCards,setAllResturantsCards]=useState([
  {
 
    uri: require('../../assets/Images/image38.jpg'),
    width: wp(90),
    height: hp(30),
    title:"Baba Freed Burger Point" ,
    deliveryTime: '55 min',
    },
  {

    uri: require('../../assets/Images/image39.jpg'),
    width: wp(90),
    height: hp(30),
    title:"Naveed Tikka Shop",
    deliveryTime: '55 min',
  },{

    uri: require('../../assets/Images/image22.png'),
    width: wp(90),
    height: hp(30),
    title:"Ghar ka khana",
    deliveryTime: '55 min',
  },{
 
    uri: require('../../assets/Images/image33.jpg'),
    width: wp(90),
    height: hp(30),
    title:"Domino's Pizza",
    deliveryTime: '55 min',
  },{

    uri: require('../../assets/Images/image24.png'),
    width: wp(90),
    height: hp(30),
    title:"Banjoosa Pizza & Fast Food",
    deliveryTime: '55 min',
  },{

    uri: require('../../assets/Images/image23.png'),
    width: wp(90),
    height: hp(30),
    title:"The AI Baik",
    deliveryTime: '55 min',
  },{
    uri: require('../../assets/Images/image32.jpg'),
    width: wp(90),
    height: hp(30),
    title:"The AI Baik",
    deliveryTime: '55 min',
  },
])
  return (
    <FlatList
      data={allResturantsCards}
      Vertical
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return <RestaurantsCard navigation={navigation} item={item}/>
    }}  />
  );
};
export default LargeCard;
