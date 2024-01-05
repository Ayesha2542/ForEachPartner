import React,{useState,useContext} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal, 
  Platform 
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
//import ImageStyles from '../../assets/Styles/ImageStyles';
import CategoryModal from '../../components/CategoryModal';
import AppContext from '../../Context/AppContext';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RestaurantCertificate from '../../components/RestaurantCertificate';
import DocumentPicker from 'react-native-document-picker';
const RestaurantDetail = ({navigation}) => {

  const {baseUrl,currentUser,storeUpdatedCurrentUser} = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [restaurantCategories, setRestaurantCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [imageData, setImageData] = useState('');
  const [restaurantName,setRestaurantName]= useState('');
  const [restaurantAddress,setRestaurantAddress]= useState('');
  // const [restaurantCnic,setRestaurantCnic]= useState('');
  const [restaurantPhoneNumber,setRestaurantPhoneNumber]= useState('');
  const [restaurantImage,setRestaurantImage]=useState('');
  const [restaurantNameError,setRestaurantNameError]= useState('')
  const [restaurantAddressError,setRestaurantAddressError]= useState('')
  // const [restaurantCnicError,setRestaurantCnicError]= useState('')
  const [restaurantPhoneNumberError,setRestaurantPhoneNumberError]= useState('')
  const [categoryInputError,setCategoryInputError] = useState('');
  const [restaurantImageDataError,setRestaurantImageDataError]=useState('');
  // const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateDocument, setCertificateDocument] = useState('');
  const [certificateDocumentError, setCertificateDocumentError] = useState('');
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCategorySelect = selectedCategoryLabels => {
    setRestaurantCategories(selectedCategoryLabels);
    setCategoryInput(selectedCategoryLabels.join(', '));
    closeModal();
  };
  
  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        console.log('Selected image URI:', response.assets[0].uri);
        setImageData(response.assets[0].uri);
        setRestaurantImage(response.assets[0]);
      } else {
        console.log('Image picker error:', response.error);
      }
    });
  };
  
  const isValidPhoneNumber = restaurantPhoneNumber => {
    const regex = /^(\+92|0)(3[0-9]{9})$/;
    return regex.test(restaurantPhoneNumber); 
  };
  // const isValidCNIC = cnic => {
  //   // CNIC format: 12345-6789012-3
  //   const regex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
  //   return regex.test(cnic);
  // };
  // const formatCNIC = input => {
  //   const cleanedInput = input.replace(/[-\s]/g, '');
  //   const formattedInput = cleanedInput
  //     .replace(/^(\d{5})(\d{7})(\d{1})$/, '$1-$2-$3')
  //     .slice(0, 15);
  
  //   return formattedInput;
  // };
  
  const addRestaurant = () => {
    console.log('Inside addRestaurant function');
    
    if (!imageData) {
      setRestaurantImageDataError('Restaurant Image is required');
    } 
    if (!restaurantName) {
      setRestaurantNameError('Restaurant name is required');
    }
    if (!restaurantAddress) {
      setRestaurantAddressError('Restaurant Address is required');
    }
    // if (!restaurantCnic) {
    //   setRestaurantCnicError('Owner CNIC is required');
    // }
  
    if (!restaurantPhoneNumber) {
      setRestaurantPhoneNumberError('Restaurant phone number is required');
    } else if (!isValidPhoneNumber(restaurantPhoneNumber)) {
      setRestaurantPhoneNumberError('Invalid Phone Number');
    }
    if (!certificateDocument) {
      setCertificateDocumentError('Certificate is required');
    }
  
    if (!categoryInput) {
      setCategoryInputError('Choose one or more categories is required');
    }
  
    if (
      !imageData ||
      !restaurantName ||
      !restaurantAddress ||
      !isValidPhoneNumber(restaurantPhoneNumber) ||
      !categoryInput ||
      !certificateDocument
    ) {
      console.log('Validation failed');
      return false;
    }
  
    console.log('Validation successful');
  
    const formData = new FormData();
    formData.append('restaurantName', restaurantName);
    formData.append('restaurantAddress', restaurantAddress);
    formData.append('restaurantPhoneNumber', restaurantPhoneNumber);
    formData.append('restaurantCategories', JSON.stringify(restaurantCategories));
    formData.append('_id', currentUser.userId);
  
    if (restaurantImage && restaurantImage.uri && restaurantImage.type) {
      formData.append('restaurantImage', {
        uri: restaurantImage.uri,
        type: restaurantImage.type,
        name: 'restaurantImage.jpg', // Adjust the filename as needed
      });
    }
  
    if (certificateDocument && certificateDocument.uri && certificateDocument.type) {
      formData.append('certificateDocument', {
        uri: certificateDocument.uri,
        type: 'application/pdf', // Set the correct MIME type for PDF
        name: 'certificateDocument.pdf', // Adjust the filename as needed
      });
    }
  
    console.log('About to make the axios request');
  
    axios({
      method: 'post',
      url: `${baseUrl}/restaurantDetail`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(response => {
        console.log('Axios success response:', response.data);
        if (response.data.registeredUser) {
          AsyncStorage.setItem('user', JSON.stringify({
            userId: response.data.registeredUser._id,
            userName: response.data.registeredUser.userName,
            userEmail: response.data.registeredUser.userEmail,
            userPassword: response.data.registeredUser.userPassword,
            restaurantImage: response.data.registeredUser.restaurantImage,
            restaurantName: response.data.registeredUser.restaurantName,
            restaurantAddress: response.data.registeredUser.restaurantAddress,
            // restaurantCnic: response.data.registeredUser.restaurantCnic,
            certificateDocument: response.data.registeredUser.certificateDocument,
            restaurantPhoneNumber: response.data.registeredUser.restaurantPhoneNumber,
            restaurantCategories: response.data.registeredUser.restaurantCategories,
          }));
          storeUpdatedCurrentUser({
            userId: response.data.registeredUser._id,
            userName: response.data.registeredUser.userName,
            userEmail: response.data.registeredUser.userEmail,
            userPassword: response.data.registeredUser.userPassword,
            restaurantImage: response.data.registeredUser.restaurantImage,
            restaurantName: response.data.registeredUser.restaurantName,
            restaurantAddress: response.data.registeredUser.restaurantAddress,
            // restaurantCnic: response.data.registeredUser.restaurantCnic,
            certificateDocument: response.data.registeredUser.certificateDocument,
            restaurantPhoneNumber: response.data.registeredUser.restaurantPhoneNumber,
            restaurantCategories: response.data.registeredUser.restaurantCategories,
          });
          navigation.navigate('WelcomeScreen');
        } else {
          console.log('Axios success but no registeredUser in response data');
          alert('Please try again later.');
        }
      })
      .catch(error => {
        console.error('Axios error:', error);
        alert(`An error occurred: ${error.message}`);
      });
  };
  
  
  const openCertificatePicker = async () => {
    try {
      const document = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setCertificateDocument(document);
      setCertificateDocumentError('');
      console.log('Selected certificate document:', document);
    } catch (err) {
      console.log(err);
      setCertificateDocumentError('Error selecting document');
    }
  };
  
  
     

            
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
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
        style={[TextStyles.cartTextStyle,{marginLeft:0,marginTop:hp('1')}]}>
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
              placeholder="Restaurant Name"
              style={[TextFieldStyles.inputField]}
              value={restaurantName}
              onChangeText={text => {
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
           
            
          <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.darkgray}
          swapShadows // <- change zIndex of each shadow color
          style={{
          marginLeft:wp('0'),marginTop:hp('0'),
          shadowRadius: 0.3,
          backgroundColor: AppColors.white,
          borderRadius: wp('1%'),
          height: hp('7'),
          width: wp('10%'),
          shadowOpacity: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <TouchableOpacity onPress={()=>{
              navigation.navigate('AddAddress')
            }}>
            <Octicons
              name="location"
              size={wp('5%')}
              style={[IconStyles.signupIcons,{margin:0}]}
            />
            </TouchableOpacity>
            </Neomorph>
           
            <TextInput
              placeholder="Restaurant Full Address"
              style={[TextFieldStyles.inputField,{marginLeft:wp('3.5')}]}
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

        {/* <Neomorph
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
              value={formatCNIC(restaurantCnic)}
              onChangeText={text => {
                setRestaurantCnic(text);
                setRestaurantCnicError('');
              }}
              keyboardType="numeric"
            />
          </View>
          {restaurantCnicError ? (
              <Text style={[TextStyles.errorText]}>{restaurantCnicError}</Text>
            ) : null}
        </Neomorph> */}
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.inputFieldNeomorphContainer}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome
              name="phone"
              size={wp('6%')}
              style={IconStyles.signupIcons}
            />

            <TextInput
              placeholder="Enter Phone Number"
              style={[TextFieldStyles.inputField]}
              value={restaurantPhoneNumber}
              onChangeText={text => {
                setRestaurantPhoneNumber(text);
                setRestaurantPhoneNumberError('');
              }}
            />
          </View>
          {restaurantPhoneNumberError ? (
              <Text style={[TextStyles.errorText]}>{restaurantPhoneNumberError}</Text>
            ) : null}
        </Neomorph>


        <TouchableOpacity onPress={openCertificatePicker}>
   <Neomorph
       darkShadowColor={AppColors.primary}
       lightShadowColor={AppColors.background}
       swapShadows // <- change zIndex of each shadow color
       style={ContainerStyles.inputFieldNeomorphContainer}>
   
      <View style={{ flexDirection: 'row' }}>
         <FontAwesome
            name="certificate"
            size={wp('6%')}
            style={IconStyles.signupIcons}
         />
         <TextInput
            placeholder="Choose Certificate"
            style={[TextFieldStyles.inputField, { color: 'black' }]}
            value={certificateDocument ? 'Certificate Selected' : ''}
            editable={false} // Disable manual input
         />
      </View>
   </Neomorph>
</TouchableOpacity>




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
                onChangeText={text => {
                  setCategoryInput(text)
                  setCategoryInputError('');
                }}
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
          restaurantCategories={restaurantCategories}
          onCategorySelect={handleCategorySelect}
        />
      </Modal>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetail;
