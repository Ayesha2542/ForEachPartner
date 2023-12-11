import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Neomorph } from 'react-native-neomorph-shadows';
import TextStyles from '../assets/Styles/TextStyles';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import LottieView from 'lottie-react-native';
import AppColors from '../assets/colors/AppColors';
import axios from 'axios'; // Import axios for making HTTP requests
import AppContext from '../Context/AppContext';

const CategoryModal = ({ restaurantCategories, onCategorySelect }) => {
  const { baseUrl } = useContext(AppContext);
  const [categories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const viewAllCategories = async () => {
      try {
        const response = await axios.post(`${baseUrl}/viewAllCategories`);
        const fetchedCategories = response.data.map(category => ({
          id: category._id,
          label: category.title,
          checked: restaurantCategories.includes(category.title),
        }));
        setAllCategories(fetchedCategories);

        setTimeout(() => {
          setLoading(false);
        }, 1000); 
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    viewAllCategories();
  }, [restaurantCategories, baseUrl]);

  const handleCategoryToggle = (categoryId, label) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, checked: !category.checked };
      }
      return category;
    });
    setAllCategories(updatedCategories);
  };

  const confirmSelection = () => {
    const selectedCategoryLabels = categories
      .filter(category => category.checked)
      .map(category => category.label);
    onCategorySelect(selectedCategoryLabels);
  };

  return (
    <View style={[ContainerStyles.flexCenter, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
     
        <View style={[TextStyles.modalContent]}>
        {loading ? (
        <LottieView
          source={require('../assets/animations/Loading.json')}
          autoPlay
          loop
          speed={1}
          style={{ width: 200, height: 200 ,marginLeft:wp('12')}}
        />
      ) : (
        <View>
          <Text style={[TextStyles.mediumTextStyle]}>Select Categories You want to sale</Text>
          {categories.map(category => (
            <CheckBox
              key={category.id}
              isChecked={category.checked}
              onClick={() => handleCategoryToggle(category.id, category.label)}
              rightText={category.label}
              checkBoxColor="green"
              style={{ marginLeft: wp('5'), marginTop: hp('2') }}
            />
          ))}
          <TouchableOpacity onPress={confirmSelection}>
            <Neomorph
              darkShadowColor={AppColors.white}
              lightShadowColor={AppColors.white}
              swapShadows
              style={ContainerStyles.smallConfirmButtonNeomorph}
            >
              <Text style={[TextStyles.smallButtonText]}>Confirm</Text>
            </Neomorph>
          </TouchableOpacity>
          </View>
          )}
        </View>

     
    </View>
  );
};

export default CategoryModal;


