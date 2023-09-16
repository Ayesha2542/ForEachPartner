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
} from 'react-native';
import BackButtonHeader from '../../components/headers/BackButtonHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
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

const VerifyScreen = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <BackButtonHeader navigation={navigation} />

      <Text
        style={[
          TextStyles.leftHeading,
          { marginTop: hp('2'), fontSize: hp('3.5') },
        ]}
      >
        Verify
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

export default VerifyScreen;
