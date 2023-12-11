import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ImageStyles from '../../assets/Styles/ImageStyles';
import AppColors from '../../assets/colors/AppColors';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
// import ProductCard from '../../components/Cards/ProductsCard';
import AppContext from '../../Context/AppContext';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
const Products = ({navigation, route}) => {
  const {baseUrl, categoryName, currentUser} = useContext(AppContext);
  const [allProducts, setAllProducts] = useState([]);

  const viewAllProducts = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/viewAllProducts/${currentUser.userId}/${categoryName.categoryName}`,
      );

      setAllProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      viewAllProducts();
    }, [currentUser.userId, categoryName.categoryName]),
  );

  const deleteProduct = async delId => {
    try {
      const response = await axios.delete(`${baseUrl}/deleteProduct/${delId}`);
      console.log('Delete Product Response:', response.data);

      if (response.data.success) {
        viewAllProducts();
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <ProfileHeader navigation={navigation} item="Products" />
      {allProducts.length === 0 ? (
        <Text>No products available for the selected category</Text>
      ) : (
        <FlatList
          data={allProducts}
          renderItem={({item}) => {
            return (
              <View style={[ContainerStyles.flexCenter]}>
                <Neomorph
                  darkShadowColor={AppColors.primary}
                  lightShadowColor={AppColors.darkgray}
                  swapShadows // <- change zIndex of each shadow color
                  style={[
                    ContainerStyles.productCardNeomorph,
                    {overflow: 'hidden'},
                  ]}>
                  <View style={{flexDirection: 'row', width: wp('65')}}>
                    <Image
                      source={{uri: baseUrl + item.productImage}}
                      style={[ImageStyles.orderImage]}
                      onError={error =>
                        console.error('Image loading error:', error)
                      }
                    />
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
                            {item.productName}
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('AddFoodItems', {
                                productId: item._id,
                                productName: item.productName,
                                productDescription: item.productDescription,
                                productPrice: item.productPrice,
                                productImage: baseUrl + item.productImage,
                              });
                            }}>
                            <FontAwesome
                              name="edit"
                              size={20}
                              color={AppColors.primary}
                              style={{marginLeft: wp('7')}}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              deleteProduct(item._id);
                            }}>
                            <FontAwesome
                              name="trash"
                              size={20}
                              color={AppColors.primary}
                              style={{marginRight: wp('1')}}
                            />
                          </TouchableOpacity>
                        </View>
                        <Text style={{width: wp('60')}}>
                          {item.productDescription}...
                        </Text>
                        <Text style={[TextStyles.foodPrice]}>
                          Rs.{item.productPrice}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Neomorph>
              </View>
            );
          }}
        />
      )}
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
