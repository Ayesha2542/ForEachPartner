
import React, { useState,useContext } from 'react';
import { Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import AppContext from '../../Context/AppContext';


const SmallCard = ({navigation}) => {
  const {storeSelectedSubCategoryFeature} = useContext(AppContext);
  const [allCategories, setAllCategories] = useState([
    {
      id: '1',
      image: require('../../assets/Images/image16.png'),
      width: wp(25),
      height: hp(9),
      name: "Pizza"
    },
    {
      id: '2',
      image: require('../../assets/Images/image17.png'),
      width: wp(25),
      height: hp(9),
      name: "Burger"
    }, {
      id: '3',
      image: require('../../assets/Images/image18.jpg'),
      width: wp(30),
      height: hp(10),
      name: "Shawarma"
    }, {
      id: '4',
      image: require('../../assets/Images/image19.png'),
      width: wp(25),
      height: hp(10),
      name: "Biryani"
    }, {
      id: '5',
      image: require('../../assets/Images/image20.png'),
      width: wp(25),
      height: hp(11),
      name: "Pasta"
    }, {
      id: '6',
      image: require('../../assets/Images/image21.png'),
      width: wp(20),
      height: hp(10),
      name: "Chinese"
    },
  ])
  return (
    <FlatList
      data={allCategories}
      horizontal

      showsHorizontalScrollIndicator={false}
      return renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {
          storeSelectedSubCategoryFeature('SubCategory')
          navigation.navigate('FurtherScreens', {categoryName: item.name});
        }}>
          <Neomorph
            darkShadowColor={AppColors.Gray}
            lightShadowColor={AppColors.background2}
            swapShadows // <- change zIndex of each shadow color
            style={
              ContainerStyles.smallCategoriesNeomorphStyle
            }
          >
            <Image source={item.image} style={{ height: item.height, width: item.width, marginTop: hp('2'), marginLeft: wp('0'), }} />
          </Neomorph>
          <Text style={[TextStyles.smallText, { marginTop: 7 }]}>{item.name}</Text>
        </TouchableOpacity>
      )}

    />
  );
};

export default SmallCard;
