import React from 'react';
import {
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {ImageBackground} from 'react-native';

const CartCardComponent = ({item}, props) => {
  return (
    <View style={{marginBottom: 15}}>
      <TouchableOpacity>
        <ImageBackground
          source={item.uri}
          style={{
            width: wp('37'),
            height: hp('19'),
            marginTop: hp('2'),
            marginLeft: wp('4'),
          }}
          imageStyle={{borderRadius: hp('1.2%'), marginVertical: hp('2%')}}>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={{margin:hp('2'),color:AppColors.black,marginTop:hp('3')}}>{item.price}</Text>
    </View>
  );
};

export default CartCardComponent;
