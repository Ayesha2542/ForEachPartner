import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import AppColors from '../assets/colors/AppColors';
import {Touchable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconStyles from '../assets/Styles/IconStyles';
import ImageStyles from '../assets/Styles/ImageStyles';
import OtherStyles from '../assets/Styles/OtherStyles';

const CartCard = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if(count>1){
    setCount(count - 1);
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{flexDirection: 'row',borderBottomWidth: wp('0.4'),
    borderColor: AppColors.background,height:hp('14')}}>
  
      <Neomorph
        swapShadows // <- change zIndex of each shadow color
        style={{
          // borderRadius: 10,
          borderWidth: 0.5,
          borderColor: 'lightgray',
          backgroundColor: 'white',
          width: wp('13'),
          height: hp('5'),
          marginLeft: wp('4'),
          marginTop: hp('3'),
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
          onPress={toggleModal}>
          <Text style={{textAlign: 'center', marginTop: hp('1.3')}}>
            {count}
          </Text>
          <AntDesign
            name="down"
            size={wp('3.5%')}
            style={{color: AppColors.primary, marginTop: hp('1.6')}}
          />
        </TouchableOpacity>
      </Neomorph>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
        onRequestClose={toggleModal}>
        <View
          style={{
            position: 'absolute',
            top: hp('27.5'), // Match the marginTop of the first Neomorph
            left: wp('15'), // Adjust the marginLeft to move the modal to the right
          }}>
          <Neomorph
            style={{
              flexDirection: 'row',
              backgroundColor: AppColors.white,
              height: hp('7'),
              width: wp('30'),
              justifyContent: 'space-evenly',
              borderColor: 'lightgray',
              borderWidth: wp('0.2'),
              alignItems: 'center',
              
            }}>
            <TouchableOpacity
              onPress={() => {
                decrementCount();
                toggleModal();
              }}>
              <Text style={{color: AppColors.primary, fontSize: wp('6')}}>
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                incrementCount();
                toggleModal();
              }}>
              <Text style={{color: AppColors.primary, fontSize: wp('5')}}>
                +
              </Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      </Modal>
      <Image
        source={item.uri} // Specify the source of the image
        style={[ImageStyles.cartImage]} // Set the desired width and height of the image
      />
      <View
        style={{
         marginTop:hp('3'),
         marginLeft:wp('2.5')
          
        }}>
          <View style={{width:wp('47')}}>
        <Text style={[OtherStyles.text]}>{item.title}</Text>
        </View>
        <Text style={{color: AppColors.black}}>{item.Rupees}</Text>
      </View>
      <View>
      <TouchableOpacity style={{marginLeft:wp('2'),marginTop:hp('4.5')}}>
        <FontAwesome name="trash" size={20} color={AppColors.primary} />
      </TouchableOpacity>
      </View>
    </View>
    
  );
};
export default CartCard;
