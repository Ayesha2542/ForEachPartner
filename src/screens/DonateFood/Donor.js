import React, {useState, useContext} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductsBackButton from '../../components/headers/ProductsBackButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import {TouchableHighlight} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import IconStyles from '../../assets/Styles/IconStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppContext from '../../Context/AppContext';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Donor = ({navigation, route}) => {
  // states
  const {imageUri, name} = route.params;
  const [donorName, setDonorName] = useState('');
  const [foodDetails, setFoodDetails] = useState('');
  const [distributionLocation, setDistributionLocation] = useState('');
  const [distributionDateTime, setDistributionDateTime] = useState('');
  const [donorPhoneNumber, setDonorPhoneNumber] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const {storeInDonatedData} = useContext(AppContext);

  const showDateTimePicker = () => setModalVisible(true);
  const hideDateTimePicker = () => setModalVisible(false);
  const handleDateConfirm = date => {
    setDistributionDateTime(date);
    hideDateTimePicker();
  };
  // // Set the data
  // const dataToDonate = {
  //   name: donorName,
  //   // Other data fields
  // };
  // setDonatedData(dataToDonate);

  return (
    <SafeAreaView style={{backgroundColor: AppColors.white, flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground
        source={imageUri}
        style={{height: hp('28%'), width: wp('100%')}}>
        <View
          style={{
            height: hp('28%'),
            width: wp('100%'),
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ProductsBackButton navigation={navigation} />
          <Text style={[TextStyles.whiteCenteredLable, {fontSize: hp('4%')}]}>
            Welcome
          </Text>
        </View>
      </ImageBackground>
      <Text
        style={[
          TextStyles.leftMediumText,
          {fontSize: hp('4%'), color: AppColors.primary, marginLeft: wp('10%')},
        ]}>
        {name}
      </Text>
      <ScrollView>
        <Text style={[TextStyles.donorLabel]}>Donor Name :</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.donorInputFieldNeomorphContainer]}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder="Enter name here"
                // maxLength={20}
                style={[TextFieldStyles.donorInputField]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={donorName}
                onChangeText={text => {
                  setDonorName(text);
                }}
                multiline={true}
              />
              {/* {inputError ? <Text style={{ color: 'red' }}>{inputError}</Text> : null} */}
            </View>
          </Neomorph>
        </View>
        <Text style={[TextStyles.donorLabel]}>Phone Number :</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.donorInputFieldNeomorphContainer]}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder="Enter phone no. here"
                keyboardType="numeric"
                // maxLength={20}
                style={[TextFieldStyles.donorInputField]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={donorPhoneNumber}
                onChangeText={text => {
                  setDonorPhoneNumber(text);
                }}
                multiline={true}
              />
            </View>
          </Neomorph>
        </View>

        <Text style={[TextStyles.donorLabel]}>Food Details :</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.donorInputFieldNeomorphContainer]}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder="Enter food details here"
                // maxLength={20}
                style={[TextFieldStyles.donorInputField]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={foodDetails}
                onChangeText={text => {
                  setFoodDetails(text);
                }}
                multiline={true}
              />
            </View>
          </Neomorph>
        </View>

        <Text style={[TextStyles.donorLabel]}> Distribution Point :</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.donorInputFieldNeomorphContainer,
              {width: wp('60'), marginLeft: wp('6%')},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder="Enter location here"
                // maxLength={20}
                style={[TextFieldStyles.donorInputField, {width: wp('50%')}]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={distributionLocation}
                onChangeText={text => {
                  setDistributionLocation(text);
                }}
                multiline={true}
              />
            </View>
          </Neomorph>
          <TouchableOpacity >

            <Ionicons
              name="location"
              size={wp('10%')}
              style={[IconStyles.signupIcons, {marginLeft: wp('3')}]}
            />
          </TouchableOpacity>
        </View>

        <Text style={[TextStyles.donorLabel]}> Distribution Time :</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.donorInputFieldNeomorphContainer,
              {width: wp('60'), marginLeft: wp('6%')},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder="Choose Date and Time"
                // maxLength={20}
                style={[TextFieldStyles.donorInputField, {width: wp('50%')}]}
                // style={{fontFamily:'Poppins-Thin'}}
                value={`${distributionDateTime}`}
                onChangeText={text => {
                  setDistributionDateTime(text);
                }}
                multiline={true}
              />
            </View>
          </Neomorph>
          <TouchableOpacity  onPress={showDateTimePicker}>
            <MaterialIcons
              name="access-time"
              size={wp('10%')}
              style={[IconStyles.signupIcons, , {marginLeft: wp('3')}]}
            />
          </TouchableOpacity>
          <DateTimePickerModal
              isVisible={isModalVisible}
              mode="datetime"
              onConfirm={handleDateConfirm}
              onCancel={hideDateTimePicker}
            />
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            let donationDetailObject = {
              name: donorName,
              phone: donorPhoneNumber,
              details: foodDetails,
              location: distributionLocation,
              dateTime: distributionDateTime ? distributionDateTime.toString() : null,
            };
            storeInDonatedData(donationDetailObject);
            console.log(donationDetailObject);
          }}>
          <Neomorph
            darkShadowColor="white"
            lightShadowColor="white"
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.touchableOpacityNeomorphContainer,
              {width: wp('70%')},
            ]}>
            <Text style={TextStyles.whiteCenteredLable}>Save</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Donor;
