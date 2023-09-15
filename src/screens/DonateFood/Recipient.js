import React, { useContext } from 'react'
import { FlatList, ImageBackground, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native'
import AppColors from '../../assets/colors/AppColors';
import ProductsBackButton from '../../components/headers/ProductsBackButton';
import TextStyles from '../../assets/Styles/TextStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppContext from '../../Context/AppContext';
import DonationCard from '../../components/Cards/DonationCard';
const Recipient = ({route,navigation}) => {
  const{imageUri}= route.params
  const {donatedData} = useContext(AppContext);
  return (
   <SafeAreaView style={{flex:1,backgroundColor:AppColors.white}}>
    <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground
        source={imageUri}
        style={{height: hp('28%'), width: wp('100%')}}>
        <View
          style={{
            height: hp('28%'),
            width: wp('100%'),
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ProductsBackButton navigation={navigation} />
          <Text style={[TextStyles.whiteCenteredLable, {fontSize: hp('4%')}]}>
            Welcome
          </Text>
        </View>
      </ImageBackground>
      <Text
        style={[
          TextStyles.leftMediumText,
          {fontSize: hp('4%'), color: AppColors.primary, marginLeft: wp('10%')},
        ]}>
        Recipient
      </Text>
      <Text style={[TextStyles.whiteCenteredLable,{color:"black"}]}>Donated Food Details</Text>
      <FlatList
        data={donatedData}
        renderItem={({item}) => {
          return <DonationCard navigation={navigation} item={item} />
        }}
      /> 
{/* <Text>{name} </Text> */}
   </SafeAreaView>
  )
}

export default Recipient