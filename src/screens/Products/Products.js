import React, {useContext, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import ProductsBackButton from '../../components/headers/ProductsBackButton';
import TextStyles from '../../assets/Styles/TextStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconStyles from '../../assets/Styles/IconStyles';
import TabBarStyles from '../../assets/Styles/TabBarStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import PopularFoodCard from '../../components/Cards/PopularFoodCard';
import {Image} from 'react-native-elements';
import ImageStyles from '../../assets/Styles/ImageStyles';
import DealCard from '../../components/Cards/DealCard';
import AppContext from '../../Context/AppContext';

const Popular = ({navigation}) => {
  const [allPopularCards, setAllPopularCards] = useState([
    {
      uri: require('../../assets/Images/exclusiveDeal2.jpg'),
      title: 'Exclusive Deal 2',
      price: '350.00',
    },
    {
      uri: require('../../assets/Images/burger2.webp'),
      title: 'Chicken Zinger Burger',
      price: '350.00',
    },
    {
      uri: require('../../assets/Images/shawarma4.jpg'),
      title: 'Chicken Zinger Paratha Roll',
      price: '260.00',
    },
    {
      uri: require('../../assets/Images/exclusiveDeal.jpg'),
      title: 'Exclusive Deal 1',
      price: '410.00',
    },
    {
      uri: require('../../assets/Images/plainFries2.jpeg'),
      title: 'Plain Fries',
      price: '180.00',
    },
    {
      uri: require('../../assets/Images/masalaFries.jpg'),
      title: 'Masala Fries',
      price: '180.00',
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      {/* <ScrollView> */}
      {/* <View style={{flexDirection: 'row', marginTop: hp('1%')}}> */}

      {/* <ScrollView> */}
      <View style={{flexDirection: 'row'}}>
        <MaterialCommunityIcons
          name="fire"
          size={wp('8%')}
          style={IconStyles.fireIcon}
        />
        <Text style={[TextStyles.leftMediumText]}>Popular</Text>
      </View>
      <Text style={[TextStyles.leftSmallText]}>Most ordered right now. </Text>
      <FlatList
        numColumns={2}
        data={allPopularCards}
        // scrollEnabled={false} // Disable the scroll behavior
        renderItem={({item}) => {
          return <PopularFoodCard navigation={navigation} item={item} />;
        }}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
// Strong pepsi deals
const StrongPepsiDeals = ({navigation}) => {
  const [allPepsiDealCards, setAllPepsiDealCards] = useState([
    {
      uri: require('../../assets/Images/exclusiveDeal.jpg'),
      title: 'Pepsi Deal 1',
      description: 'Chicken Patty Burger + 345ml Pepsi',
      price: '850.00',
    },
    {
      uri: require('../../assets/Images/exclusiveDeal2.jpg'),
      title: 'Pepsi Deal',
      description: 'Noddles+ Regular Fries + 345ml Pepsi',
      price: '900.00',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <View style={[ContainerStyles.productsContainerSeparator]}></View>
      <View style={{flexDirection: 'row'}}>
        <Text style={[TextStyles.cartTextStyle, {marginLeft: wp('4%')}]}>
          Strong Pepsi Deals
        </Text>
        {/* mai ne iss ko imort b saii kiya hai name b saii diya hai phr b invalid name prop ka error de rha` */}
        {/* <Ionicons
          name="sparkles" 
          size={wp('6%')}                            
          style={IconStyles.productsIcon}
        /> */}
      </View>
      <FlatList
        data={allPepsiDealCards}
        // scrollEnabled={false} // Disable the scroll behavior
        renderItem={({item}) => {
          return <DealCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const SummerDeals = ({navigation}) => {
  const [allSummerDealCards, setAllSummerDealCards] = useState([
    {
      uri: require('../../assets/Images/paratha.jpeg'),
      title: 'Summer Deal 7',
      description: '2 parathay, 1 omelette, 1 sweet egg',
      price: '780.00',
    },
    {
      uri: require('../../assets/Images/paratha2.jpeg'),
      title: 'Summer Deal 6',
      description: '2 parathay , 1 omelette,2 Shami kabab',
      price: '890.00',
    },
    {
      uri: require('../../assets/Images/paratha3.webp'),
      title: 'Summer Deal 8',
      description: '2 parathay, 1 omelette, 1 sweet egg',
      price: '1030.00',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <View style={[ContainerStyles.productsContainerSeparator]}></View>
      <View style={{flexDirection: 'row'}}>
        <Text style={[TextStyles.cartTextStyle, {marginLeft: wp('4%')}]}>
          Summer Deals
        </Text>
        <MaterialCommunityIcons
          name="fire"
          size={wp('8%')}
          style={IconStyles.fireIcon2}
        />
      </View>
      <Text style={[TextStyles.dealPriceText, {maxWidth: wp('90%')}]}>
        Amazing Dishes Use Voucher HC75 for 75 Rupees Discount
      </Text>

      <FlatList
        data={allSummerDealCards}
        // scrollEnabled={false} // Disable the scroll behavior
        renderItem={({item}) => {
          return <DealCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const BreakfastDeals = ({navigation}) => {
  const [allBreakfastDealCards, setAllBreakfastDealCards] = useState([
    {
      uri: require('../../assets/Images/paratha.jpeg'),
      title: 'Breakfat Deal 1',
      description: '2 parathay, 1 omelette, 1 sweet egg',
      price: '530.00',
    },
    {
      uri: require('../../assets/Images/paratha2.jpeg'),
      title: 'Breakfast Deal 2',
      description: '2 parathay , 1 omelette,2 Shami kabab',
      price: '690.00',
    },
    {
      uri: require('../../assets/Images/paratha3.webp'),
      title: 'Breakfast deal 3',
      description: '2 parathay, 1 omelette, 1 sweet egg',
      price: '780.00',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <View style={[ContainerStyles.productsContainerSeparator]}></View>
      <View style={{flexDirection: 'row'}}>
        <Text style={[TextStyles.cartTextStyle, {marginLeft: wp('4%')}]}>
          Breakfast Deals
        </Text>
      </View>
      <Text style={[TextStyles.dealPriceText, {maxWidth: wp('90%')}]}>
        Amazing Dishes Use Voucher HC75 for 75 Rupees Discount
      </Text>

      <FlatList
        data={allBreakfastDealCards}
        // scrollEnabled={false} // Disable the scroll behavior
        renderItem={({item}) => {
          return <DealCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};
const Products = ({navigation, route}, props) => {
  const {
    selectedSubCategoryFeature,
    selectedFoodFeature,
    selectedRestaurants,
    storeInSchedule,
  } = useContext(AppContext);
  if (
    selectedFoodFeature === 'Full Price Food' &&
    selectedSubCategoryFeature === 'SubCategory' &&
    selectedRestaurants == 'Restaurants'
  ) {
    navigateToScreen = 'Cart';
    DesiredText = 'View Your Cart'; // Navigate to CartScreen
  } else if (
    selectedFoodFeature === 'ShareFood' &&
    selectedSubCategoryFeature === 'SubCategory' &&
    selectedRestaurants == 'Restaurants'
  ) {
    navigateToScreen = 'ScheduleScreen';
    DesiredText = 'View Your Schedule'; // Navigate to ScheduleScreen
  }
  const {imageUri, imageTitle, imageDeliveryTime} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground
          source={imageUri}
          style={{height: hp('20%'), width: wp('100%')}}>
          <ProductsBackButton navigation={navigation} />
        </ImageBackground>
        <Text style={[TextStyles.leftText]}>{imageTitle}</Text>
        <View style={{flexDirection: 'row'}}>
          <MaterialIcons
            name="access-time"
            size={wp('6%')}
            style={IconStyles.productsIcon}
          />
          <Text style={[TextStyles.productsLeftText]}>
            Delivery : {imageDeliveryTime}{' '}
          </Text>
        </View>
        <Popular navigation={navigation} />
        <StrongPepsiDeals navigation={navigation} />
        <SummerDeals navigation={navigation} />
        <BreakfastDeals navigation={navigation} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(navigateToScreen);
        }}>
        <Neomorph
          // darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          // inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={[ContainerStyles.touchableOpacityNeomorphContainer2]}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[TextStyles.whiteCenteredLable2]}>{DesiredText}</Text>
          </View>
        </Neomorph>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Products;
