import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import ProfileHeader from '../../components/headers/ProfileHeader';
import { Neomorph } from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
const Orders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
            <ProfileHeader navigation={navigation} item="Orders" /> 
            <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('OngoingOrder')
            }}>
          <Neomorph
            // darkShadowColor={AppColors.primary}
            // lightShadowColor={AppColors.darkOrange}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.OrdersContainer2}>
              <ImageBackground
              source={require('../../assets/Images/image7.png')}
              style={{height:hp('15'),width:wp('90'),  borderRadius: 25,
            }}
              >
                <View style={{height:hp('15'),width:wp('90'),backgroundColor: 'rgba(0,0,0,0.5)',  borderRadius: 25,
}}
                  >
                  <Text style={[TextStyles.primaryText2]}>OnGoing Order</Text>

                </View>

              </ImageBackground>
          {/* <Text style={[TextStyles.smallText,{textAlign:"center",marginRight:wp('3%')}]}>Be A Giving Heart</Text> */}

          </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
              navigation.navigate('OngoingOrder')
            }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.darkOrange}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.OrdersContainer2}>
          <Text style={[TextStyles.primaryText]}>Completed Order</Text>
          {/* <Text style={[TextStyles.smallText,{textAlign:"center",marginRight:wp('3%')}]}>Be A Giving Heart</Text> */}

          </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
              navigation.navigate('OngoingOrder')
            }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.darkOrange}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.OrdersContainer2}>
          <Text style={[TextStyles.primaryText]}>Cancle Order</Text>
          {/* <Text style={[TextStyles.smallText,{textAlign:"center",marginRight:wp('3%')}]}>Be A Giving Heart</Text> */}

          </Neomorph>
          </TouchableOpacity>

</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:AppColors.white
  },

});

export default Orders;
