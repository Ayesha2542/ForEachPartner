
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import AdvertiseCard from '../../components/Cards/AdvertiseCard';
import TextStyles from '../../assets/Styles/TextStyles';
import SmallCard from '../../components/Cards/SmallCard';
import LargeCard from '../../components/Cards/LargeCard';
import MainHeader from '../../components/headers/MainHeader';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchComponent from '../../components/SearchComponent';
import AppColors from '../../assets/colors/AppColors';
const FullPriceHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: AppColors.white,flex:1 }}>
      <MainHeader navigation={navigation} item="Full Price Food" />
      <ScrollView>
        <SearchComponent />
        <AdvertiseCard navigation={navigation} />
        <Text style={[TextStyles.primaryText, { textAlign: "left", marginLeft: wp('3') }]}>Food For You</Text>
        <SmallCard  navigation={navigation}/>
        <Text style={[TextStyles.primaryText, { textAlign: "left", marginLeft: wp('3') }]}>All Restaurants</Text>
          <LargeCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}


export default FullPriceHomeScreen;
