import React, {useContext, useEffect,useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppColors from '../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import TextStyles from '../assets/Styles/TextStyles';
import ImageStyles from '../assets/Styles/ImageStyles';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import AppContext from '../Context/AppContext';
import { Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomeDrawer = props => {
  const {currentUser, baseUrl, storeUpdatedCurrentUser} =
    useContext(AppContext);
const [isModalVisible, setIsModalVisible] = useState(false);
const OpenModal = () => {
  setIsModalVisible(true);
};
const closeModal = () => {
  setIsModalVisible(false);
};

  const navigation = useNavigation();
  useEffect(() => {
    storeUpdatedCurrentUser({
      userId: currentUser._id,
      userName: currentUser.userName,
      userEmail: currentUser.userEmail,
      userPassword: currentUser.userPassword,
      restaurantImage: currentUser.restaurantImage,
      restaurantName: currentUser.restaurantName,
      restaurantAddress: currentUser.restaurantAddress,
      restaurantCnic: currentUser.restaurantCnic,
      restaurantPhoneNumber: currentUser.restaurantPhoneNumber,
      restaurantCategories: currentUser.restaurantCategories,
    });
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
          source={{uri: baseUrl + currentUser.restaurantImage}}
          style={{
            marginTop: hp('9'),
            width: wp('26'),
            height: hp('13'),
            marginLeft: wp('3'),
            borderRadius: wp('15'),
          }}
        />
        <Text style={[TextStyles.whiteCenteredLable]}>
          {currentUser.userName}
        </Text>
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
              navigation.navigate('FoodDeals');
            }}>
            <View style={[ContainerStyles.TwoitemsCenter]}>
              <Ionicons name="settings-outline" size={22} />
              <Text style={[TextStyles.drawerTextStyle]}>Food Deal</Text>
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

          {/* <TouchableOpacity
            style={{paddingVertical: 15}}
            onPress={() => {
              navigation.navigate('SingleProductDetail');
            }}>
            <View style={[ContainerStyles.TwoitemsCenter]}>
              <Ionicons name="settings-outline" size={22} />
              <Text style={[TextStyles.drawerTextStyle]}>Products Detail</Text>
            </View>
          </TouchableOpacity> */}

        </View>
      </DrawerContentScrollView>

      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: AppColors.background,
        }}>
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Setting</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={OpenModal}  style={{paddingVertical: 15}}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Log Out</Text>
          </View>
        </TouchableOpacity>
        <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
                >
               
               
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={[TextStyles.leftMediumText, {marginLeft: 0}]}>
                      Logging out?
                    </Text>
                    <Text style={{marginTop:hp('2'),fontFamily:"Poppins-Regular"}}>
                     Thanks for shopping by. See you again soon!
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity onPress={() => {
                        closeModal();
       
        }}>
                        <View
                          style={{
                            borderWidth: 1.5,
                            borderRadius: 8,
                            borderColor: AppColors.primary,
                            height: hp('6'),
                            width: wp('35'),
                            marginTop: hp('5'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                          }}>
                          <Text style={{color:AppColors.primary,fontFamily:"Poppins-SemiBold"}}>Cancel</Text>

                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                        handleLogout();
                      }}>
                        <View
                          style={{
                            borderWidth: 1.5,
                            borderRadius: 8,
                            borderColor: AppColors.primary,
                            height: hp('6'),
                            width: wp('35'),
                            marginTop: hp('5'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor:AppColors.primary
                          }}>
                          <Text style={{color:AppColors.white,fontFamily:"Poppins-SemiBold"}}>Log out</Text>
                        </View>
                      </TouchableOpacity>
                      
                    </View>
                  </View>
                </View>
              </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
});


export default CustomeDrawer;
