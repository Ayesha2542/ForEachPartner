import React, {useState, useContext,useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
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



const AddFoodDeals = ({navigation,route}) => {
  const {baseUrl,currentUser} = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageData, setImageData] = useState('');
  const [foodDealTitle, setFoodDealTitle] = useState('');
  const [foodDealDescription, setFoodDealDescription] = useState('');
  // const [foodDealDiscount,setFoodDealDiscount] = useState('');
  const [foodDealPrice, setFoodDealPrice] = useState('');
  const [foodDealImage,setFoodDealImage]=useState('');
  const [updateId, setUpdateId] = useState("");
  const [foodDealTitleError, setFoodDealTitleError] = useState('');
   const [foodDealDescriptionError, setFoodDealDescriptionError] = useState('');
   const [foodDealPriceError, setFoodDealPriceError] = useState('');
   const [foodDealImageError,setFoodDealImageError] = useState('');
  //  const [foodDealDiscountError,setFoodDealDiscountError] = useState('');
 

    const openModal = () => {
      setModalVisible(true);
    };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.error) {
        console.log('Selected image URI:', response.assets[0].uri);
        setImageData(response.assets[0].uri);
        setFoodDealImage(response.assets[0])
      }
    });
  };

  
  useEffect(() => {
    if (route.params) {
      const { foodDeal_Id, foodDealTitle,foodDealDescription, foodDealPrice, foodDealImage} = route.params;
      setFoodDealTitle(foodDealTitle);
      setFoodDealDescription(foodDealDescription);
      setFoodDealPrice(foodDealPrice);
      // setFoodDealDiscount(foodDealDiscount)
      setImageData(foodDealImage);
      setUpdateId(foodDeal_Id);  // Make sure this is not set when adding a new product
    }
  }, [route.params]);
  

  const addOrUpdateProduct = () => {
    if (!foodDealTitle) {
      setFoodDealTitleError('Please enter Deal Title.');
    }
    if (!foodDealDescription) {
      setFoodDealDescriptionError('Please enter your Deal description.');
    }
    if (!foodDealPrice) {
      setFoodDealPriceError('Please enter your Deal price.');
    } 
    // if (!foodDealDiscount) {
    //   setFoodDealDiscountError('Please enter your Deal Discount.');
    // } 
    if (!imageData) {
     setFoodDealImageError('Please Upload image of your Deal .');
   } 
    if (
      !imageData ||
      !foodDealTitle ||
      !foodDealDescription ||
      !foodDealPrice
      // !foodDealDiscount 
    ) {
      return false;
    }

    const formData = new FormData();
    formData.append('foodDealTitle', foodDealTitle);
    formData.append('foodDealDescription', foodDealDescription);
    formData.append('foodDealPrice', foodDealPrice);
    // formData.append('foodDealDiscount', foodDealDiscount); 
    formData.append('foodDeal_Id', updateId);
    formData.append('restaurant_id',currentUser.userId)
    if (foodDealImage) {
      formData.append('foodDealImage', {
        uri: foodDealImage.uri,
        type: foodDealImage.type,
        name: foodDealImage.fileName,
      });
    }
    console.log("?????????????????????????????????????????????????????????????");
    console.log(formData);
    console.log("?????????????????????????????????????????????????????????????");
    const apiUrl = route.params ? `${baseUrl}/updateFoodDeals` : `${baseUrl}/addFoodDeals`;

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
      <ScrollView>
      <View style={[ContainerStyles.centeredContainer,{marginTop:hp('7')}]}>
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
              setFoodDealImageError('');
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
        {foodDealImageError ? (
              <Text style={[TextStyles.errorText,{marginTop:hp('2')}]}>{foodDealImageError}</Text>
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
              placeholder="Food Deal Title"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              value={foodDealTitle}
              onChangeText={text => {
                setFoodDealTitle(text);
                setFoodDealTitleError('');
              }}

            />
          </View>
          
          {foodDealTitleError ? (
              <Text style={[TextStyles.errorText]}>{foodDealTitleError}</Text>
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
              placeholder="Food Deal Description"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              value={foodDealDescription}
              onChangeText={text => {
                setFoodDealDescription(text);
                setFoodDealDescriptionError('');
              }}

            />
          </View>
          {foodDealDescriptionError ? (
              <Text style={[TextStyles.errorText]}>{foodDealDescriptionError}</Text>
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
              placeholder="Food Deal Price"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              value={foodDealPrice}
              onChangeText={text => {
                setFoodDealPrice(text);
                setFoodDealPriceError('');
              }}
            />
          </View>
          {foodDealPriceError ? (
              <Text style={[TextStyles.errorText]}>{foodDealPriceError}</Text>
            ) : null}
        </Neomorph>

        {/* <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={[
            ContainerStyles.inputFieldNeomorphContainer,
            {width: wp('70%')},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Food Deal Discount"
              style={[
                TextFieldStyles.inputField,
                {paddingHorizontal: wp('5%'), width: wp('70%')},
              ]}
              value={foodDealDiscount}
              onChangeText={text => {
                setFoodDealDiscount(text);
                setFoodDealDiscountError('');
              }}

            />
          </View>
          {foodDealDiscountError ? (
              <Text style={[TextStyles.errorText]}>{foodDealDiscountError}</Text>
            ) : null}
        </Neomorph> */}

        {updateId == "" ? (
        <TouchableOpacity onPress={()=>{
          addOrUpdateProduct();
        }}>
            <Neomorph
              darkShadowColor={AppColors.white}
              lightShadowColor={AppColors.white}
              swapShadows // <- change zIndex of each shadow color
              style={[ContainerStyles.touchableOpacityNeomorphContainer,{width:wp('70%')}]}>
              <Text style={TextStyles.whiteCenteredLable}>Add Food Deal</Text>
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
                <Text style={TextStyles.whiteCenteredLable}>Update Food Deal</Text>
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
        {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
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
          Food Deal is Successfully Added
        </Text>
        ):(
<Text style={[TextStyles.leftSmallText]}>
          Food Deal is Successfully Updated
        </Text>
        )
}
        <TouchableOpacity onPress={() => {
          navigation.navigate('FoodDeals');
        }}>
          <Neomorph
            darkShadowColor={AppColors.white}
            lightShadowColor={AppColors.white}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.smallConfirmButtonNeomorph, { marginLeft: 0 }]}>
            <Text
              style={[TextStyles.smallButtonText]}>
              View Food Deal
            </Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </View>

      </Modal>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddFoodDeals;

