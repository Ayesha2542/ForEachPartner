import React from 'react'
import { StyleSheet } from 'react-native'
import AppColors from '../colors/AppColors';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
const TabBarStyles =StyleSheet.create({
    customTabBar:{
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.black,
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-SemiBold',
          textTransform: 'none',
        },
        tabBarItemStyle: {
          width: wp('40%'),
        },
        tabBarIndicatorStyle: {
          backgroundColor: AppColors.primary,
        },
        tabBarStyle: {
          backgroundColor: AppColors.white,
        },
    }
})

export default TabBarStyles