import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  _ScrollView,
  Text,
} from 'react-native';
import CartHeader from '../../components/headers/CartHeader';
import { Neomorph } from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  } from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import IconStyles from '../../assets/Styles/IconStyles';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';

const Profile = ({ navigation }) => {
  const [userName, setUserName] = useState('Toqeer Fatima');
  const [userEmail, setUserEmail] = useState('toqeerfatima@gmail.com');
  const [userMobileNumber, setMobileNumber] = useState('+923026665276');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <CartHeader navigation={navigation} item="Profile" />

      <View style={{ marginTop: hp('4'), alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile', { item: 'Name' })
          }}>
          <Neomorph
            darkShadowColor={AppColors.Gray}
            lightShadowColor={AppColors.darkgray}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.profileInputFieldContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[TextFieldStyles.profileInputField]}>Name</Text>
            <View style={{marginLeft:wp('1')}}>
              <MaterialIcons
                name="edit"
                size={25}
                color={AppColors.primary}
                style={[IconStyles.editIcon]}
              />
              </View>
            </View>
            <Text style={[TextFieldStyles.profileInputFieldText]}>
              {userName}
            </Text>
          </Neomorph>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: hp('4'), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('EditProfile', { item: 'Email' })
        }}>
          <Neomorph
            darkShadowColor={AppColors.Gray}
            lightShadowColor={AppColors.darkgray}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.profileInputFieldContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[TextFieldStyles.profileInputField]}>Email</Text>
              <View style={{marginLeft:wp('2')}}>
              <MaterialIcons
                name="edit"
                size={25}
                color={AppColors.primary}
                style={[IconStyles.editIcon]}
              />
              </View>
              </View>
            <Text style={[TextFieldStyles.profileInputFieldText]}>
              {userEmail}
            </Text>
          </Neomorph>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: hp('4'), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('EditProfile', { item: 'MobileNumber' })
        }}>
          <Neomorph
            darkShadowColor={AppColors.Gray}
            lightShadowColor={AppColors.darkgray}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.profileInputFieldContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[TextFieldStyles.profileInputField]}>Mobile</Text>
              <View style={{marginLeft:wp('0')}}>
              <MaterialIcons
                name="edit"
                size={25}
                color={AppColors.primary}
                style={[IconStyles.editIcon]}
              />
              </View>
            </View>
            <Text style={[TextFieldStyles.profileInputFieldText]}>
              {userMobileNumber}
            </Text>
          </Neomorph>
        </TouchableOpacity>
      </View>

      <Text style={[TextStyles.profileSimpleText]}>Connected accounts</Text>

      <View style={{ marginTop: hp('2'), alignItems: 'center' }}>
        <Neomorph
          darkShadowColor={AppColors.Gray}
          lightShadowColor={AppColors.darkgray}
          // inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.NeomorphContainer}>
          <View style={{ flexDirection: 'row', margin: hp('3.5') }}>
            <TouchableOpacity>
              <MaterialIcons
                name="facebook"
                size={20}
                color={AppColors.facebook}
              />
            </TouchableOpacity>

            <Text style={[TextStyles.simpleText,{marginLeft:wp('3')}]}>Facebook</Text>
          </View>
        </Neomorph>
      </View>

      <View style={{ marginTop: hp('2'), alignItems: 'center' }}>
        <Neomorph
          darkShadowColor={AppColors.Gray}
          lightShadowColor={AppColors.darkgray}
          // inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.NeomorphContainer}>
          <View style={{ flexDirection: 'row', margin: hp('3.5') }}>
            <TouchableOpacity style={{}}>
              <FontAwesome
                name="google"
                size={17}
                color={AppColors.facebook}
              />
            </TouchableOpacity>

            <Text style={[TextStyles.simpleText,{marginLeft:wp('5')}]}>Google</Text>
          </View>
        </Neomorph>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
