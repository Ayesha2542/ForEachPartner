import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, StatusBar, FlatList} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RestaurantsCard from '../../components/Cards/RestaurantsCard';
import TabBarStyles from '../../assets/Styles/TabBarStyles';
import MainHeader from '../../components/headers/MainHeader';
import TabScreensHeader from '../../components/headers/TabScreensHeader';
const Tab = createMaterialTopTabNavigator();

// pizza screen
const Pizza = ({navigation, title}, props) => {
  const [allPizzaCards, setAllPizzaCards] = useState([
    {
      uri: require('../../assets/Images/pizza.jpg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '45 min',
      category:"Pizza"
    },
    {
      uri: require('../../assets/Images/pizza6.jpg'),
      title: 'Organic Chef',
      deliveryTime: '25 min',
      category:"Pizza"
    },
    {
      uri: require('../../assets/Images/pizza3.jpeg'),
      title: 'Cheese It',
      deliveryTime: '30 min',
      category:"Pizza"
    },
    {
      uri: require('../../assets/Images/pizza8.webp'),
      title: "The AI Baik - Pizza's Factory",
      deliveryTime: '40 min',
      category:"Pizza"
    },
    {
      uri: require('../../assets/Images/pizza5.jpeg'),
      title: 'Chiken Cuisine',
      deliveryTime: '45 min',
      category:"Pizza"
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={allPizzaCards}
        renderItem={({item}) => {
          return <RestaurantsCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

// BurgerScreen

const Burger = ({navigation}, props) => {
  const [allBurgerCards, setAllBurgerCards] = useState([
    {
      uri: require('../../assets/Images/burger1.jpg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '45 min',
      category:"Burger"
    },
    {
      uri: require('../../assets/Images/burger2.webp'),
      title: 'Organic Chef',
      deliveryTime: '35 min',
      category:"Burger"

    },
    {
      uri: require('../../assets/Images/burger3.jpg'),
      title: 'Cheese It',
      deliveryTime: '50 min',
      category:"Burger"

    },
    {
      uri: require('../../assets/Images/burger4.jpeg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '45 min',
      category:"Burger"

    },
    {
      uri: require('../../assets/Images/burger5.jpg'),
      title: 'Chiken Cuisine',
      deliveryTime: '25 min',
      category:"Burger"

    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={allBurgerCards}
        renderItem={({item}) => {
          return <RestaurantsCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

// Shawarma screen

const Shawarma = ({navigation}, props) => {
  const [allShawarmaCards, setAlShawarmaCards] = useState([
    {
      uri: require('../../assets/Images/shawarma.jpeg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '45 min',
      category:"Shawarma"

    },
    {
      uri: require('../../assets/Images/shawarma1.jpg'),
      title: 'Organic Chef',
      deliveryTime: '35 min',
    },
    {
      uri: require('../../assets/Images/shawarma2.webp'),
      title: 'Cheese It',
      deliveryTime: '25 min',
      category:"Shawarma"

    },
    {
      uri: require('../../assets/Images/shawarma3.jpg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '45 min',
      category:"Shawarma"

    },
    {
      uri: require('../../assets/Images/shawarma4.jpg'),
      title: 'Chiken Cuisine',
      deliveryTime: '40 min',
      category:"Shawarma"

    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      {/* <StatusBar backgroundColor={AppColors.white} barStyle="dark-content" /> */}

      <FlatList
        data={allShawarmaCards}
        renderItem={({item}) => {
          return <RestaurantsCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

// Biryani screen
const Biryani = ({navigation}, props) => {
  const [allBiryaniCards, setAllBiryaniCards] = useState([
    {
      uri: require('../../assets/Images/biryani6.jpeg'),
      title: 'Biryani King - Sialkoti Gate',
      deliveryTime: '45 min',
      category:"Biryani"

    },
    {
      uri: require('../../assets/Images/biryani2.jpeg'),
      title: 'Biryani King - Nikka Chowk',
      deliveryTime: '25 min',
      category:"Biryani"
    },
    {
      uri: require('../../assets/Images/biryani3.jpeg'),
      title: 'Biryani King - Sialkoti Gate',
      deliveryTime: '40 min',
      category:"Biryani"
    },
    {
      uri: require('../../assets/Images/biryani4.jpeg'),
      title: 'Biryani King - Sialkoti Gate',
      deliveryTime: '35 min',
      category:"Biryani"
    },
    {
      uri: require('../../assets/Images/biryani5.jpeg'),
      title: 'Biryani King - Sialkoti Gate',
      deliveryTime: '25 min',
      category:"Biryani"
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={allBiryaniCards}
        renderItem={({item}) => {
          return <RestaurantsCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

// Chinese screen
const Chinese = ({navigation}, props) => {
  const [allChineseCards, setAllChineseCards] = useState([
    {
      uri: require('../../assets/Images/chinese.jpeg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '35 min',
      category:"Chinese"
    },
    {
      uri: require('../../assets/Images/chinese2.jpeg'),
      title: 'Organic Chef',
      deliveryTime: '45 min',
      category:"Chinese"

    },
    {
      uri: require('../../assets/Images/chinese5.jpg'),
      title: 'Cheese It',
      deliveryTime: '25 min',
      category:"Chinese"

    },
    {
      uri: require('../../assets/Images/chinese3.jpeg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '30 min',
      category:"Chinese"

    },
    {
      uri: require('../../assets/Images/chinese4.jpeg'),
      title: 'Chiken Cuisine',
      deliveryTime: '40 min',
      category:"Chinese"

    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={allChineseCards}
        renderItem={({item}) => {
          return <RestaurantsCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};
// Pasta screen
const Pasta = ({navigation}, props) => {
  const [allPastaCards, setAllPastaCards] = useState([
    {
      uri: require('../../assets/Images/pasta.jpg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '45 min',
      category:"Pasta"

    },
    {
      uri: require('../../assets/Images/pasta1.jpg'),
      title: 'Organic Chef',
      deliveryTime: '55 min',
      category:"Pasta"

    },
    {
      uri: require('../../assets/Images/pasta4.jpeg'),
      title: 'Cheese It',
      deliveryTime: '35 min',
      category:"Pasta"

    },
    {
      uri: require('../../assets/Images/pasta3.jpeg'),
      title: "Mama's Cooking Hub",
      deliveryTime: '40 min',
      category:'Pasta'
    },
    {
      uri: require('../../assets/Images/pasta2.jpg'),
      title: 'Chiken Cuisine',
      deliveryTime: '45 min',
      category:'Pasta'

    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <FlatList
        data={allPastaCards}
        renderItem={({item}) => {
          return <RestaurantsCard navigation={navigation} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const FurtherScreens = ({navigation, route}) => {
  const {categoryName} = route.params;

  useEffect(() => {
    console.log(categoryName);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <TabScreensHeader title={categoryName} navigation={navigation} />
      {/* <MainHeader  item={categoryName} navigation={navigation} /> */}
      <Tab.Navigator
        initialRouteName={categoryName} // Set the initial route based on categoryName
        screenOptions={TabBarStyles.customTabBar}>
        <Tab.Screen name="Pizza" component={Pizza} />
        <Tab.Screen name="Burger" component={Burger} />
        <Tab.Screen name="Shawarma" component={Shawarma} />
        <Tab.Screen name="Biryani" component={Biryani} />
        <Tab.Screen name="Pasta" component={Pasta} />
        <Tab.Screen name="Chinese" component={Chinese} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default FurtherScreens;
