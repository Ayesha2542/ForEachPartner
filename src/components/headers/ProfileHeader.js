import React from 'react';
import { View, TouchableOpacity, Text,StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppColors from '../../assets/colors/AppColors';
import TextStyles from '../../assets/Styles/TextStyles';
import Profile from '../../screens/Profile/Profile';
import IconStyles from '../../assets/Styles/IconStyles';

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
              navigation.toggleDrawer();
            }}>
            <Ionicons
              name="menu-outline"
              size={wp('9')}
              style={[IconStyles.drawerManuIcon2,{color:AppColors.black}]}
            />
          </TouchableOpacity>

      <Text style={[TextStyles.profileTextStyle]}>{item}</Text>
    </View>
 
  );
};
export default ProfileHeader;

