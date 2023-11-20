import React,{useState} from 'react';
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

const RestaurantDetail = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [imageData, setImageData] = useState('');

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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <BackButtonHeader navigation={navigation} />
       <View style={[ContainerStyles.centeredContainer,{marginTop:hp('3')}]}> 
      <TouchableOpacity
        onPress={() => {
          openImagePicker();
        }}>
        <Neomorph
          style={[ContainerStyles.imageContainterNeomorph]}>
          {imageData == '' ? (
            <Ionicons name="camera-outline" size={34} color={AppColors.Gray} />
          ) : (
            <Image
              source={{uri: imageData}}
              style={[ImageStyles.roundImageStyle]}
            />
          )}
        </Neomorph>
      </TouchableOpacity>

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
            />
          </View>
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
            />
          </View>
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
            />
          </View>
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
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          navigation.navigate('WelcomeScreen',{
            selectedCategories:selectedCategories
          })
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
