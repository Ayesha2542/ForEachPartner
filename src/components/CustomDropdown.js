import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AppColors from '../assets/colors/AppColors';
const CustomDropdown = ({options, onSelect, isOpen, toggleDropdown}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={{
          height: hp('3'),
          width: wp('18'),
          borderWidth: wp('0.3'),
          borderColor: AppColors.primary,
          borderRadius: wp('1'),
          marginLeft: wp('3'),
          marginTop: hp('1'),
        }}>
        <Text>{selectedValue || 'Select an option'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={options}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedValue(item);
                onSelect(item);
                toggleDropdown(); // Close the dropdown when an option is selected
              }}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default CustomDropdown;
