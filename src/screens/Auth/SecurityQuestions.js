import React, {useContext, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import AppContext from '../../Context/AppContext';

const SecurityQuestions = ({navigation}) => {
  const {baseUrl, storeUpdatedCurrentUser,currentUser} = useContext(AppContext);
  const [firstSecurityAnswer, setFirstSecurityAnswer] = useState('');
  const [secondSecurityAnswer, setSecondSecurityAnswer] = useState('');
  const [firstSecurityAnswerError, setFirstSecurityAnswerError] = useState('');
  const [secondSecurityAnswerError, setSecondSecurityAnswerError] =
    useState('');
  //FUNCTIONS

  const securityQuestions = async () => {
    try {
      if (!firstSecurityAnswer) {
        setFirstSecurityAnswerError('*Required field');
      }
      if (!secondSecurityAnswer) {
        setSecondSecurityAnswerError('*Required field');
      }
      if (!firstSecurityAnswer || !secondSecurityAnswer) {
        return false;
      }
      const formData = new FormData();

      const securityQuestions = [
        {question: 'what is your nickname?', answer: firstSecurityAnswer},
        {
          question: 'What is your favourite fruit?',
          answer: secondSecurityAnswer,
        },
      ];

      formData.append('securityQuestions', JSON.stringify(securityQuestions));
      formData.append('_id', currentUser.userId);

      const response = await fetch(`${baseUrl}/securityQuestions`, {
        method: 'post',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });


      const data = await response.json();
      if (data.message === 'Data saved successfully') {
        navigation.navigate('RestaurantDetail');
      } else {
        console.log('Error in response: ', data);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <BackButtonHeader navigation={navigation} />
      <Image
        source={require('../../assets/Images/forgetPassword.jpg')} // Specify the source of the image
        style={[
          ImageStyles.loginImage,
          {marginTop: hp('0'), alignSelf: 'center'},
        ]} // Set the desired width and height of the image
      />
      <Text
        style={[
          TextStyles.leftHeading,
          {fontSize: hp('3%'), color: AppColors.primary},
        ]}>
        Security Questions
      </Text>
      {/* ye view mai ne neomorhp ko center krny k liye diya hai */}
      <View style={{alignItems: 'center'}}>
        <Text style={[TextStyles.label, {marginRight: wp('32%')}]}>
          Q1 : What is your nick name ?
        </Text>

        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={[
            ContainerStyles.inputFieldNeomorphContainer,
            {width: wp('70%')},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Answer"
              // maxLength={20}
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              // style={{fontFamily:'Poppins-Thin'}}
              value={firstSecurityAnswer}
              onChangeText={text => {
                setFirstSecurityAnswer(text);
                setFirstSecurityAnswerError('');
              }}
              autoCapitalize='none'
            />
          </View>
          {firstSecurityAnswerError ? (
              <Text style={[TextStyles.errorText]}>
                {firstSecurityAnswerError}
              </Text>
            ) : null}
        </Neomorph>
        <Text style={[TextStyles.label, {marginRight: wp('25%')}]}>
          Q2 : What is your favourite fruit ?
        </Text>

        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={[
            ContainerStyles.inputFieldNeomorphContainer,
            {width: wp('70%')},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Answer"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              value={secondSecurityAnswer}
              autoCapitalize="none"
              onChangeText={text => {
                setSecondSecurityAnswer(text);
                setSecondSecurityAnswerError('');

              }}
            />
          </View>
          {secondSecurityAnswerError ? (
              <Text style={[TextStyles.errorText]}>
                {secondSecurityAnswerError}
              </Text>
            ) : null}
        </Neomorph>

        <TouchableOpacity
          onPress={() => {
            securityQuestions();            
          }}>
          <Neomorph
            darkShadowColor="white"
            lightShadowColor="white"
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.touchableOpacityNeomorphContainer,
              {width: wp('70%')},
            ]}>
            <Text style={TextStyles.whiteCenteredLable}>Next</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
      {/* <Image
          source={require('../../assets/Images/signup3.png')} // Specify the source of the image
          style={[ImageStyles.signupImage,{marginTop:hp('11%')}]} // Set the desired width and height of the image
        /> */}
        </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityQuestions;
