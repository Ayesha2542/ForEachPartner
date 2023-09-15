import React from 'react';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TextStyles from '../../assets/Styles/TextStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import IconStyles from '../../assets/Styles/IconStyles';

const TabScreensHeader = ({navigation, title}) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.white,
        height: hp('8%'),
        width: wp('100%'),
        justifyContent: 'center',
        marginTop: hp('3'),
      }}>
      {/* <View style={{marginTop:hp('4')}}> */}
      <StatusBar
        backgroundColor={AppColors.white} // Background color of the status bar
        barStyle="dark-content" // Light text color for dark backgrounds
      />
      {/* </View> */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <AntDesign
          name="arrowleft"
          size={wp('6%')}
          style={{
            color: AppColors.primary,
            marginTop: hp('1%'),
            marginLeft: wp('6%'),
          }}
        />
      </TouchableOpacity>
      <Text style={[TextStyles.backButtonTitle]}>{title}</Text>
    </View>
  );
};

export default TabScreensHeader;
