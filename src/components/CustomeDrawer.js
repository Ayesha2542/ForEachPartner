import React, { useContext, useEffect } from 'react';
import {ImageBackground,Text,View,Image,TouchableOpacity} from 'react-native';
import AppColors from '../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import TextStyles from '../assets/Styles/TextStyles';
import ImageStyles from '../assets/Styles/ImageStyles';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import AppContext from '../Context/AppContext';

const CustomeDrawer = props => {
  const {currentUser,baseUrl,storeUpdatedCurrentUser} = useContext(AppContext)
  const navigation = useNavigation();
  useEffect(() => {
    // Check for existing user data
    
    storeUpdatedCurrentUser({
      userId:currentUser._id,
      userName:currentUser.userName,
      userEmail:currentUser.userEmail,
      userPassword:currentUser.userPassword,
      restaurantImage:currentUser.restaurantImage,
      restaurantName:currentUser.restaurantName,
      restaurantAddress:currentUser.restaurantAddress,
      restaurantCnic:currentUser.restaurantCnic,
      restaurantPhoneNumber:currentUser.restaurantPhoneNumber,
      restaurantCategories:currentUser.restaurantCategories,
     
    })
    
   
  }, []);

  const handleLogout = async () => {
    try {
      // Clear user data from AsyncStorage
      await AsyncStorage.removeItem('user');
  
      // Navigate to the login screen
      navigation.navigate('Login');
      closeModal();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/Images/image36.jpg')}
        style={{alignItems: 'center', height: hp('30')}}>
        <Image
          source={{uri: baseUrl+ currentUser.restaurantImage}}
          style={[ImageStyles.logoImageStyle,{marginTop:hp('10')}]}
        />
        <Text style={[TextStyles.whiteCenteredLable]}>Mr. Ahmad</Text>
      </ImageBackground>
      <DrawerContentScrollView>
      <View
        style={{
          paddingLeft: 20,
        }}>
        
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Signup</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Address');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Address</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Notification</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Orders');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Orders</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Deals');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Special Meals</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('SingleProductDetail');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Products Detail</Text>
          </View>
        </TouchableOpacity>
 
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Checkout');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>Checkout</Text>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('MyOrders');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}> My Orders</Text>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('YourOrder');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}> Your Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('PastOrder');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.drawerTextStyle]}>PastOrder</Text>
          </View>
        </TouchableOpacity>
        </View>
        </DrawerContentScrollView>

        <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: AppColors.background,
        }}>
        <TouchableOpacity style={{paddingVertical: 15}}
                  onPress={() => {
                    navigation.navigate('Setting');
                  }}>
        
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Setting</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
   
  );
};

export default CustomeDrawer;
