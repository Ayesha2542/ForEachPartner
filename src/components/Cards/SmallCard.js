import React,{useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import axios from 'axios';
import AppContext from '../../Context/AppContext';

const SmallCard = ({navigation, item}) => {
  const {baseUrl,storeUpdateCategoryName} = useContext(AppContext)
  const[allCategories,setAllCategories]=useState([])

  const categoryImages = allCategories.reduce((acc, category) => {
    acc[category.title] = category.categoryImage;
    return acc;
  }, {});

    useEffect(() => {
    const viewAllCategories = async () => {
      try {
        const response = await axios.post(`${baseUrl}/viewAllCategories`);

        setAllCategories(response.data);
        
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    viewAllCategories();
  }, []);
  

  const categoryImage = categoryImages[item];
  return (
    <View style={{marginLeft: wp('11'), marginTop: hp('2')}}>
      <TouchableOpacity onPress={() =>{
       storeUpdateCategoryName({
        categoryName:item, 
      })
       navigation.navigate('Products')}}>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.smallCategoriesNeomorphStyle}>
          {/* Display the category image */}
          <Image
            source={{uri: baseUrl+categoryImage}}
            style={{width: wp(25), height: hp(9.5),marginTop:hp('2')}}
          />
        </Neomorph>
        <Text style={[TextStyles.smallText, {marginTop: 7}]}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SmallCard;