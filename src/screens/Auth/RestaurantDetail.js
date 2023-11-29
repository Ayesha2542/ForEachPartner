import React,{useState,useContext} from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import IconStyles from '../../assets/Styles/IconStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageStyles from '../../assets/Styles/ImageStyles';
import CategoryModal from '../../components/CategoryModal';
import AppContext from '../../Context/AppContext';
import axios from 'axios';
const RestaurantDetail = ({navigation,route}) => {
  const {userName,userEmail,userPassword}= route.params;
  console.log("kdjfkldjfljdlkfjdj",userName,userEmail,userPassword);
  const {baseUrl} = useContext(AppContext);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [imageData, setImageData] = useState('');
  const [restaurantName,setRestaurantName]= useState('');
  const [restaurantAddress,setRestaurantAddress]= useState('');
  const [restaurantCnic,setRestaurantCnic]= useState('');
  const [restaurantPhoneNumber,setRestaurantPhoneNumber]= useState('');
  const [restaurantImage,setRestaurantImage]=useState('');

  const [restaurantNameError,setRestaurantNameError]= useState('')
  const [restaurantAddressError,setRestaurantAddressError]= useState('')
  const [restaurantCnicError,setRestaurantCnicError]= useState('')
  const [restaurantPhoneNumberError,setRestaurantPhoneNumberError]= useState('')
  const [categoryInputError,setCategoryInputError] = useState('');
  const [restaurantImageDataError,setRestaurantImageDataError]=useState('');
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCategorySelect = selectedCategoryLabels => {
    setSelectedCategories(selectedCategoryLabels);
    setCategoryInput(selectedCategoryLabels.join(', '));
    closeModal();
  };
  
  const openImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.error) {
        console.log('Selected image URI:', response.assets[0].uri);
        setImageData(response.assets[0].uri);
      }
    });
  };
const addRestaurant=()=>{
  
}
  const handelSubmit = () => {
    if (!restaurantName) {
      setRestaurantNameError('Please enter product name.');
    }

    if (!restaurantAddress) {
      setRestaurantAddressError('Please enter your product description.');
    }
    if (!restaurantCnic) {
      setRestaurantCnicError('Please enter your product price.');
    } 
    if (!restaurantPhoneNumber) {
      setRestaurantPhoneNumberError('Please enter your product price.');
    } 
    if (!imageData) {
     setRestaurantImageDataError('Please Upload image of your product .');
   } 
    if (
     !imageData ||
      !restaurantName ||
      !restaurantAddress||
      !restaurantCnic||
      !restaurantPhoneNumber
    
    ) {
      return false;
    }
    else{
      const formData = new FormData();
      formData.append('restaurantName', restaurantName);
      formData.append('restaurantAddress', restaurantAddress);
      formData.append('restaurantCnic', restaurantCnic);
      formData.append('restaurantPhoneNumber', restaurantPhoneNumber);
      formData.append('userName',userName);
      formData.append('userEmail',userEmail);
      formData.append('userPassword',userPassword);
  
      if (restaurantImage) {
        formData.append('restaurantImage', {
          uri: restaurantImage.uri,
          type: restaurantImage.type,
          name: restaurantImage.fileName,
        });
      }
      console.log("?????????????????????????????????????????????????????????????");
      console.log(formData);
      console.log("?????????????????????????????????????????????????????????????");
  
      axios({
        method: 'post',
        url: `${baseUrl}/restaurantSignup`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then(response => {
          if (response.data.added) {
            navigation.navigate('WelcomeScreen')
          } else {
            alert('Please try again later.');
          }
        })
        .catch(error => {
            console.log('Error', error.message);  
        });
    }

   
    }   
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <BackButtonHeader navigation={navigation} />
       <View style={[ContainerStyles.centeredContainer,{marginTop:hp('0')}]}> 
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
              setRestaurantImageDataError('');
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
        {restaurantImageDataError ? (
              <Text style={[TextStyles.errorText,{marginTop:hp('2')}]}>{restaurantImageDataError}</Text>
            ) : null}

      <Text
        style={[TextStyles.cartTextStyle,{marginLeft:0}]}>
        Restaurant Details
      </Text>     
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.inputFieldNeomorphContainer}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons
              name="food-bank"
              size={wp('6%')}
              style={IconStyles.signupIcons}
            />
            <TextInput
              placeholder="Enter Your Restaurant Name"
              style={[TextFieldStyles.inputField]}
              value={restaurantName}
              onChange={text => {
                setRestaurantName(text);
                setRestaurantNameError('');
              }}
            />
          </View>
          {restaurantNameError ? (
              <Text style={[TextStyles.errorText]}>{restaurantNameError}</Text>
            ) : null}
        </Neomorph>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.inputFieldNeomorphContainer}>
          <View style={{flexDirection: 'row'}}>
            <Octicons
              name="location"
              size={wp('5%')}
              style={IconStyles.signupIcons}
            />
            <TextInput
              placeholder="Restaurant Full Address"
              style={[TextFieldStyles.inputField]}
              value={restaurantAddress}
              onChangeText={text => {
                setRestaurantAddress(text);
                setRestaurantAddressError('');
              }}
            />
          </View>
          {restaurantAddressError ? (
              <Text style={[TextStyles.errorText]}>{restaurantAddressError}</Text>
            ) : null}
        </Neomorph>

        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.inputFieldNeomorphContainer}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name="idcard"
              size={wp('6%')}
              style={IconStyles.signupIcons}
            />

            <TextInput
              placeholder="Enter CNIC"
              style={[TextFieldStyles.inputField]}
              value={restaurantCnic}
              onChangeText={text => {
                setRestaurantCnic(text);
                setRestaurantCnicError('');
              }}
            />
          </View>
          {restaurantCnicError ? (
              <Text style={[TextStyles.errorText]}>{restaurantCnicError}</Text>
            ) : null}
        </Neomorph>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.inputFieldNeomorphContainer}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name="idcard"
              size={wp('6%')}
              style={IconStyles.signupIcons}
            />

            <TextInput
              placeholder="Enter CNIC"
              style={[TextFieldStyles.inputField]}
              value={restaurantCnic}
              onChangeText={text => {
                setRestaurantCnic(text);
                setRestaurantCnicError('');
              }}
            />
          </View>
          {restaurantCnicError ? (
              <Text style={[TextStyles.errorText]}>{restaurantCnicError}</Text>
            ) : null}
        </Neomorph>
        <TouchableOpacity onPress={openModal}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.inputFieldNeomorphContainer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons
                name="category"
                size={wp('6%')}
                style={IconStyles.signupIcons}
              />
              <TextInput
                placeholder="Choose Categories"
                style={[TextFieldStyles.inputField, {color: 'black'}]}
                value={categoryInput}
                onChangeText={text => setCategoryInput(text)}
                editable={false} // Disable manual input
              />
            </View>
            {categoryInputError ? (
              <Text style={[TextStyles.errorText]}>{categoryInputError}</Text>
            ) : null}
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {
            addRestaurant();
            // console.log('addRestaurant')
        
          }}>
          <Neomorph
            darkShadowColor="white"
            lightShadowColor="white"
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.touchableOpacityNeomorphContainer,
              {width: wp('70%')},
            ]}>
            <Text style={TextStyles.whiteCenteredLable}>Sign Up</Text>
          </Neomorph>
        </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <CategoryModal
          selectedCategories={selectedCategories}
          onCategorySelect={handleCategorySelect}
        />
      </Modal>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetail;
