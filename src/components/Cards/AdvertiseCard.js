import React, { useState } from 'react';
import {Image, FlatList, TouchableOpacity } from 'react-native';
import ImageStyles from '../../assets/Styles/ImageStyles';
const AdvertiseCard = ({navigation}) => {
  const [allAdvertisementCards, setAllAdvertisementCards] = useState([
    {
      uri: require('../../assets/Images/image25.jpg'),
    },
    {
      uri: require('../../assets/Images/image26.jpg'),
    }, {
      uri: require('../../assets/Images/image27.jpg'),
    }, {
      uri: require('../../assets/Images/image28.jpg'),
    }, {
      uri: require('../../assets/Images/image29.jpg'),
    }, {
      uri: require('../../assets/Images/image30.jpg'),
    },
  ])

  return (
    <FlatList
      data={allAdvertisementCards}
      horizontal
      showsHorizontalScrollIndicator={false}
      return renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {
          navigation.navigate('FurtherScreens', {categoryName: item.name});
        }}>
          <Image source={item.uri} style={[ImageStyles.advertiseImageStyle]} />
        </TouchableOpacity>
      )}
    />
  );
};
export default AdvertiseCard;