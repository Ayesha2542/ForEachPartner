import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import ProfileHeader from '../../components/headers/ProfileHeader';
import { Neomorph } from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles'

const Orders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
            <ProfileHeader navigation={navigation} item="Orders" /> 


<View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-evenly"}}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('OngoingOrder')
            }}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.darkOrange}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.OrdersContainer2}>
          <Text style={[TextStyles.primaryText2]}>OnGoing Order</Text>

          </Neomorph>
          </TouchableOpacity>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.darkOrange}
            swapShadows // <- change zIndex of each shadow color
            style={[ContainerStyles.smallNeomorphStyle,{marginTop:hp('27%')}]}>
                        <TouchableOpacity onPress={()=>{
            navigation.navigate('CompleteOrder')
          }}>

          <Text style={[TextStyles.primaryText2]}>Confirm Order</Text>
          </TouchableOpacity>

          </Neomorph>
          </View>
          <View style={{marginLeft:wp('5'),marginTop:hp('-8')}}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.darkOrange}
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.OrdersContainer2}>
                        <TouchableOpacity onPress={()=>{
              navigation.navigate('CancelOrder')
            }}>

          <Text style={[TextStyles.primaryText2]}>Cancel Order</Text>
          </TouchableOpacity>

          </Neomorph>
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
