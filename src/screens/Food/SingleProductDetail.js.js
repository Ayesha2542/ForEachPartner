import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native';
import {SafeAreaView} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import ProductCard from '../../components/Cards/ProductsCard';
import ProductsBackButton from '../../components/headers/ProductsBackButton';
import { TextInput } from 'react-native-paper';
import TextFieldStyles from '../../assets/Styles/TextFieldStyles';
import AppContext from '../../Context/AppContext';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

const SingleProductDetail = ({navigation, route,item}) => {
  const {baseUrl} = useContext(AppContext);
  const [allProducts, setAllProducts] = useState([]);
  const viewAllProducts = async () => {
    try {
      const response = await axios.post(`${baseUrl}/viewAllProducts`);
      setAllProducts(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  useFocusEffect(React.useCallback(
    ()=>{
    viewAllProducts();
},[]
))


    const {productImage, imageTitle, imagePrice,description} = route.params;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
  
        <ImageBackground
                    source={{uri:productImage}}

style={{height: hp('30%'), width: wp('100%')}}>
          <ProductsBackButton navigation={navigation} />
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            width: wp('100%'),
            // justifyContent: 'space-evenly',
          }}>
              {/* <Text style={[TextStyles.leftMediumText2]}>Flavour</Text> */}

          <Text style={[TextStyles.leftText]}>{imageTitle}</Text>
        </View>
       
  {/* <Text style={[TextStyles.leftMediumText,{marginTop:hp('5%')}]}>Description</Text> */}
  <Text style={{
    fontFamily: 'Poppins-Regular',
    marginTop: hp('1.5'),
    textAlign: 'justify', // You can use 'left' if you want strict left alignment
    paddingRight: 16, // Adjust the padding as per your design
    paddingLeft: 16,
  }}>
    {description}
</Text>

        
     
        <Text style={[TextStyles.foodPrices]}>
           Rs.{imagePrice}
          </Text>

  
      </SafeAreaView>
    );
  };
  
  export default SingleProductDetail;
  
