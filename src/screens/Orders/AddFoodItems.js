import React, {useState, useContext,useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
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


const AddFoodItems = ({navigation,route}) => {
  const {baseUrl,currentUser,categoryName} = useContext(AppContext);

  console.log("++++++++++++++++",categoryName)

  const [isModalVisible, setModalVisible] = useState(false);
  const [imageData, setImageData] = useState('');
  const [productName, setproductName] = useState('');
  const [productDescription, setproductDescription] = useState('');
  const [productPrice, setproductPrice] = useState('');
  const [productImage,setProductImage]=useState('');
  const [updateId, setUpdateId] = useState("");
  const [productNameError, setproductNameError] = useState('');
   const [productDescriptionError, setProductDescriptionError] = useState('');
   const [productPriceError, setProductPriceError] = useState('');
   const [productImageError,setProductImageError] = useState('');

    const openModal = () => {
      setModalVisible(true);
    };

  const closeModal = () => {
    setModalVisible(false);
  };

  
  //Functions......
  const openImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.error) {
        console.log('Selected image URI:', response.assets[0].uri);
        setImageData(response.assets[0].uri);
        setProductImage(response.assets[0])
      }
    });
  };

  
  useEffect(() => {
    if (route.params) {
      const { productId, productName, productDescription, productPrice, productImage } = route.params;
      setproductName(productName);
      setproductDescription(productDescription);
      setproductPrice(productPrice);
      setImageData(productImage);
      setUpdateId(productId);  // Make sure this is not set when adding a new product
    }
  }, [route.params]);
  

  const addOrUpdateProduct = () => {
    if (!productName) {
      setproductNameError('Please enter product name.');
    }

    if (!productDescription) {
      setProductDescriptionError('Please enter your product description.');
    }
    if (!productPrice) {
      setProductPriceError('Please enter your product price.');
    } 
    if (!imageData) {
     setProductImageError('Please Upload image of your product .');
   } 
    if (
     !imageData ||
      !productName ||
      !productDescription ||
      !productPrice 
    ) {
      return false;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('productPrice', productPrice);
    formData.append('productId', updateId);
    formData.append('restaurant_id',currentUser.userId)
    formData.append('categoryName', categoryName.categoryName);
    if (productImage) {
      formData.append('productImage', {
        uri: productImage.uri,
        type: productImage.type,
        name: productImage.fileName,
      });
    }
    console.log("?????????????????????????????????????????????????????????????");
    console.log(formData);
    console.log("?????????????????????????????????????????????????????????????");
    const apiUrl = route.params ? `${baseUrl}/updateProduct` : `${baseUrl}/addProduct`;

    axios({
      method: 'post',
      url: apiUrl,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(response => {
        if (response.data.added || response.data.update) {
          openModal();
        } else {
          alert('Please try again later.');
        }
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // other than 2xx. Access error response data here.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received.
          // `error.request` is an instance of XMLHttpRequest in the browser
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error.
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    }    
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
              setProductImageError('');
              openImagePicker();
            }}>
            <Ionicons name="camera-outline" size={34} color={'grey'} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity  onPress={() => {
              openImagePicker();
            }}>
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
            </TouchableOpacity>
          )}
          
        </Neomorph>
        {productImageError ? (
              <Text style={[TextStyles.errorText,{marginTop:hp('2')}]}>{productImageError}</Text>
            ) : null}

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
              value={productName}
              onChangeText={text => {
                setproductName(text);
                setproductNameError('');
              }}

            />
          </View>
          
          {productNameError ? (
              <Text style={[TextStyles.errorText]}>{productNameError}</Text>
            ) : null}
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
                setProductDescriptionError('');
              }}

            />
          </View>
          {productDescriptionError ? (
              <Text style={[TextStyles.errorText]}>{productDescriptionError}</Text>
            ) : null}
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
                setProductPriceError('');
              }}

            />
          </View>
          {productPriceError ? (
              <Text style={[TextStyles.errorText]}>{productPriceError}</Text>
            ) : null}
        </Neomorph>
        {updateId == "" ? (
        <TouchableOpacity onPress={()=>{
          addOrUpdateProduct();
        }}>
            <Neomorph
              darkShadowColor={AppColors.white}
              lightShadowColor={AppColors.white}
              swapShadows // <- change zIndex of each shadow color
              style={[ContainerStyles.touchableOpacityNeomorphContainer,{width:wp('70%')}]}>
              <Text style={TextStyles.whiteCenteredLable}>Add Product</Text>
            </Neomorph>
          </TouchableOpacity>
        ):(
          <TouchableOpacity onPress={()=>{
            addOrUpdateProduct();
          }}>
              <Neomorph
                darkShadowColor={AppColors.white}
                lightShadowColor={AppColors.white}
                swapShadows // <- change zIndex of each shadow color
                style={[ContainerStyles.touchableOpacityNeomorphContainer,{width:wp('70%')}]}>
                <Text style={TextStyles.whiteCenteredLable}>Update Product</Text>
              </Neomorph>
            </TouchableOpacity> 
        )
}
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
        {updateId == "" ? (
        <Text style={[TextStyles.leftSmallText]}>
          Product is Successfully Added
        </Text>
        ):(
<Text style={[TextStyles.leftSmallText]}>
          Product is Successfully Updated
        </Text>
        )
}
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

