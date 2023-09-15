import React from 'react';
import { View, TouchableOpacity, Text,StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import AppColors from '../../assets/colors/AppColors';
import TextStyles from '../../assets/Styles/TextStyles';
import Profile from '../../screens/Profile/Profile';

const ProfileHeader = ({ item, navigation }) => {
  return (
    <View style={{
      backgroundColor: AppColors.white,
      height: hp('8'), 
      width: wp('100'), 
      flexDirection: "row", 
      borderBottomWidth: wp('0.4'),
      borderColor: AppColors.background2,
      marginTop:hp('3.5')
    }}>
      <StatusBar
      barStyle="dark-content"
      backgroundColor="white"
    />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack('Profile');
        }}>
        <AntDesign name="arrowleft" size={wp('6%')} style={{ color: AppColors.primary, marginTop: hp('2.4%'), marginLeft: wp(5) }} />

      </TouchableOpacity>

      <Text style={[TextStyles.profileTextStyle]}>{item}</Text>
    </View>
 
  );
};
export default ProfileHeader;

