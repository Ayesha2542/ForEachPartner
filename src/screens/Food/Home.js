import React,{useContext} from 'react'
import DrawerHeader from '../../components/headers/DrawerHeader'
import { Neomorph } from 'react-native-neomorph-shadows';
import { Image, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import AppContext from '../../Context/AppContext';
import RestaurantSmallCard from '../../components/Cards/RestaurantSmallCard';

const Home = ({ navigation }) => {
  const {storeSelectedFoodFeature} = useContext(AppContext);
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
        <DrawerHeader navigation={navigation} />
        <RestaurantSmallCard/>


      </SafeAreaView>
   
  );
};

export default Home;
