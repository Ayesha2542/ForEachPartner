import React,{useEffect,useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TextStyles from '../../assets/Styles/TextStyles';
import MainHeader from '../../components/headers/MainHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchComponent from '../../components/SearchComponent';
import AppColors from '../../assets/colors/AppColors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SmallCard from '../../components/Cards/SmallCard';
import LargeCard from '../../components/Cards/LargeCard';
const FoodShareScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 400); // Adjust the interval duration as needed (milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: AppColors.white, flex: 1}}>
      <MainHeader navigation={navigation} item="Share Food" />
      <ScrollView>
        <SearchComponent />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScheduleScreen');
          }}>
            
          <ImageBackground
            source={require('../../assets/Images/image40.jpg')}
            style={{height: hp(15), width: wp(80), margin: wp('10')}}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                width: wp('80%'),
                height: hp('15%'),
              }}>
              <View
                style={{
                  height: hp('10'),
                  width: wp('70'),
                  backgroundColor: AppColors.white,
                  margin: wp(4.5),
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <FontAwesome5
                name="question"
                size={wp('6%')}
                style={{color: AppColors.primary, marginTop: hp('1.6')}}
              /> */}
                <Text style={[TextStyles.mediumTextStyle,{display: isVisible ? 'flex' : 'none',color:"purple"}]}>
                  First check Schedule
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <SmallCard navigation={navigation} />
        <LargeCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodShareScreen;
