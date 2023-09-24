import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import pizzaImage from '../../assets/Images/image16.png'; // Replace with the actual image path for pizza
import burgerImage from '../../assets/Images/image17.png'; // Replace with the actual image path for burger
import ShawarmaImage from '../../assets/Images/image18.jpg'; // Replace with the actual image path for burger
import BiryaniImage from '../../assets/Images/image19.png'; // Replace with the actual image path for burger
import PastaImage from '../../assets/Images/image20.png'; // Replace with the actual image path for burger
import ChineseImage from '../../assets/Images/image21.png'; // Replace with the actual image path for burger

const SmallCard = ({navigation, item}) => {
  const categoryImages = {
    Pizza: pizzaImage,
    Burger: burgerImage,
    Shawarma: ShawarmaImage,
    Biryani: BiryaniImage,
    Pasta: PastaImage,
    Chinese: ChineseImage,
    // Add more mappings for other categories
  };

  const categoryImage = categoryImages[item];

  return (
    <View style={{marginLeft: wp('11'), marginTop: hp('3.9')}}>
      <TouchableOpacity onPress={() => navigation.navigate('Products')}>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          swapShadows // <- change zIndex of each shadow color
          style={ContainerStyles.smallCategoriesNeomorphStyle}>
          {/* Display the category image */}
          <Image
            source={categoryImage}
            style={{width: wp(25), height: hp(9.5),marginTop:hp('2')}}
          />
        </Neomorph>
        <Text style={[TextStyles.smallText, {marginTop: 7}]}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SmallCard;
