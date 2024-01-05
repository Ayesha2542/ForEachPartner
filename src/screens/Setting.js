import React, {useContext, useEffect, useState} from 'react';
import DrawerHeader from '../components/headers/DrawerHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  ImageBackground,
  StatusBar,
  Modal,
  StyleSheet,

} from 'react-native';
import AppColors from '../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProfileHeader from '../components/headers/ProfileHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconStyles from '../assets/Styles/IconStyles';
import TextStyles from '../assets/Styles/TextStyles';
import AppContext from '../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {baseUrl,currentUser,storeUpdatedCurrentUser}=useContext(AppContext)

  const OpenModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  // {console.log('current user hai k nai',currentUser)}
  
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
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <ProfileHeader navigation={navigation} item="Setting" />
      

      <StatusBar
        barStyle="dark-content"
        backgroundColor={AppColors.white}
        translucent={true}
      />
      <ScrollView>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('ForgetPassword')
        }}>
          <View
            style={{
              borderBottomWidth: wp('0.4'),
              borderColor: AppColors.background,
              height: hp('9'),
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: wp('4'),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp(2.3),
                  color: AppColors.black,
                  marginLeft: wp('6'),
                }}>
                Change Password
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={AppColors.primary}
                style={{marginTop: hp('0.5')}}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <View
            style={{
              borderBottomWidth: wp('0.4'),
              borderColor: AppColors.background,
              height: hp('8'),
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: wp('4'),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp(2.3),
                  color: AppColors.black,
                  marginLeft: wp('6'),
                }}>
                Receive Notification
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={AppColors.primary}
                style={{marginTop: hp('0.5')}}
              />
            </View>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={()=>{
          navigation.navigate('PrivacyPolicy')
        }}>
          <View
            style={{
              borderBottomWidth: wp('0.4'),
              borderColor: AppColors.background,
              height: hp('8'),
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: wp('4'),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp(2.3),
                  color: AppColors.black,
                  marginLeft: wp('6'),
                }}>
                Privacy Policy
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={AppColors.primary}
                style={{marginTop: hp('0.5')}}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          navigation.navigate('TermsOfUse')
        }}>
          <View
            style={{
              borderBottomWidth: wp('0.4'),
              borderColor: AppColors.background,
              height: hp('8'),
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: wp('4'),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp(2.3),
                  color: AppColors.black,
                  marginLeft: wp('6'),
                }}>
                Terms of Use
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={AppColors.primary}
                style={{marginLeft: wp('40'), marginTop: hp('0.5')}}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={OpenModal}>
          <View
            style={{
              borderBottomWidth: wp('0.4'),
              borderColor: AppColors.background,
              height: hp('8'),
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: wp('4'),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: hp(2.3),
                  color: AppColors.black,
                  marginLeft: wp('6'),
                }}>
                Logout
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={AppColors.primary}
                style={{marginLeft: wp('40'), marginTop: hp('0.5')}}
              />
            </View>
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
                     Thanks for stopping by. See you again soon!
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity onPress={()=>{
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
      </ScrollView>
    </SafeAreaView>
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


export default Setting;
