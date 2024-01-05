import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Button} from 'react-native-paper';
import ImageStyles from '../../assets/Styles/ImageStyles';
import {SafeAreaView} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import ProfileHeader from '../../components/headers/ProfileHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import OtherStyles from '../../assets/Styles/OtherStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconStyles from '../../assets/Styles/IconStyles';

const Deals = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const OpenModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const [ongoingOrders, setOngoingOrders] = useState([
    {
      id: '1',
      name: 'Delux Thali',
      price: 1200,
      description:"Shahi Paneer, Mix Veg, Daal Makhni, 3 Roti, Rice, Curd, Salad",
      uri: require('../../assets/Images/image39.jpg'),
    },
   
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <ProfileHeader navigation={navigation} item="Speacial Deals" />

      <FlatList
        data={ongoingOrders}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
                paddingBottom: hp('2'),
              }}>
              <TouchableOpacity onPress={OpenModal}>
                <View style={{flexDirection: 'row', width: wp('70')}}>
                  <Image
                    source={item.uri}
                    style={[
                      ImageStyles.orderImage,
                      {width: wp('20'), height: hp('10')},
                    ]}
                  />

                  <View
                    style={{
                      marginTop: hp('3'),
                      marginLeft: wp('2.5'),
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: hp(2),
                        color: AppColors.black,
                      }}>
                      {item.name}
                    </Text>

                    <Text>
                     {item.description}
                    </Text>
                    <Text style={[TextStyles.fetchTextStyle,{marginLeft:0}]}>Total Rs.{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
                >
               
               
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Image
                      source={require('../../assets/Images/burger.jpg')}
                      style={{height: hp('20'), width: wp('81')}}
                    />
                    <Text style={[TextStyles.leftMediumText, {marginLeft: 0}]}>
                      Delux Thali
                    </Text>
                    <Text>
                      Shahi Paneer , Mix Veg , Daal Makhni , 3 Roti , Rice ,
                      Curd , Salad
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity>
                        <View
                          style={{
                            borderWidth: 1.5,
                            borderRadius: 8,
                            borderColor: 'darkgray',
                            height: hp('5'),
                            width: wp('30'),
                            marginTop: hp('5'),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{}}>Edit item</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View
                          style={{
                            borderWidth: 1.5,
                            borderRadius: 8,
                            borderColor: 'darkgray',
                            height: hp('5'),
                            width: wp('30'),
                            marginTop: hp('5'),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{}}>Delete item</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              
            </View>
            
          );
        }}
      />
      <TouchableOpacity
            onPress={() => {
            navigation.navigate('AddFoodItems')
    
            }}>
            <Neomorph
              darkShadowColor={AppColors.white}
              lightShadowColor={AppColors.white}
              swapShadows // <- change zIndex of each shadow color
              style={[ContainerStyles.touchableOpacityNeomorphContainer,{width:wp('70%'),marginLeft:wp('15')}]}>
              <Text style={TextStyles.whiteCenteredLable}>Add Item</Text>
            </Neomorph>
          </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
});
export default Deals;
