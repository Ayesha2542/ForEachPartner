import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import ProductCard from '../../components/Cards/ProductsCard';

const Products = ({navigation}) => {
  const [myProducts, setMyProducts] = useState([
    {
      id: '1',
      name: 'Student Burger',
      price: 200,
      uri: require('../../assets/Images/image17.png'),
    },
    {
      id: '2',
      name: 'Zinger Burger',
      price: 370,
      uri: require('../../assets/Images/burger1.jpg'),
    },
    
  ]);
  return (
    <SafeAreaView style={{flex:1,backgroundColor: AppColors.white,}}>
      <ProfileHeader navigation={navigation} item="Products" />

      <FlatList
        data={myProducts}
        renderItem={({item}) => {
          return (
            <ProductCard navigation={navigation} item={item} />
          );
        }}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddFoodItems');
          }}>
          <Neomorph
            darkShadowColor={AppColors.white}
            lightShadowColor={AppColors.white}
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.touchableOpacityNeomorphContainer,
              {width: wp('70%')},
            ]}>
            <Text style={TextStyles.whiteCenteredLable}>Add Product</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Products;
