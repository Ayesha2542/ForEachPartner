import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  _ScrollView,
  Text,
} from 'react-native';
import CartHeader from '../../components/headers/CartHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import IconStyles from '../../assets/Styles/IconStyles';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import AppContext from '../../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = ({navigation, item}) => {
  const {currentUser, baseUrl, storeUpdatedCurrentUser} =
  useContext(AppContext);

  const openGallery = async () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    };
    const images = await launchImageLibrary(options);
    updateRestaurant(images.assets[0]);
    // console.log(images.assets[0])
    // console.log('i am serry');
    return images;
  };

  const updateRestaurant = async image => {
    try {
      const formData = new FormData();
      formData.append('restaurantImage', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
      formData.append('_id', currentUser.userId);

      const response = await fetch(`${baseUrl}/updateRestaurantImage`, {
        method: 'post',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('ye rha response', response);

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        console.log(await response.text());
        return;
      }

      const data = await response.json();
      if (data.message === 'Data saved successfully') {
        storeUpdatedCurrentUser({
          userId: data.updatedUser._id,
          userName: data.updatedUser.userName,
          userEmail: data.updatedUser.userEmail,
          userPassword: data.updatedUser.userPassword,
          restaurantImage: data.updatedUser.restaurantImage,
          restaurantName: data.updatedUser.restaurantName,
          restaurantAddress: data.updatedUser.restaurantAddress,
          restaurantCnic: data.updatedUser.restaurantCnic,
          restaurantPhoneNumber: data.updatedUser.restaurantPhoneNumber,
          restaurantCategories: data.updatedUser.restaurantCategories,
        });
        await AsyncStorage.setItem('user', JSON.stringify(data));
        navigation.navigate('Profile', {key: Math.random()});
      } else {
        console.log('Error in response: ', data);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <CartHeader navigation={navigation} item="Profile" />
      <View style={{justifyContent: 'center', marginTop: hp('4')}}>
        <TouchableOpacity
          onPress={() => {
            openGallery();
          }}>
          <Image
            source={{uri: baseUrl + currentUser.restaurantImage}}
            style={{
              width: wp('30%'),
              height: hp('15%'),
              borderRadius: 100,
              alignSelf: 'center',
            }}
          />
          {console.log(
            'fetched profile image ',
            baseUrl + currentUser.restaurantImage,
          )}
          <View
            style={{
              height: hp('6'),
              width: wp('12'),
              backgroundColor: AppColors.lightGray,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: hp('3'),
              borderColor: AppColors.primary,
              marginLeft: wp('58'),
              marginTop: hp('-6'),
            }}>
            <MaterialIcons name="edit" size={23} color={AppColors.primary} />
          </View>
        </TouchableOpacity>

        <View style={{marginTop: hp('4'), alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile', {item: 'Name'});
            }}>
            <Neomorph
              darkShadowColor={AppColors.primary}
              lightShadowColor={AppColors.background}
              swapShadows // <- change zIndex of each shadow color
              style={ContainerStyles.profileInputFieldNeomorphContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[TextFieldStyles.profileInputField]}>
                  Owner Name
                </Text>
                <View style={{marginLeft: wp('1')}}>
                  <MaterialIcons
                    name="edit"
                    size={22}
                    color={AppColors.primary}
                    style={[IconStyles.editIcon]}
                  />
                </View>
              </View>
              <Text style={[TextFieldStyles.profileInputFieldText]}>
                {currentUser.userName}
              </Text>
            </Neomorph>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: hp('4'), alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {
              navigation.navigate('EditProfile', {item: 'Email'});
            }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.profileInputFieldNeomorphContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[TextFieldStyles.profileInputField]}>Email</Text>
              <View style={{marginLeft: wp('1')}}>
                <MaterialIcons
                  name="edit"
                  size={22}
                  color={AppColors.primary}
                  style={[IconStyles.editIcon]}
                />
              </View>
            </View>
            <Text style={[TextFieldStyles.profileInputFieldText]}>
              {currentUser.userEmail}
            </Text>
          </Neomorph>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: hp('4'), alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {
              navigation.navigate('EditProfile', {item: 'Restaurant Number'});
            }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.profileInputFieldNeomorphContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[TextFieldStyles.profileInputField]}>
              Number
              </Text>
              <View style={{marginLeft: wp('1')}}>
                <MaterialIcons
                  name="edit"
                  size={22}
                  color={AppColors.primary}
                  style={[IconStyles.editIcon]}
                />
              </View>
            </View>
            <Text style={[TextFieldStyles.profileInputFieldText]}>
              {currentUser.restaurantPhoneNumber}
            </Text>
          </Neomorph>
         </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
