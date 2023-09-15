import React, {useContext, useState} from 'react';
import {Image} from 'react-native';
import {Text, TouchableOpacity, View, Modal, Button} from 'react-native';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import AppContext from '../../Context/AppContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';
import AppColors from '../../assets/colors/AppColors';

const DealCard = ({navigation, item}) => {
  const {
    selectedSubCategoryFeature,
    selectedFoodFeature,
    selectedRestaurants,
    storeInSchedule,
    storeInCart,
  } = useContext(AppContext);

  const [isAddedIntoSchedule, setIsAddedIntoSchedule] = useState('');
  const [isAddedIntoCart, setIsAddedIntoCart] = useState('');

  if (
    selectedFoodFeature === 'Full Price Food' &&
    selectedSubCategoryFeature === 'SubCategory' &&
    selectedRestaurants == 'Restaurants'
  ) {
    navigateToScreen = 'Cart'; // Navigate to CartScreen
    DesiredText = ' ';
    AddItem ='Add To Cart'
  } else if (
    selectedFoodFeature === 'ShareFood' &&
    selectedSubCategoryFeature === 'SubCategory' &&
    selectedRestaurants == 'Restaurants'
  ) {
    navigateToScreen = 'ScheduleScreen'; // Navigate to ScheduleScreen
    DesiredText = 'First Set Date And Time';
    AddItem ='Add To Schedule'
  }
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDateTimePicker = () => setModalVisible(true);
  const hideDateTimePicker = () => setModalVisible(false);
  const handleDateConfirm = date => {
    setSelectedDate(date);
    hideDateTimePicker();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SingleProductDetail', {
            imageUri: item.uri,
            imageTitle: item.title,
            imagePrice: item.price,
          });
        }}>
        <Text style={[TextStyles.leftText, {marginTop: hp('0%')}]}>
          {item.title}
        </Text>
        <Text style={[TextStyles.dealText, {maxWidth: wp('60%')}]}>
          {item.description}
        </Text>
        <Text style={[TextStyles.dealPriceText]}>Rs. {item.price}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SingleProductDetail', {
            imageUri: item.uri,
            imageTitle: item.title,
            imagePrice: item.price,
          });
        }}>
        <View style={{position: 'absolute', left: wp('70%'), bottom: hp('0%')}}>
          <Image source={item.uri} style={[ImageStyles.smallSquareBoxImage]} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // let DetailObject = {
          //   imageUri: item.uri,
          //   imageTitle: item.title,
          //   imagePrice: item.price,
          //   imageDescription: item.description,
          //   selectedDate:selectedDate ? selectedDate.toString() : null,
          //   pricePerPerson:item.price/2,
          // };
          // storeInSchedule(DetailObject);
          setIsAddedIntoSchedule(!isAddedIntoSchedule);
          setIsAddedIntoCart(!isAddedIntoCart);
        }}>
        <View style={[ContainerStyles.productsCartButtonContainer]}>
          <Text
            style={[
              TextStyles.whiteCenteredLable,
              {
                fontSize: wp('6%'),
                marginTop: hp('0%'),
                fontFamily: 'Poppins-Regular',
              },
            ]}>
            +
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Modal
          visible={isAddedIntoCart}
          transparent={true}
          animationType="slide">
          <View
            style={{
              borderBlockColor: AppColors.primary,
              justifyContent: 'center',
              height:hp('35'),
              backgroundColor: AppColors.goldenYellow,
              alignItems: 'center',
              marginTop: 200,
              borderRadius:15
            }}
            >
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginRight: 15}}
              onPress={() => {
                setIsAddedIntoCart(!isAddedIntoCart);
              }}>
              <FontAwesome name="close" size={24} />
            </TouchableOpacity>
            <Lottie
              source={require('../../assets/animations/addToCart.json')}
              autoPlay
              loop
              style={{height: 100, width: 100}}
            />
            <TouchableOpacity onPress={showDateTimePicker}>
              <Text style={[TextStyles.simpleText2,{color:"red"}]}>{DesiredText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                let DetailObject = {
                  imageUri: item.uri,
                  imageTitle: item.title,
                  imagePrice: item.price,
                  imageDescription: item.description,
                  selectedDate: selectedDate ? selectedDate.toString() : null,
                  pricePerPerson: item.price / 2,
                };
                storeInSchedule(DetailObject);
                storeInCart(DetailObject);
                setIsAddedIntoSchedule(!isAddedIntoSchedule);
                setIsAddedIntoCart(!isAddedIntoCart);
              }}>
              <Text>{AddItem}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isModalVisible}
              mode="datetime"
              onConfirm={handleDateConfirm}
              onCancel={hideDateTimePicker}
            />
          </View>
        </Modal>
      </View>

      <View style={[ContainerStyles.bottomBorder]}></View>
    </View>
  );
};

export default DealCard;
