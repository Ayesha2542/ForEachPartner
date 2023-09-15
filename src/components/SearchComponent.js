import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppColors from '../assets/colors/AppColors';
import IconStyles from '../assets/Styles/IconStyles';
import { Neomorph } from 'react-native-neomorph-shadows';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ContainerStyles from '../assets/Styles/ContainerStyles';

const SearchComponent = () => {
  return (
    <View style={{ borderBottomWidth: 1, borderColor: AppColors.background }}>
      <View>
        <Neomorph
          darkShadowColor={AppColors.primary}
          lightShadowColor={AppColors.background}
          // inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={[ContainerStyles.searchNeomorphStyle]}
          >
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <EvilIcons
              name="search"
              size={wp('6%')}
              style={IconStyles.signupIcons}
            />
            <TextInput
              placeholder="Search for restaurant,food......"
            />
          </View>
        </Neomorph>
      </View>
    </View>
  )
};

export default SearchComponent;
