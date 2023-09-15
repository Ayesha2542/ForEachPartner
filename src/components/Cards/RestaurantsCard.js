import React,{useContext} from 'react'
import {
    Text,
    SafeAreaView,
    View,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
  import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import AppContext from '../../Context/AppContext';
const RestaurantsCard = ({item,navigation,route},props) => {
  const { storeSelectedRestaurants} = useContext(AppContext);
  return (
    <SafeAreaView
    style={{flex: 1, backgroundColor: AppColors.white,}}>
    <TouchableOpacity style={{alignItems:"center"}} onPress={()=>{
      storeSelectedRestaurants('Restaurants')
    navigation.navigate('Products',{
      imageUri:item.uri,
      imageTitle:item.title,
      imageDeliveryTime:item.deliveryTime
    });
    }}>

      <ImageBackground
        source={item.uri}
        style={{height: hp('26%'), width: wp('92%')}}
        imageStyle={{borderRadius: hp('2%'), marginVertical: hp('2%')}}>
        <View style={[ContainerStyles.tabScreenTextContainer]}>
          <Text
            style={{color: AppColors.white, fontFamily: 'Poppins-SemiBold'}}>
            {' '}
            Welcome gift : free delivery
          </Text>
        </View>
        <View style={[ContainerStyles.tabScreenDeliveryTextContainer]}>
          <Text
            style={[TextStyles.simpleText]}>
            {' '}
            {item.deliveryTime}{' '}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
    <Text style={[TextStyles.leftText]}>{item.title}</Text>
    <Text style={{marginLeft:wp('4%'),fontFamily:"Poppins-Regular"}}>$ . {item.category}</Text>
    <View style={{flexDirection:"row"}}>
    <MaterialCommunityIcons
            name="bike"
            size={wp('5%')}
            style={{marginLeft:wp('4%'),color:AppColors.primary}}
          />
<Text style={{color:AppColors.primary,fontFamily:"Poppins-Regular"}}> Free dlivery</Text>
    </View>
  </SafeAreaView>
  )
}

export default RestaurantsCard