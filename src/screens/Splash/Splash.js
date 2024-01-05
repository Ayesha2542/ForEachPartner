import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StatusBar,
} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppContext from '../../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
const{storeUpdatedCurrentUser,currentUser}= useContext(AppContext)
  useEffect(() => {
    const checkForUser = async ()=>{
      try{
        const userData = await AsyncStorage.getItem('user');
        console.log('User Stored in AsyncStorage',userData)
        if(userData){
          const parseData =JSON.parse(userData);
          storeUpdatedCurrentUser({
            userId:parseData.userId,
            userName:parseData.userName,
            userEmail:parseData.userEmail,
            userPassword:parseData.userPassword,
            restaurantImage:parseData.restaurantImage,
            restaurantName:parseData.restaurantName,
            restaurantAddress:parseData.restaurantAddress,
            restaurantCnic:parseData.restaurantCnic,
            restaurantPhoneNumber:parseData.restaurantPhoneNumber,
            restaurantCategories:parseData.restaurantCategories,
          });
          navigation.navigate('Home');
          console.log('parsed Data',parseData)
        }
        else{
          navigation.navigate('Login');
        }
      }catch(error){
        console.log('Error Checking for User Data',error);
      }
    };
    checkForUser();
  }, []);

  return (
    <SafeAreaView style={{flex:1,backgroundColor: AppColors.white,marginTop:hp('4')}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />

      <Image
        source={require('../../assets/Images/image1.png')}
        style={{height: hp('56%'), width: wp('57%')}}
      />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/Images/image13.png')}
          style={{height: hp('14%'), width: wp('32%')}}
        />
        <Text
          style={{
            fontSize: hp('3%'),
            color: AppColors.black,
            fontFamily: 'Poppins-SemiBold',
          }}>
          For Each Partner
        </Text>
      </View>
      <Image
        source={require('../../assets/Images/image2.png')}
        style={{height: hp('28%'), width: wp('100%'), marginTop: hp('8%')}}
      />
    </SafeAreaView>
  );
};

export default Splash;
