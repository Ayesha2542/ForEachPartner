import React, {useContext, useState,useEffect} from 'react';
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
import AppContext from '../../Context/AppContext';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
const Products = ({navigation}) => {
  const { storeSelectedSubCategoryFeature,baseUrl } = useContext(AppContext);
  const [allProducts, setAllProducts] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      const fetchProducts = async () => {
            try {
              const response = await axios.post(`${baseUrl}/viewAllProducts`);
              setAllProducts(response.data);
            } catch (error) {
              console.error('Error fetching categories:', error);
            }
          };
          fetchProducts();
    }, []))
   
  
  // useEffect(() => {
  //   // Function to fetch categories from the backend
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.post(`${baseUrl}/viewAllProducts`);
  //       setAllProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor: AppColors.white,}}>
      <ProfileHeader navigation={navigation} item="Products" />

      <FlatList
        data={allProducts}
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
