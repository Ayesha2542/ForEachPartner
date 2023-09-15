import React from 'react';
import {View, TouchableOpacity, Text,StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import TextStyles from '../../assets/Styles/TextStyles';
import IconStyles from '../../assets/Styles/IconStyles';
const BackButtonHeader = ({navigation,title}) => {
  return (
    <View style={{backgroundColor:AppColors.white,height:hp('8%'),width:wp('100%'),justifyContent:"center",marginTop:wp('3.5')}}>
      <StatusBar
      barStyle="dark-content"
      backgroundColor="white"
      translucent={true}
  />
<TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={wp('6%')} style={[IconStyles.arrowLeftIcon]} />
      </TouchableOpacity>
      <Text style={[TextStyles.backButtonTitle]}>{title}</Text>
    </View>
  );
};

export default BackButtonHeader;