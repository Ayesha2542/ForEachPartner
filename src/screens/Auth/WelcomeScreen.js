import React, { useState,useEffect} from 'react';
import {SafeAreaView,TouchableOpacity,View,Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import LottieView from 'lottie-react-native';
import { useRoute } from '@react-navigation/native';
import BackButtonHeader from '../../components/headers/BackButtonHeader';

const WelcomeScreen = ({ navigation }) => {
  const route = useRoute(); 
  const { selectedCategories } = route.params || {};
  const [shouldNavigate, setShouldNavigate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldNavigate(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (shouldNavigate) {
      navigation.navigate('Home',{
      selectedCategories:selectedCategories
      });
    }
  }, [shouldNavigate, navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <BackButtonHeader navigation={navigation} />
      <Text style={[TextStyles.primaryText2, { margin: wp('10') }]}>
        Registration Successfully Done
      </Text>
      <View style={{ alignItems: 'center', alignContent: 'center' }}>
        <LottieView
          source={require('../../assets/animations/SuccessfullyDone.json')}
          autoPlay
          loop
          style={{ width: 200, height: 200 }} 
          speed={1.5}
        />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ margin: wp('22') }}>
          Your request has reached the Admin. Please wait until your request is
          verified.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
