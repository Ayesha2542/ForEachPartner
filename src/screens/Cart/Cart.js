import React,{useState,useContext} from 'react';
import {SafeAreaView, View, Image,Text,ScrollView, TouchableOpacity,FlatList} from 'react-native';
import CartHeader from '../../components/headers/CartHeader';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppColors from '../../assets/colors/AppColors';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextStyles from '../../assets/Styles/TextStyles';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import OtherStyles from '../../assets/Styles/OtherStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import CartPopularItems from '../../components/Cards/CartPopularItems';
import CartCard from '../../components/CartCard';
import AppContext from '../../Context/AppContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
const Cart = ({navigation}) => {
  const {myCart} = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(1);
  const [allResturantsCards, setAllResturantsCards] = useState([
    {
      uri: require('../../assets/Images/image38.jpg'),
      title: 'Summer Deal',
      Rupees: 'Rs.330',
      // top: hp('27'), // Match the marginTop of the first Neomorph
      // left: wp('15'),
    },
   
  ]);

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
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.white}}>
      <CartHeader navigation={navigation} item="Cart" />
      <ScrollView>
        <View style={{margin: hp('2'), alignItems: 'center'}}>
          <Neomorph
            darkShadowColor={AppColors.primary}
            lightShadowColor={AppColors.background}
            // inner // <- enable shadow inside of neomorph
            swapShadows // <- change zIndex of each shadow color
            style={ContainerStyles.cartNeomorph}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/Images/deliveryboy.jpg')}
                style={[ImageStyles.deliveryImg]}
              />
              <View style={{flexWrap: 'wrap'}}>
                <Text
                  style={{marginTop: hp('4'), fontFamily: 'Poppins-SemiBold'}}>
                  Estimated delivery
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: hp('2.5%'),
                    fontWeight: 'bold',
                    color: AppColors.black,
                  }}>
                  Now (30 min)
                </Text>
              </View>
            </View>
          </Neomorph>
        </View>

        {/* <CartCard /> */}
        <FlatList
          data={myCart}
          scrollEnabled={false} // Disable the scroll behavior
          Vertical
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
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
        source={item.imageUri} // Specify the source of the image
        style={[ImageStyles.cartImage]} // Set the desired width and height of the image
      />
      <View
        style={{
         marginTop:hp('3'),
         marginLeft:wp('2.5')
          
        }}>
          <View style={{width:wp('47')}}>
        <Text style={[OtherStyles.text]}>{item.imageTitle}</Text>
        </View>
        <Text style={{color: AppColors.black}}>{item.imagePrice}</Text>
      </View>
      <View>
      <TouchableOpacity style={{marginLeft:wp('2'),marginTop:hp('4.5')}}>
        <FontAwesome name="trash" size={20} color={AppColors.primary} />
      </TouchableOpacity>
      </View>
    </View>
            );
          }}
        />

        <TouchableOpacity>
          <Text style={[TextStyles.text3]}>Add more items</Text>
        </TouchableOpacity>
        <View
          style={{
            height: hp('0.8'),
            backgroundColor: AppColors.background,
            marginVertical: hp(3.7),
          }}></View>
        <Text style={[OtherStyles.text4]}>Popular with your order</Text>
        <Text style={{marginLeft: wp('4')}}>
          Other customer also bought these
        </Text>

        <CartPopularItems />
      </ScrollView>
      <TouchableOpacity>
      <Neomorph
        // darkShadowColor={AppColors.primary}
        lightShadowColor={AppColors.background}
        // inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        style={ContainerStyles.touchableOpacityNeomorphContainer2}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[TextStyles.whiteCenteredLable2]}>
              Confirm payment and address
            </Text>
        </View>
      </Neomorph>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Cart;
















