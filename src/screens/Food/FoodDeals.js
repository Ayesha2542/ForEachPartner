import React, { useContext, useState, useEffect } from 'react';
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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Neomorph } from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
// import ProductCard from '../../components/Cards/ProductsCard';
import AppContext from '../../Context/AppContext';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import TabScreensHeader from '../../components/headers/TabScreensHeader';

const FoodDeals = ({ navigation, route, item }) => {
  const { baseUrl, categoryName, currentUser } = useContext(AppContext);
  const [allProducts, setAllProducts] = useState([]);
  const [hasProducts, setHasProducts] = useState(true);
  const [loading, setLoading] = useState(true);

  const viewAllFoodDeal = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/viewAllFoodDeals/${currentUser.userId}`,
      );

      setAllProducts(response.data);
      setHasProducts(response.data.length > 0);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      viewAllFoodDeal();
    }, [currentUser.userId]),
  );

  const deleteFoodDeal = async delId => {
    try {
      const response = await axios.delete(`${baseUrl}/deleteFoodDeal/${delId}`);
      console.log('Delete Product Response:', response.data);

      if (response.data.success) {
        viewAllFoodDeal();
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const truncateText = (text, maxLength) => {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength) + '...';
  //   }
  //   return text;
  // };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <TabScreensHeader navigation={navigation} item="Special Meals" />
      {loading ? (
        <View style={[ContainerStyles.flexCenter, { padding: 20 }]}>
          <LottieView
            source={require('../../assets/animations/Loading.json')}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
          <Text>Loading Food Deal...</Text>
        </View>
      ) : hasProducts ? (
        <FlatList
          data={allProducts}
          renderItem={({ item }) => {
            return (
              <View style={[ContainerStyles.flexCenter]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SingleFoodDealDetail', {
                      foodDealImage: baseUrl + item.foodDealImage,
                      foodDealTitle: item.foodDealTitle,
                      foodDealPrice: item.foodDealPrice,
                      foodDealDescription: item.foodDealDescription,
                    });
                  }}>
                  <Neomorph
                    darkShadowColor={AppColors.primary}
                    lightShadowColor={AppColors.darkgray}
                    swapShadows // <- change zIndex of each shadow color
                    style={[
                      ContainerStyles.productCardNeomorph,
                      { overflow: 'hidden' },
                    ]}>
                    <View style={{ flexDirection: 'row', width: wp('65') }}>

                      <Image
                        source={{ uri: baseUrl + item.foodDealImage }}
                        style={[ImageStyles.orderImage]}
                        onError={(error) =>
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
                            <View style={{ width: wp('35') }}>
                              <Text
                                style={{
                                  fontFamily: 'Poppins-SemiBold',
                                  fontSize: hp(2),
                                  color: AppColors.black,
                                }}>
                                {truncateText(item.foodDealTitle, 15)}...
                              </Text>
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate('AddFoodDeals', {
                                  foodDeal_Id: item._id,
                                  foodDealTitle: item.foodDealTitle,
                                  foodDealDescription: item.foodDealDescription,
                                  foodDealPrice: item.foodDealPrice,
                                  // foodDealDiscount:item.foodDealDiscount,
                                  foodDealImage: baseUrl + item.foodDealImage,
                                });
                              }}>
                              <FontAwesome
                                name="edit"
                                size={20}
                                color={AppColors.primary}
                                style={{ marginLeft: wp('5') }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                deleteFoodDeal(item._id);
                              }}>
                              <FontAwesome
                                name="trash"
                                size={20}
                                color={AppColors.primary}
                                style={{ marginRight: wp('1') }}
                              />
                            </TouchableOpacity>
                          </View>
                          <Text style={{ width: wp('60') }}>
                            {truncateText(item.foodDealDescription, 30)}...
                          </Text>
                          <Text style={[TextStyles.foodPrice]}>
                            Rs.{item.foodDealPrice}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Neomorph>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <View style={[ContainerStyles.flexCenter, { padding: 20 }]}>
          <LottieView
            source={require('../../assets/animations/productEmpty.json')}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
          <Text>No Food Deal added</Text>
        </View>
      )}
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddFoodDeals');
          }}>
          <Neomorph
            darkShadowColor={AppColors.white}
            lightShadowColor={AppColors.white}
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.touchableOpacityNeomorphContainer,
              { width: wp('70%') },
            ]}>
            <Text style={TextStyles.whiteCenteredLable}>Add Food Deal</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default FoodDeals;