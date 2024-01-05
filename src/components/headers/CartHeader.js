import React, { useContext } from 'react';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AppColors from '../../assets/colors/AppColors';
import TextStyles from '../../assets/Styles/TextStyles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AppContext from '../../Context/AppContext';

const CartHeader = ({item, navigation}) => {
  const {currentUser,baseUrl}=useContext(AppContext)
  console.log("898989898989",currentUser)
  return (
    <View
      style={{
        height: hp('9'),
        borderBottomWidth: wp('0.4'),
        borderColor: AppColors.background2,
        flexDirection: 'row',
        marginTop: hp('3.5'),
        justifyContent:"space-between"
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <AntDesign
          name="close"
          size={wp('6')}
          style={{
            color: AppColors.primary,
            marginTop: hp('3%'),
            marginLeft:wp('4')
           
          }}
        />
      </TouchableOpacity>
      <Text style={[TextStyles.cartTextStyle]}>{item}</Text>
     
    </View>
  );
};
export default CartHeader;
