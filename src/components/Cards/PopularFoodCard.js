import React, {useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import AppColors from '../../assets/colors/AppColors';
import TextStyles from '../../assets/Styles/TextStyles';
import Modal from 'react-native-modal';
import SingleProductDetail from '../../screens/Products/SingleProductDetail';

const PopularFoodCard = ({navigation, item}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        // openModal();
        navigation.navigate('SingleProductDetail', {
          imageUri: item.uri,
          imageTitle: item.title,
          imagePrice: item.price,
        });
      }}>
      <Neomorph
        swapShadows
        style={ContainerStyles.squareBoxHalfScreenContainer}>
        <ImageBackground
          source={item.uri}
          style={{width: wp('44'), height: hp('22%')}}
          imageStyle={{
            borderRadius: wp('3%'),
            marginVertical: hp('1%'),
            marginHorizontal: wp('2%'),
          }}>
          <Text style={[TextStyles.popularFoodLabel]}>{item.title}</Text>
          <View style={[ContainerStyles.popularFoodPiceTextContainer]}>
            <Text style={[TextStyles.simpleText]}>{item.price}</Text>
          </View>
        </ImageBackground>
      </Neomorph>

      {/* <Modal visible={modalVisible} animationType="slide"> */}
        {/* <View style={{hieght:hp('20'),width:wp('20'),backgroundColor:AppColors.white}}>
          <Text >Hello world</Text>
        </View> */}
        {/* <SingleProductDetail navigation={navigation} /> */}
        {/* <TouchableOpacity onPress={closeModal}> */}
          {/* <Text>Close Modal</Text> */}
        {/* </TouchableOpacity> */}
      {/* </Modal> */}
    </TouchableOpacity>
  );
};

export default PopularFoodCard;
