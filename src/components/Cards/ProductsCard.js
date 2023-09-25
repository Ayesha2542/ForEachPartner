import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ImageStyles from '../../assets/Styles/ImageStyles';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductCard = ({navigation, item}) => {
  //
  const [description, setDescription] = useState('A cheesz burger is a delicious,classic fast-food ');
  
  return (
    <View style={[ContainerStyles.flexCenter]}>
      <Neomorph
        darkShadowColor={AppColors.primary}
        lightShadowColor={AppColors.darkgray}
        swapShadows // <- change zIndex of each shadow color
        style={[ContainerStyles.productCardNeomorph, {overflow: 'hidden'}]}>
        <View style={{flexDirection: 'row', width: wp('65')}}>
          <Image source={item.uri} style={[ImageStyles.orderImage]} />
          <View
            style={{
              marginTop: hp('4'),
              marginLeft: wp('2.5'),
            }}>
            <View key={item.id}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: hp(2),
                    color: AppColors.black,
                  }}>
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddFoodItems');
                  }}>
                  <FontAwesome
                    name="edit"
                    size={20}
                    color={AppColors.primary}
                    style={{marginLeft: wp('7')}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome
                    name="trash"
                    size={20}
                    color={AppColors.primary}
                    style={{marginRight: wp('1')}}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{width: wp('60')}}>
                {description.substring(0, 100)}...
              </Text>
              <Text style={[TextStyles.foodPrice]}>Rs.{item.price}</Text>
            </View>
          </View>
        </View>
      </Neomorph>
    </View>
  );
};

export default ProductCard;
