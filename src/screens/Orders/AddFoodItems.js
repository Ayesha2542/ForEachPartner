import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import {launchImageLibrary} from 'react-native-image-picker';
import ConfirmationModal from '../../components/ConfirmationModal';


const AddFoodItems = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [imageData, setImageData] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCategorySelect = selectedCategoryLabels => {
    setSelectedCategories(selectedCategoryLabels);
    setCategoryInput(selectedCategoryLabels.join(', '));
    closeModal();
  };

  //Functions......
  const openImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.error) {
        console.log('Selected image URI:', response.assets[0].uri);
        setImageData(response.assets[0].uri);
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <BackButtonHeader navigation={navigation} />
      <View style={[ContainerStyles.centeredContainer,{marginTop:hp('3')}]}>
        <Neomorph
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            shadowRadius: 3,
            borderRadius: 100,
            backgroundColor: AppColors.background2,
            width: wp('30%'),
            height: hp('15%'),
          }}>
          {imageData == '' ? (
            <TouchableOpacity  onPress={() => {
              openImagePicker();
            }}>
            <Ionicons name="camera-outline" size={34} color={'grey'} />
            </TouchableOpacity>
          ) : (
            <Image
              source={{uri: imageData}}
              style={{
                width: wp('30%'),
                height: hp('15%'),
                borderRadius: 100,
                borderWidth: 0.3,
                borderColor: 'grey',
              }}
            />
          )}
        </Neomorph>

      {/* ye view mai ne neomorhp ko center krny k liye diya hai */}
      <View style={{alignItems: 'center', marginTop: hp('5')}}>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={[
            ContainerStyles.inputFieldNeomorphContainer,
            {width: wp('70%')},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Product Title"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
            />
          </View>
        </Neomorph>

        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={[
            ContainerStyles.inputFieldNeomorphContainer,
            {width: wp('70%')},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Product Description"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              autoCapitalize="none"
            />
          </View>
        </Neomorph>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={[
            ContainerStyles.inputFieldNeomorphContainer,
            {width: wp('70%')},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Product Price"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              autoCapitalize="none"
            />
          </View>
        </Neomorph>
        <TouchableOpacity onPress={openModal}>
            <Neomorph
              darkShadowColor={AppColors.white}
              lightShadowColor={AppColors.white}
              swapShadows // <- change zIndex of each shadow color
              style={[ContainerStyles.touchableOpacityNeomorphContainer,{width:wp('70%')}]}>
              <Text style={TextStyles.whiteCenteredLable}>Add Product</Text>
            </Neomorph>
          </TouchableOpacity>
          <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <ConfirmationModal 
          selectedCategories={selectedCategories}
          onCategorySelect={handleCategorySelect}
          navigation={navigation}
        />

      </Modal>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default AddFoodItems;
