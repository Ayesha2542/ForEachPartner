import React from 'react';
import { StatusBar } from 'react-native';
import AppColors from '../assets/colors/AppColors';

const CustomStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent={true}
    />
  );
};

export default CustomStatusBar;