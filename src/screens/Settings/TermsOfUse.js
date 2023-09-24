import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-paper';
import ImageStyles from '../../assets/Styles/ImageStyles';
import {SafeAreaView} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native';

const TermsOfUse = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      {/* <ProfileHeader navigation={navigation} item="Privacy Policy" /> */}
      <ScrollView>
        <ImageBackground
          style={{}}
          source={require('../../assets/Images/image40.jpg')}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              height: hp('25'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: hp('5'), color: AppColors.white}}>
              Terms of Use
            </Text>
          </View>
        </ImageBackground>
        <View style={{marginLeft: wp('6'), marginRight: wp('4')}}>
          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            Terms of Use Agreement
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            This Terms of Use Agreement ("Agreement") governs your use of the
            "Food for Each" mobile application (the "App"), which is owned and
            operated by [Your Company Name] ("Company," "we," "our," or "us").
            By using the App, you agree to be bound by the terms and conditions
            outlined in this Agreement.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            1. Acceptance of Terms
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            By accessing or using the App, you agree to comply with and be bound
            by this Agreement. If you do not agree to these terms, please do not
            use the App.
          </Text>
          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            2. Account Registration
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            To access certain features of the App, you may be required to
            register for an account. You agree to provide accurate, current, and
            complete information during the registration process and to update
            such information to keep it accurate, current, and complete. You are
            responsible for safeguarding your account credentials and for any
            activities or actions conducted under your account.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            3. Use of the App
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            a. You agree to use the App for lawful purposes only and in
            compliance with all applicable laws and regulations. b. You will not
            use the App in any way that could disable, overburden, damage, or
            impair the App or interfere with any other party's use of the App.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            4. Privacy
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            Your use of the App is also governed by our Privacy Policy, which
            can be found [link to Privacy Policy]. By using the App, you consent
            to the collection, use, and sharing of information as described in
            the Privacy Policy.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            5. Intellectual Property
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            a. All content, features, and functionality of the App, including
            but not limited to text, graphics, logos, images, and software, are
            the property of the Company and are protected by intellectual
            property laws. b. You may not modify, reproduce, distribute,
            display, or create derivative works from any content or materials on
            the App without our prior written consent.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            6. Disclaimers
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            a. The App is provided on an "as is" and "as available" basis. We
            make no representations or warranties of any kind, express or
            implied, regarding the accuracy, reliability, or completeness of the
            App or its content. b. We disclaim any responsibility for any harm
            resulting from your use of the App.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            7. Termination
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            We reserve the right to terminate or suspend your account and access
            to the App, with or without notice, for any reason, including if we
            believe you have violated this Agreement.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            8. Changes to Terms
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            We may revise this Agreement at any time by updating this page. By
            continuing to use the App after such revisions, you agree to be
            bound by the updated terms.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TermsOfUse;
