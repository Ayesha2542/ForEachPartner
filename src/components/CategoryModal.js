import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import {Neomorph} from 'react-native-neomorph-shadows';
import TextStyles from '../assets/Styles/TextStyles';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../assets/colors/AppColors';

const CategoryModal = ({ selectedCategories, onCategorySelect }) => {
  const [categories, setCategories] = useState([
    { id: 1, label: 'Pizza', checked: selectedCategories.includes('Category 1') },
    { id: 2, label: 'Burger', checked: selectedCategories.includes('Category 2') },
    { id: 3, label: 'Shawarma', checked: selectedCategories.includes('Category 2') },
    { id: 4, label: 'Biryani', checked: selectedCategories.includes('Category 2') },
    { id: 5, label: 'Pasta', checked: selectedCategories.includes('Category 2') },
    { id: 6, label: 'Sandwiches', checked: selectedCategories.includes('Category 2') },
    // Add more categories as needed
  ]);

  const handleCategoryToggle = (categoryId, label) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, checked: !category.checked };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const confirmSelection = () => {
    const selectedCategoryLabels = categories
      .filter((category) => category.checked)
      .map((category) => category.label);
    onCategorySelect(selectedCategoryLabels);
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={[TextStyles.mediumTextStyle]}>Select Categories You want to sale</Text>
        {categories.map((category) => (
     
         <CheckBox
         key={category.id}
         isChecked={category.checked}
         onClick={() => handleCategoryToggle(category.id, category.label)}
         rightText={category.label}
         checkBoxColor="green" style={{marginLeft:wp('5'),marginTop:hp('2')}} // Set the checkbox color to green
       />
      
        ))}
        <TouchableOpacity onPress={confirmSelection}>
        <Neomorph
            darkShadowColor="white"
            lightShadowColor="white"
            swapShadows // <- change zIndex of each shadow color
            style={{
              marginTop: hp('3%'),

              shadowRadius: 6,
              backgroundColor: AppColors.primary,
              borderRadius: wp('3%'),
              height: hp('6%'),
              width: wp('40%'),
              marginVertical: hp('1.4%'),
              shadowOpacity: 0.3,
              marginLeft:wp('15')
            }}
          >
            <Text style={{
    color: AppColors.white,
    // fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: hp('2%'),
    textAlign: 'center',
    marginTop: hp('2%'),
  }}>
    Confirm 
    </Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CategoryModal;
