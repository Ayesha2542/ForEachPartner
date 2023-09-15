import React from 'react';
import {View, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import AppColors from '../../assets/colors/AppColors';
import TextStyles from '../../assets/Styles/TextStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DonationCard = ({navigation, item}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Neomorph
        darkShadowColor={AppColors.primary}
        lightShadowColor={AppColors.darkgray}
        swapShadows // <- change zIndex of each shadow color
        style={ContainerStyles.recipientNeomorphContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[TextStyles.leftText, {color: 'purple'}]}>
            Donor Name :{' '}
          </Text>
          <Text
            style={[
              TextStyles.label,
              {marginTop: hp('2.3%'), marginLeft: wp('2'), width: wp('42%')},
            ]}>
            {item.name}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              TextStyles.leftText,
              {color: 'purple', marginTop: hp('0')},
            ]}>
            Phone Number :{' '}
          </Text>
          <Text
            style={[
              TextStyles.label,
              {marginTop: hp('0.5%'), marginLeft: wp('2')},
            ]}>
            {item.phone}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              TextStyles.leftText,
              {color: 'purple', marginTop: hp('0')},
            ]}>
            Food Details :{' '}
          </Text>
          <Text
            numberOfLines={2} // Adjust the number as needed
            style={[
              TextStyles.label,
              {marginTop: hp('0.5%'), marginLeft: wp('2'), width: wp('54%')},
            ]}>
            {item.details}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              TextStyles.leftText,
              {color: 'purple', marginTop: hp('0')},
            ]}>
            Distribution Point :{' '}
          </Text>
          <Text
            style={[
              TextStyles.label,
              {marginTop: hp('0.5%'), marginLeft: wp('2'), width: wp('42%')},
            ]}>
            {item.location}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              TextStyles.leftText,
              {color: 'purple', marginTop: hp('0')},
            ]}>
            Distribution Time :{' '}
          </Text>
          <Text
            style={[
              TextStyles.label,
              {marginTop: hp('0.5%'), marginLeft: wp('2') ,width: wp('42%')},
            ]}>
            {item.dateTime.toString()}
          </Text>
        </View>
      </Neomorph>
    </View>
  );
};

export default DonationCard;
