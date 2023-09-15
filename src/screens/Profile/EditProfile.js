import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import ProfileHeader from '../../components/headers/ProfileHeader';
import AppColors from '../../assets/colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import { Neomorph } from 'react-native-neomorph-shadows';
import TextStyles from '../../assets/Styles/TextStyles';

const EditProfile = ({ route, navigation }) => {
  const [userFirstName, setUserFirstName] = useState('Toqeer');
  const [userLastName, setUserLastName] = useState('Fatima');
  const [userEmail, setUserEmail] = useState('toeerfatima42@gmail.com');
  const [userMobileNumber, setUserMobileNumber] = useState('+923026675287');

  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <ScrollView>
        {item == 'Name' ? (
          <View>
            <ProfileHeader navigation={navigation} item="Name" />
            <Text
              style={[TextStyles.simpleText2]}>
              This is how we'll address you
            </Text>
            <Text
              style={[TextFieldStyles.profileInputField2]}>
              {' '}
              First name
            </Text>
            <View style={{}}>
              <Neomorph
                darkShadowColor={AppColors.Gray}
                lightShadowColor={AppColors.background}
                // inner // <- enable shadow inside of neomorph
                swapShadows // <- change zIndex of each shadow color
                style={ContainerStyles.EditNameNeomorphContainer}>
                <TextInput
                  //  placeholder="Enter First name"
                  style={[TextFieldStyles.inputFieldEdit]}
                  value={userFirstName}
                  onChangeText={text => {
                    setUserFirstName(text);
                  }}
                />
              </Neomorph>
            </View>
            <Text
              style={[TextFieldStyles.profileInputField2]}>
              {' '}
              Last name
            </Text>

            <Neomorph
              darkShadowColor={AppColors.Gray}
              lightShadowColor={AppColors.background}
              // inner // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={ContainerStyles.EditNameNeomorphContainer}>
              <TextInput
                //   placeholder="Enter Last name"
                style={[TextFieldStyles.inputFieldEdit]}
                value={userLastName}
                onChangeText={text => {
                  setUserLastName(text);
                }}
              />
            </Neomorph>
          </View>
        ) : (
          [
            item == 'Email' ? (
              <View>
                <ProfileHeader navigation={navigation} item="Email" />
                <Text
                  style={TextStyles.simpleText2}>
                  Make sure we can reach you at your new email
                </Text>
                <Text
                  style={TextFieldStyles.profileInputField2}>
                  {' '}
                  Email{' '}
                </Text>
                <Neomorph
                  darkShadowColor={AppColors.Gray}
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
                    }}
                  />
                </Neomorph>
              </View>
            ) : (
              <View>
                <ProfileHeader navigation={navigation} item="Mobile Number" />
                <Text
                  style={[TextStyles.simpleText2, { marginRight: wp('6') }]}>
                  If you change to a new number, we'll take you through a
                  verification process at checkout the next time you order
                </Text>
                <Text
                  style={[TextFieldStyles.profileInputField2]}>
                  {' '}
                  Mobile number{' '}
                </Text>
                <Neomorph
                  darkShadowColor={AppColors.Gray}
                  lightShadowColor={AppColors.background}
                  // inner // <- enable shadow inside of neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={ContainerStyles.EditNameNeomorphContainer}>
                  <TextInput
                    //  placeholder="Enter First name"
                    style={[TextFieldStyles.inputFieldEdit]}
                    value={userMobileNumber}
                    onChangeText={text => {
                      setUserMobileNumber(text);
                    }}
                  />
                </Neomorph>
              </View>
            ),
          ]
        )}
        {/* :
    //   [item=='Mobile Number'?<View>
    // <ProfileHeader navigation={navigation} item ="Name"/>
    //   </View> */}
      </ScrollView>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Profile')
      }}>
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
