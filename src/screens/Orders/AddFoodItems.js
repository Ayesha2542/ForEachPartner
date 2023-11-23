import React, {useEffect, useState, useContext} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';
import AppContext from '../../Context/AppContext';
import axios from 'axios';


const AddFoodItems = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageData, setImageData] = useState('');
  const {baseUrl, updateCurrentUser} = useContext(AppContext);
  const [productTitle, setproductTitle] = useState('');
  const [productDescription, setproductDescription] = useState('');
  const [productPrice, setproductPrice] = useState('');

  const onPressCombined = () => {
    addProduct();
    setModalVisible(true);
  };
  
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

  const addProduct = () => {
    const formData = new FormData();
    formData.append('title', productTitle);
    formData.append('description', productDescription);
    formData.append('price', productPrice);

    axios({
      method: 'post',
      url: `${baseUrl}/addProduct`,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(function (response) {
        if (response.data.save == true) {
          AsyncStorage.setItem(
            'product',
            JSON.stringify(response.data.newProduct),
          );
          // updateCurrentUser({userId:response.data.newUser._id,email:response.data.email,password:response.data.password})
          navigation.navigate('Home');
        } else {
          alert(' Please try again later.');
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    // console.warn("Stop");
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
              value={productTitle}
              onChangeText={text => {
                setproductTitle(text);
              }}

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
              value={productDescription}
              onChangeText={text => {
                setproductDescription(text);
              }}

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
              value={productPrice}
              onChangeText={text => {
                setproductPrice(text);
              }}

            />
          </View>
        </Neomorph>
        <TouchableOpacity onPress={onPressCombined}>
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
          <View
      style={[
        ContainerStyles.flexCenter,
        { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
      ]}
    >
      <View
        style={[
          TextStyles.modalContent,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.darkgray}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.smallCloseButtonNeomorph}
        >
          <TouchableOpacity onPress={closeModal}>
            <AntDesign
              name="close"
              size={wp('4%')}
              style={{ color: AppColors.primary }}
            />
          </TouchableOpacity>
        </Neomorph>

        <LottieView
          source={require('../../assets/animations/Done.json')}
          autoPlay
          loop
          style={{ width:wp('80'), height:hp('25')}}
          speed={1}
        />
        <Text style={[TextStyles.leftSmallText]}>
          Product is Successfully Added
        </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Products');
        }}>
          <Neomorph
            darkShadowColor={AppColors.white}
            lightShadowColor={AppColors.white}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.smallConfirmButtonNeomorph, { marginLeft: 0 }]}>
            <Text
              style={[TextStyles.smallButtonText]}>
              View Product
            </Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </View>

      </Modal>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default AddFoodItems;
