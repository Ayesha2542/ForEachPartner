import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import AppColors from '../../assets/colors/AppColors';
import ProductsBackButton from '../../components/headers/ProductsBackButton';
import TextStyles from '../../assets/Styles/TextStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import {Neomorph} from 'react-native-neomorph-shadows';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';

const SingleProductDetail = ({navigation, route}) => {
  const [count, setCount] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const {imageUri, imageTitle, imagePrice} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground
        source={imageUri}
        style={{height: hp('30%'), width: wp('100%')}}>
        <ProductsBackButton navigation={navigation} />
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          width: wp('100%'),
          justifyContent: 'space-evenly',
        }}>
        <Text style={[TextStyles.leftText]}>{imageTitle}</Text>
        <Text style={[TextStyles.simpleText, {marginTop: hp('2%')}]}>
          {imagePrice}
        </Text>
      </View>
      <View>
<Text style={[TextStyles.leftMediumText,{marginTop:hp('5%')}]}>Special instructions</Text>
<Text style={[TextStyles.dealText]}>Please let us know if you are allergic to anything or if we need to avoid anything</Text>
<TextInput
        label="e.g. no mayo"
        value={specialInstructions}
        onChangeText={text => {
          setSpecialInstructions(text);
        }}        mode="outlined" // You can also use "flat"
        multiline={true} // Enable multiline
        style={[TextFieldStyles.instructionInputField]}
        theme={{
          colors: {
            primary: AppColors.Gray, // Change this color to your desired outline color
          },
        }}
      />
      </View>
   
      

      <View
        style={[ContainerStyles.cartButtonContainer]}>
        <TouchableOpacity
          onPress={() => {
            decrementCount();
          }}>
          <View
            style={[
              ContainerStyles.smallRoundContainer
            ]}>
            <Text
              style={[TextStyles.decrementText]}>
              _
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={[TextStyles.countText]}>
          {count}
        </Text>
        <TouchableOpacity
          onPress={() => {
            incrementCount();
          }}>
          <View
            style={[
              ContainerStyles.smallRoundContainer
            ]}>
            <Text
              style={[TextStyles.incrementText]}>
              +
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Neomorph
            darkShadowColor="white"
            lightShadowColor="white"
            swapShadows // <- change zIndex of each shadow color
            style={
              ContainerStyles.singleProductTouchableOpacityNeomorphContainer
            }>
            <Text style={[TextStyles.whiteCenteredLable3]}>Add To Cart</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingleProductDetail;
