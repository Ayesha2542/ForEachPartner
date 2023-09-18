import React, { useContext } from 'react';
import DrawerHeader from '../../components/headers/DrawerHeader';
import { Neomorph } from 'react-native-neomorph-shadows';
import { Image, Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import ImageStyles from '../../assets/Styles/ImageStyles';
import AppContext from '../../Context/AppContext';
import RestaurantSmallCard from '../../components/Cards/RestaurantSmallCard';
import { useRoute } from '@react-navigation/native'; // Import useRoute

const Home = ({ navigation }) => {
  const route = useRoute(); // Use useRoute hook
  const { selectedCategories } = route.params || {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <DrawerHeader navigation={navigation} />
      <FlatList
        data={selectedCategories}
        numColumns={2} // Set the number of columns to 2
        keyExtractor={(category, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginLeft: wp('11'), marginTop: hp('3.9') }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('AddFoodItems')
            }}>
              <Neomorph
                darkShadowColor={AppColors.primary}
                lightShadowColor={AppColors.background}
                swapShadows // <- change zIndex of each shadow color
                style={[
                  ContainerStyles.smallCategoriesNeomorphStyle,
                  { shadowOpacity: 0.3, shadowRadius: 3 },
                ]}
              ></Neomorph>
              <Text style={[TextStyles.smallText, { marginTop: 7 }]}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
