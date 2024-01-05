import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import ProfileHeader from '../../components/headers/ProfileHeader';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import { Neomorph } from 'react-native-neomorph-shadows';
import TextStyles from '../../assets/Styles/TextStyles';
import AppContext from '../../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({ route, navigation }) => {
  const { currentUser, storeUpdatedCurrentUser, baseUrl } =
    useContext(AppContext);
  const [userName, setUserName] = useState(currentUser.userName);
  const [userEmail, setUserEmail] = useState(currentUser.userEmail);
  const [restaurantPhoneNumber, setRestaurantPhoneNumber] = useState(currentUser.restaurantPhoneNumber);
  const [userEmailError, setUserEmailError] = useState('');
  const [OwnerNameError, setOwnerNameError] = useState('');
  const [restaurantPhoneNumberError,setRestaurantPhoneNumberError]= useState('')

  const isEmailValid = userEmail => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(userEmail);
  };
  const isValidPhoneNumber = restaurantPhoneNumber => {
    const regex = /^(\+92|0)(3[0-9]{9})$/;
    return regex.test(restaurantPhoneNumber); 
  };

  const { item } = route.params;
  const updateCustomerProfile = async () => {
    try {
      if (!userName) {
        setOwnerNameError('Please Enter name.');
      }
      if (!userEmail) {
        setUserEmailError('Please enter your email address.');
      } else if (!isEmailValid(userEmail)) {
        setUserEmailError('Please enter a valid email address.');
      }
      if (!restaurantPhoneNumber) {
        setRestaurantPhoneNumberError('Please Enter Restaurant phone number');
      } else if (!isValidPhoneNumber(restaurantPhoneNumber)) {
        setRestaurantPhoneNumberError('Invalid Phone Number');
      }

      if (
        !userName ||
        !userEmail ||
        !isEmailValid(userEmail)||
        !isValidPhoneNumber(restaurantPhoneNumber)

      ) {
        return false;
      }

      const formData = new FormData();
      formData.append('_id', currentUser.userId);
      formData.append('userName', userName);
      formData.append('userEmail', userEmail);
      formData.append('restaurantPhoneNumber', restaurantPhoneNumber);

      const response = await fetch(`${baseUrl}/updateRestaurantProfile`, {
        method: 'post',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();

      if (response.ok) {
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

          await AsyncStorage.setItem('user', JSON.stringify({
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
          }));
          navigation.navigate('Profile');
        } else {
          console.log('Error in response: ', data);
        }
      } else {
        // Handle other response status codes
        if (data.error === 'Email is already in use by another user') {
          // Display a message to the user
          setUserEmailError('A user with this Email Address Already Exists');
        } else {
          console.log('Error in response: ', data);
        }
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <ScrollView>
        {item == 'Name' ? (
          <View key="name">
            <ProfileHeader navigation={navigation} item="Name" />
            <Text style={[TextStyles.simpleText2]}>
              This is how we'll address you
            </Text>
            <Text style={[TextFieldStyles.profileInputField2]}>
              {' '}
              Owner Name
            </Text>
            <View>
              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.background}
                // inner // <- enable shadow inside of neomorph
                swapShadows // <- change zIndex of each shadow color
                style={ContainerStyles.EditNameNeomorphContainer}>
                <TextInput
                  style={[TextFieldStyles.inputFieldEdit]}
                  value={userName}
                  onChangeText={text => {
                    setUserName(text);
                  }}
                />
              </Neomorph>
              {OwnerNameError ? (
                  <Text style={[TextStyles.errorText, { marginLeft: wp('7'), marginTop: hp('0') }]}>{OwnerNameError}</Text>
            ) : null}
            </View>
          </View>
        ) : (
          [
            item == 'Email' ? (
              <View key="email">
                <ProfileHeader navigation={navigation} item="Email" />
                <Text style={TextStyles.simpleText2}>
                  Make sure we can reach you at your new email
                </Text>
                <Text style={TextFieldStyles.profileInputField2}> Email </Text>
                <Neomorph
                  darkShadowColor={AppColors.primary}
                  lightShadowColor={AppColors.background}
                  // inner // <- enable shadow inside of neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={ContainerStyles.EditNameNeomorphContainer}>
                  <TextInput
                    //  placeholder="Enter First name"
                    style={[TextFieldStyles.inputFieldEdit]}
                    value={userEmail}
                    onChangeText={text => {
                      setUserEmail(text);
                      setUserEmailError('')
                    }}
                  />
                </Neomorph>
                {userEmailError ? (
                  <Text style={[TextStyles.errorText, { marginLeft: wp('7'), marginTop: hp('0') }]}>{userEmailError}</Text>
                ) : null}
              </View>


            ) : (

              <View key="number">
                <ProfileHeader navigation={navigation} item="Number" />
                <Text style={[TextStyles.simpleText2, { marginRight: wp('6') }]}>
                  If you change to a new number, we'll take you through a
                  verification process at checkout the next time you order
                </Text>
                <Text style={[TextFieldStyles.profileInputField2]}>
                  {' '}
                  Restaurant Number{' '}
                </Text>
                <Neomorph
                  darkShadowColor={AppColors.primary}
                  lightShadowColor={AppColors.background}
                  // inner // <- enable shadow inside of neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={ContainerStyles.EditNameNeomorphContainer}>
                  <TextInput
                    //  placeholder="Enter First name"
                    style={[TextFieldStyles.inputFieldEdit]}
                    value={restaurantPhoneNumber}
                    onChangeText={text => {
                      setRestaurantPhoneNumber(text);
                      setRestaurantPhoneNumberError('');

                    }}
                  />
                  
                </Neomorph>
                {restaurantPhoneNumberError ? (
              <Text style={[TextStyles.errorText, { marginLeft: wp('7'), marginTop: hp('0') }]}>{restaurantPhoneNumberError}</Text>
            ) : null}
               
              </View>
            ),
          ]
        )}


      </ScrollView>
      <TouchableOpacity
        onPress={updateCustomerProfile}
      >
        <Neomorph
          // darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          // inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.touchableOpacityNeomorphContainer2}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={[TextStyles.whiteCenteredLable2]}>Save</Text>
          </View>
        </Neomorph>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;
