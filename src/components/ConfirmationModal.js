import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import {Neomorph} from 'react-native-neomorph-shadows';
import TextStyles from '../assets/Styles/TextStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import AppColors from '../assets/colors/AppColors';
import LottieView from 'lottie-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconStyles from '../assets/Styles/IconStyles';


const ConfirmationModal = ({navigation}) => {
   
  return (
    <View style={[ContainerStyles.flexCenter,{backgroundColor: 'rgba(0, 0, 0, 0.5)',}]}>
      <View style={[TextStyles.modalContent,{justifyContent:"center",alignItems:"center"}]}>
      <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.darkgray}
            swapShadows // <- change zIndex of each shadow color
            style={{
            shadowRadius: 2,
            backgroundColor: AppColors.white,
            borderRadius: wp('1%'),
            height: hp('4%'),
            width: wp('8%'),
            shadowOpacity: 0.3,
            marginLeft: wp('65'),
            justifyContent:"center",
            alignItems:"center"
          
        }}
            >
            <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="close" size={wp('4%')} style={{color:AppColors.primary}} />
      </TouchableOpacity>
          </Neomorph>
      
        
        <LottieView
          source={require('../assets/animations/Done.json')}
          autoPlay
          loop
          style={{width: 200, height: 200,color:"red"}}
          speed={1}
        />
    <Text style={[TextStyles.leftSmallText]}>
          Product is Successfully Added
        </Text>
        <TouchableOpacity onPress={()=>{
              navigation.navigate('Products')
        }}> 
          <Neomorph
            darkShadowColor={AppColors.white}
            lightShadowColor={AppColors.white}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.smallConfirmButtonNeomorph,{marginLeft:0}]}>
            <Text
              style={[TextStyles.smallButtonText]}>
              View Product
            </Text>
            
          </Neomorph>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ConfirmationModal;
