import React from 'react'
import { SafeAreaView,View ,Image,Text} from 'react-native'
import BackButtonHeader from '../../components/headers/BackButtonHeader'
import CartHeader from '../../components/headers/CartHeader'
import TabScreensHeader from '../../components/headers/TabScreensHeader'
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors'
import ContainerStyles from '../../assets/Styles/ContainerStyles'
import {Neomorph} from 'react-native-neomorph-shadows';
import ImageStyles from '../../assets/Styles/ImageStyles'
import TextStyles from '../../assets/Styles/TextStyles'
const OngoingOrder = () => {
  return (
 <SafeAreaView style={{backgroundColor:"white",flex:1}}>
<ProfileHeader item="Onging Order" />
<View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Neomorph
        darkShadowColor={AppColors.primary}
        lightShadowColor={AppColors.darkgray}
        swapShadows // <- change zIndex of each shadow color
        style={ContainerStyles.recipientNeomorphContainer}>
          <View style={{height:hp('8%'),width:wp('90'),justifyContent:"center",borderTopEndRadius:wp('3%'),borderTopStartRadius:wp('3'),borderBottomWidth:hp('0.2'),borderColor:AppColors.background2}}>
          <View style={{flexDirection:"row"}}>
          <Image
          source={require('../../assets/Images/toqeer.jpeg')} // Specify the source of the image
          style={{height:hp('6%'),width:wp('12%'),borderRadius:wp('12%'),marginLeft:wp('2')}} // Set the desired width and height of the image
        />
        <Text style={[TextStyles.label,{marginLeft:wp('3%')}]}>Customer_name</Text>
     
<Text style={{fontFamily:"Poppins-Regular",marginLeft:wp('23%'),fontSize: wp('3%'),}}>Order id: 348</Text>

        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={[{fontFamily:"Poppins-Regular",marginLeft:wp('17%'),marginTop:hp('-3'),fontSize: wp('3%'),}]}>Today at 12:35 AM</Text>
        <Text style={[{fontFamily:"Poppins-Regular",marginLeft:wp('19%'),marginTop:hp('-3'),fontSize: wp('3%'),}]}>Total: Rs.350.00</Text>

        </View>
          </View>
          <View style={{flexDirection:"row"}}>
     <Text style={[TextStyles.label,{marginLeft:wp('3'),marginTop:hp('1'),marginBottom:hp('0')}]}>Burger</Text>
     <Text style={[TextStyles.label,{paddingLeft:wp('25'),marginTop:hp('1'),marginBottom:hp('0')}]}>Qty:1</Text>
     <Text style={[TextStyles.label,{paddingLeft:wp('25'),marginTop:hp('1'),marginBottom:hp('0')}]}>Rs. 150</Text>
     </View>
     <View style={{flexDirection:"row"}}>
     <Text style={[TextStyles.label,{marginLeft:wp('3'),marginBottom:hp('0')}]}>Shawarma</Text>
     <Text style={[TextStyles.label,{paddingLeft:wp('19'),marginBottom:hp('0')}]}>Qty:1</Text>
     <Text style={[TextStyles.label,{paddingLeft:wp('24'),marginBottom:hp('0')}]}>Rs. 150</Text>
     </View>
     <View style={{flexDirection:"row"}}>
     <Text style={[TextStyles.label,{marginLeft:wp('3'),}]}>Pizza</Text>
     <Text style={[TextStyles.label,{paddingLeft:wp('28')}]}>Qty:1</Text>
     <Text style={[TextStyles.label,{paddingLeft:wp('25')}]}>Rs. 550</Text>
     </View>
      </Neomorph>
    </View>
 </SafeAreaView>
  )
}

export default OngoingOrder