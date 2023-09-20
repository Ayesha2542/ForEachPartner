import React, { useContext } from 'react';
import DrawerHeader from '../components/headers/DrawerHeader';
import { Neomorph } from 'react-native-neomorph-shadows';
import { Image, Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList, ImageBackground,StatusBar } from 'react-native';
import AppColors from '../assets/colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProfileHeader from '../components/headers/ProfileHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconStyles from '../assets/Styles/IconStyles';
const Setting = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
    <ProfileHeader navigation={navigation} item="Setting" /> 

      <StatusBar
                barStyle="dark-content"
                backgroundColor={AppColors.white}
                translucent={true}
            />
     <ScrollView>
<TouchableOpacity>
     <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
                height:hp('9'),
                justifyContent:"center",
                
              }}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginRight:wp('4')}}>
 <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp(2.3),color:AppColors.black,marginLeft:wp('6')}}>Change Password</Text>
 <AntDesign
            name="right"
            size={20}
            color={AppColors.primary}
            style={{marginTop:hp('0.5')}}
          />
</View>
</View>
</TouchableOpacity>

<TouchableOpacity>
     <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
                height:hp('8'),
                justifyContent:"center",
                
              }}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginRight:wp('4')}}>
 <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp(2.3),color:AppColors.black,marginLeft:wp('6')}}>Receive Notification</Text>
 <AntDesign
            name="right"
            size={20}
            color={AppColors.primary}
            style={{marginTop:hp('0.5')}}
          />
</View>
</View>
</TouchableOpacity>

<TouchableOpacity>
     <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
                height:hp('8'),
                justifyContent:"center",
                
              }}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginRight:wp('4')}}>
 <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp(2.3),color:AppColors.black,marginLeft:wp('6')}}>Privacy Policy</Text>
 <AntDesign
            name="right"
            size={20}
            color={AppColors.primary}
            style={{marginTop:hp('0.5')}}
          />
</View>
</View>
</TouchableOpacity>

<TouchableOpacity>
     <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
                height:hp('8'),
                justifyContent:"center",
                
              }}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginRight:wp('4')}}>
 <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp(2.3),color:AppColors.black,marginLeft:wp('6')}}>Terms of Use</Text>
 <AntDesign
            name="right"
            size={20}
            color={AppColors.primary}
            style={{marginLeft:wp('40'),marginTop:hp('0.5')}}
          />
</View>
</View>
</TouchableOpacity>

<TouchableOpacity>
     <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
                height:hp('8'),
                justifyContent:"center",
                
              }}>
<View style={{flexDirection:"row",justifyContent:"space-between",marginRight:wp('4')}}>
 <Text style={{fontFamily:"Poppins-SemiBold",fontSize:hp(2.3),color:AppColors.black,marginLeft:wp('6')}}>Logout</Text>
 <AntDesign
            name="right"
            size={20}
            color={AppColors.primary}
            style={{marginLeft:wp('40'),marginTop:hp('0.5')}}
          />
</View>
</View>
</TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;
