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
      name: 'Cheeseburger',
      price: 1200,
      uri: require('../../assets/Images/image39.jpg'),
    },
    {
      id: '1',
      name: 'SpecialPizza',
      price: 1370,
      uri: require('../../assets/Images/pizza.jpg'),
    },
    {
      id: '1',
      name: 'Chinese',
      price: 1370,
      uri: require('../../assets/Images/image40.jpg'),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader navigation={navigation} item="Speacial Deals" />

      <FlatList
        data={ongoingOrders}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderBottomWidth: wp('0.4'),
                borderColor: AppColors.background,
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
                    <View key={item.id}>
                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-SemiBold',
                            fontSize: hp(2),
                            color: AppColors.black,
                          }}>
                          {item.name}
                        </Text>
                        <View style={{marginLeft: wp('25')}}></View>
                      </View>
                      <Text>
                        A cheesz burger is a delicious,classic fast-food
                      </Text>
                      <Text style={styles.itemPrice}>Rs.{item.price}</Text>
                    </View>
                  </View>
                </View>
                
              </TouchableOpacity>
              <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <Text>jdksjkdjskj</Text>
      </Modal>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    // alignItems:"center"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderId: {
    fontSize: 18,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: wp('45'),
  },
  totalContainer: {
    marginTop: 20,
    borderTopColor: 'lightgray',
    paddingTop: 10,
    flexDirection: 'row',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },

  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height:hp('40'),
    width:wp('80'),
    margin:hp('5'),
    marginTop:hp('20')
  },
});

export default Deals;
