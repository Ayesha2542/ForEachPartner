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
  StyleSheet
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
import ImageStyles from '../../assets/Styles/ImageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import CategoryModal from '../../components/CategoryModal';
import { launchImageLibrary } from 'react-native-image-picker';


const AfterSignup = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [imageData, setImageData] = useState('')


  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCategorySelect = (selectedCategoryLabels) => {
    setSelectedCategories(selectedCategoryLabels);
    setCategoryInput(selectedCategoryLabels.join(', '));
    closeModal();
  };
 
  //Functions......
  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        console.log('Selected image URI:', response.assets[0].uri);
        setImageData(response.assets[0].uri);
      }
    });
  };

 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <BackButtonHeader navigation={navigation} />
 
      <TouchableOpacity
              onPress={() => {
                openImagePicker();
              }}>
              <Neomorph style={{justifyContent:"center",alignItems:"center", shadowRadius: 3,
        borderRadius: 100,
        backgroundColor: AppColors.background2,
        width: wp('30%'),
        height: hp('15%'),
        marginLeft: wp('30%')}}>
                {imageData == "" ? (
                  <Ionicons name='camera-outline' size={34} color={'grey'} />
                ) : (
                  <Image source={{ uri: imageData }} style={{   width: wp('30%'),
                  height: hp('15%'),
                  borderRadius:100,
                  borderWidth: 0.3,
                  borderColor: 'grey'
              }} />
                )}
              </Neomorph>
            </TouchableOpacity>

      <Text
        style={[
          TextStyles.leftHeading,
          { marginTop: hp('2'), fontSize: hp('3.5') },
        ]}
      >
        Restaurant Details
      </Text>
        


      <View style={{ alignItems: 'center' }}>
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
            style={ContainerStyles.inputFieldNeomorphContainer}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons
                name="category"
                size={wp('6%')}
                style={IconStyles.signupIcons}
              />
              <TextInput
                placeholder="Choose Categories"
                style={[TextFieldStyles.inputField, { color: 'black' }]}
                value={categoryInput}
               onChangeText={(text) => setCategoryInput(text)}
                editable={false} // Disable manual input
              />
            </View>
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Neomorph
            darkShadowColor="white"
            lightShadowColor="white"
            swapShadows // <- change zIndex of each shadow color
            style={[
              ContainerStyles.touchableOpacityNeomorphContainer,
              { width: wp('70%') },
            ]}
          >
            <Text style={TextStyles.whiteCenteredLable}>Next</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <CategoryModal selectedCategories={selectedCategories} onCategorySelect={handleCategorySelect} />
      </Modal>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});
export default AfterSignup;
