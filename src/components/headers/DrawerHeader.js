import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import AppColors from '../../assets/colors/AppColors';
import IconStyles from '../../assets/Styles/IconStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text} from 'react-native-paper';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import AppContext from '../../Context/AppContext';
import axios from 'axios';
const DrawerHeader = ({navigation}) => {
  const {baseUrl, storeUpdateCategoryName, currentUser} =
    useContext(AppContext);
  // const[allCategories,setAllCategories]=useState([])
  // useEffect(() => {

  //   const viewAllCategories = async () => {
  //     try {
  //       const response = await axios.post(`${baseUrl}/viewAllRestaurants`);

  //       setAllCategories(response.data);

  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };
  //   viewAllCategories();
  // }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: AppColors.primary,
          height: hp('20'),
          width: wp('100'),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Ionicons
              name="menu-outline"
              size={wp('10')}
              style={[IconStyles.drawerManuIcon]}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: hp('3.5'),
              marginTop: hp('5'),
              marginRight: wp('7'),
            }}>
            Categories
          </Text>
        </View>

        <View
          style={{
            width: wp('100%'),
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            marginTop: hp('1'),
            height: hp('12'),
            backgroundColor: 'white',
          }}></View>
        {/* <Svg
          height={100}
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 320"
          style={{
            bottomWavy: {
              position: 'absolute',
              bottom: 20,
            },
          }}>
          <Path
            fill={AppColors.primary}
            d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
           
        </Svg> */}
      </View>
    </View>
  );
};

export default DrawerHeader;
