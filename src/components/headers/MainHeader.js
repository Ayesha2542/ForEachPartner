import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, FlatList,StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import TextStyles from '../../assets/Styles/TextStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import IconStyles from '../../assets/Styles/IconStyles';
const MainHeader = ({ navigation, item }) => {
  return (   
    <View style={{ backgroundColor: AppColors.white,marginTop:hp('3') }}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="white"
     
    />
      <View style={[ContainerStyles.PrimaryheaderViewStyle]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={wp('6%')} style={[IconStyles.arrowLeftIcon]} />
        </TouchableOpacity>
        <View style={{ flexDirection: "column",height:hp(10),width:wp('50') }}>
          <Text style={[TextStyles.leftText,{marginTop:hp('2.5'),marginLeft:wp('5')}]}>Home</Text>
          <Text style={[TextStyles.fetchTextStyle]}>{item}</Text>
        </View>
<View style={{marginTop:20}}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Cart')
        }}>
          <AntDesign name="shoppingcart" size={wp('6%')} style={[IconStyles.shoppingCartIcon]} />
        </TouchableOpacity>
        </View>
      </View>
      </View>
     
  )
};

export default MainHeader;
