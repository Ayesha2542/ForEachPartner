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

const Home = ({ navigation }) => {
  const {storeSelectedFoodFeature} = useContext(AppContext);
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
        <DrawerHeader navigation={navigation} />
        <View style={ContainerStyles.itemsCenter}>
          <View style={{
            flexDirection: "row",
            marginTop: hp('4%'),
            alignItems: "center"
          }}>
            <TouchableOpacity onPress={() => {
              storeSelectedFoodFeature('Full Price Food')
              navigation.navigate('FullPriceHomeScreen'
              )

            }}>
              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.darkOrange}
                inner // <- enable shadow inside of neomorph
                swapShadows // <- change zIndex of each shadow color
                style={ContainerStyles.largeNeomorphStyle}>

                <Text style={[TextStyles.primaryText]}>Full Price Food </Text>
                <Text style={[TextStyles.smallText,{marginLeft:wp('3')}]}>Order food from your favourite resturants</Text>
                <Image source={require('../../assets/Images/image5.png')} style={{ height: hp(10), width: hp(18), marginTop: hp('14'), marginLeft: wp('4') }} />
              </Neomorph>
            </TouchableOpacity>

            <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <TouchableOpacity onPress={() => {
                 storeSelectedFoodFeature('ShareFood')
              navigation.navigate('FoodShareScreen'
              )

            }}>
                <Neomorph
                  darkShadowColor={AppColors.primary}
                  lightShadowColor={AppColors.darkOrange}
                  inner // <- enable shadow inside of neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={ContainerStyles.smallNeomorphStyle}

                >

                  <Text style={[TextStyles.primaryText]}>Share Food</Text>
                  <Text style={[TextStyles.smallText,{marginLeft:wp('2.5')}]}>Share with your friend</Text>
                  <Image source={require('../../assets/Images/image8.png')} style={{ height: hp(3), width: hp(17), marginLeft:wp('4'),marginTop:hp('1') }} />
                </Neomorph>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{
                navigation.navigate('DonateHome');
              }}>
                <Neomorph
                  darkShadowColor={AppColors.primary}
                  lightShadowColor={AppColors.darkOrange}
                  inner // <- enable shadow inside of neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={[ContainerStyles.smallNeomorphStyle, { marginTop: 10 }]}

                >

                  <Text style={[TextStyles.primaryText]}>Free Food</Text>
                  <Image source={require('../../assets/Images/image9.png')} style={{ height: hp(10), width: hp(18), marginTop: 10, marginLeft: 15 }} />
                </Neomorph>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image source={require('../../assets/Images/image10.png')} style={[ImageStyles.rightCornerImage]} />
      </SafeAreaView>
   
  );
};

export default Home;
