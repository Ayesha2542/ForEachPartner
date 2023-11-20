import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import {Neomorph} from 'react-native-neomorph-shadows';
import TextStyles from '../assets/Styles/TextStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import AppColors from '../assets/colors/AppColors';


const CategoryModal = ({selectedCategories, onCategorySelect}) => {
  const [categories, setCategories] = useState([
    {id: 1, label: 'Pizza', checked: selectedCategories.includes('Category 1')},
    {
      id: 2,
      label: 'Burger',
      checked: selectedCategories.includes('Category 2'),
    },
    {
      id: 3,
      label: 'Shawarma',
      checked: selectedCategories.includes('Category 2'),
    },
    {
      id: 4,
      label: 'Biryani',
      checked: selectedCategories.includes('Category 2'),
    },
    {id: 5, label: 'Pasta', checked: selectedCategories.includes('Category 2')},
    {
      id: 6,
      label: 'Chinese',
      checked: selectedCategories.includes('Category 2'),
    },
    // Add more categories as needed
  ]);

  const handleCategoryToggle = (categoryId, label) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {...category, checked: !category.checked};
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const confirmSelection = () => {
    const selectedCategoryLabels = categories
      .filter(category => category.checked)
      .map(category => category.label);
    onCategorySelect(selectedCategoryLabels);
  };

  return (
    <View style={[ContainerStyles.flexCenter,{backgroundColor: 'rgba(0, 0, 0, 0.5)',}]}>
      <View style={[TextStyles.modalContent]}>
        <Text style={[TextStyles.mediumTextStyle]}>
          Select Categories You want to sale
        </Text>
        {categories.map(category => (
          <CheckBox
            key={category.id}
            isChecked={category.checked}
            onClick={() => handleCategoryToggle(category.id, category.label)}
            rightText={category.label}
            checkBoxColor="green"
            style={{marginLeft: wp('5'), marginTop: hp('2')}} // Set the checkbox color to green
          />
        ))}
        <TouchableOpacity onPress={confirmSelection}>
          <Neomorph
            darkShadowColor={AppColors.white}
            lightShadowColor={AppColors.white}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.smallConfirmButtonNeomorph}>
            <Text
              style={[TextStyles.smallButtonText]}>
              Confirm
            </Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CategoryModal;
