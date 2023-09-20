import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, {Marker} from 'react-native-maps';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../../assets/colors/AppColors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconStyles from '../../assets/Styles/IconStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddAddress = ({navigation}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['60%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  const [muhala, setMuhala] = useState('');
  const [streetNum, setStreetNum] = useState('');
  const [streetName, setStreetName] = useState('');
  const [elaqa, setElaqa] = useState('');
  const [floor, setFloor] = useState('');

  return (
    <View style={{flex: 1}}>
      <View style={{height: 800, width: 400}}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 32.1877,
            longitude: 74.1945,
            latitudeDelta: 0.215,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            draggable={true}
            coordinate={{
              latitude: 32.1877,
              longitude: 74.1945,
            }}
            title="Custom Marker"
            description="This is a custom marker"></Marker>
        </MapView>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <ScrollView contentContainerStyle={styles.bottomSheetContent}>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: hp('2.3'),
                color: AppColors.black,
                marginLeft: wp('4%'),
              }}>
              Add a new address
            </Text>

            <View style={{flexDirection: 'row', width: wp('100%')}}>
              <FontAwesome
                name="home"
                size={20}
                color={AppColors.primary}
                style={[IconStyles.LocationIcon]}
              />
              <View style={{width: wp('70'), height: hp('5')}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    color: AppColors.black,
                    marginTop: hp('2'),
                    marginLeft: wp('2'),
                  }}>
                  {' '}
                  750 B Markazi Jamia Masjid Road
                </Text>
              </View>
              <MaterialIcons
                name="edit"
                size={20}
                color={AppColors.primary}
                style={[IconStyles.EditIcons, {marginLeft: wp('5')}]}
              />
            </View>
            <Text style={{marginLeft: wp('12')}}>Gujranwala</Text>
            <View style={styles.container}>
              <FloatingLabelInput
                label="Muhala"
                value={muhala}
                onChangeText={text => {
                  setMuhala(text);
                }}
              />
              <FloatingLabelInput
                label="Street/House Num..."
                value={streetNum}
                onChangeText={Number => {
                  setStreetNum(Number);
                }}
              />
              <FloatingLabelInput
                label="Street Name/Number"
                value={streetName}
                onChangeText={text => {
                  setStreetName(text);
                }}
              />
              <FloatingLabelInput
                label="Elaqa"
                value={elaqa}
                onChangeText={text => {
                  setElaqa(text);
                }}
              />
              <FloatingLabelInput
                label="Floor"
                value={floor}
                onChangeText={text => {
                  setFloor(text);
                }}
              />

              {/* Other fields */}
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: hp('2.3'),
                color: AppColors.black,
                marginLeft: wp('4%'),
              }}>
              Add a label
            </Text>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => {}}>
                <Neomorph
                  darkShadowColor={AppColors.Gray}
                  lightShadowColor={AppColors.background2}
                  swapShadows // <- change zIndex of each shadow color
                  style={[
                    ContainerStyles.smallCircleNeomorph,
                    {marginLeft: wp('4')},
                  ]}>
                  <Ionicons
                    name="home-outline"
                    size={20}
                    color={AppColors.primary}
                    style={[IconStyles.smallNeomorphIcon]}
                  />
                </Neomorph>
                <Text style={{marginLeft: wp('6'),marginTop:hp('1'),color:AppColors.black}}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <Neomorph
                  darkShadowColor={AppColors.Gray}
                  lightShadowColor={AppColors.background2}
                  swapShadows // <- change zIndex of each shadow color
                  style={[
                    ContainerStyles.smallCircleNeomorph,
                    {marginLeft: wp('6')},
                  ]}>
                  
                  <Fontisto
                    name="laptop"
                    size={20}
                    color={AppColors.primary}
                    style={[IconStyles.smallNeomorphIcon]}
                  />
                </Neomorph>
                <Text style={{marginLeft: wp('9'),marginTop:hp('1'),color:AppColors.black}}>Work</Text>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <Neomorph
                  darkShadowColor={AppColors.Gray}
                  lightShadowColor={AppColors.background2}
                  swapShadows // <- change zIndex of each shadow color
                  style={[
                    ContainerStyles.smallCircleNeomorph,
                    {marginLeft: wp('6')},
                  ]}>
                  
                  <AntDesign
                    name="hearto"
                    size={20}
                    color={AppColors.primary}
                    style={[IconStyles.smallNeomorphIcon]}
                  />
                </Neomorph>
                <Text style={{marginLeft: wp('8'),marginTop:hp('1'),color:AppColors.black}}>Partner</Text>

              </TouchableOpacity>

             
            </View>
          </View>
        </ScrollView>

        <View style={{height: hp(10)}}>
          <TouchableOpacity onPress={() => { navigation.navigate('Address')}}>
            <Neomorph
              // darkShadowColor={AppColors.primary}
              lightShadowColor={AppColors.background}
              // inner // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              style={ContainerStyles.touchableOpacityNeomorphContainer2}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={[TextStyles.whiteCenteredLable2]}>
                  Save and continue
                </Text>
              </View>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    marginLeft: wp('4%'),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  bottomSheetContent: {
    flexGrow: 1, // Ensure content grows vertically to allow scrolling
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default AddAddress;
