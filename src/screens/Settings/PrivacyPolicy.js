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

const PrivacyPolicy = ({navigation}) => {
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
              Privacy Policy
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
            {' '}
            PRIVACY POLICY
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              fontFamily: 'Poppins-Regular',
              color: AppColors.black,
            }}>
            Dear Customer,
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            We are pleased that you are interested in data protection. We would
            like to give you an easily understandable overview of the data
            processing practices and our privacy compliance measures in relation
            to our delivery websites, applications and related services
            (collectively referred to as "platform" below). Our goal is to
            provide you with an amazing customer experience while keeping your
            personal data secure. Trust, transparency and honesty are our
            leading principles. Your trust in our product is the reason why we
            can provide you with an amazing customer experience.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            1. Who we are
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            As regards the processing activities conducted on our platform, we
            will be the data controller responsible for what happens with your
            personal data. "Data controller" is a legal term and simply means
            that we are the party determining how your personal data is
            processed, for what purposes this is done and by what means. While
            we are required by law to provide you with all of the following
            information, we do so also out of the belief that a partnership
            should always be honest.
          </Text>

          <Text
            style={{
              color: AppColors.black,
              marginTop: hp(4),
              fontFamily: 'Poppins-SemiBold',
            }}>
            {' '}
            2. Privacy is your right and the choice is yours
          </Text>
          <Text
            style={{
              marginTop: hp('2'),
              color: AppColors.black,
              fontFamily: 'Poppins-Regular',
            }}>
            As a customer you have the choice which information you would like
            to share with us. Please be aware, however, that when signing up to
            our platform, you are required to accept our terms of use. Legally
            speaking, this means you will enter into a contract with us under
            which you are entitled to use the platform, in accordance with the
            terms of use. Of course, we need some information from you to be
            able to perform our obligations under this contract. However, it is
            entirely up to you to choose whether you would like to provide such
            information or would rather not use our platform. You can take the
            following steps to control and manage how much personal data you
            share with us:
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PrivacyPolicy;
