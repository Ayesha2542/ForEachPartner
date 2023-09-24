import React from 'react';
import DrawerHeader from '../../components/headers/DrawerHeader';
import { Neomorph } from 'react-native-neomorph-shadows';
import {Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList,StatusBar } from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import TextStyles from '../../assets/Styles/TextStyles';
import { useRoute } from '@react-navigation/native'; // Import useRoute
import SmallCard from '../../components/Cards/SmallCard';

const Home = ({ navigation }) => {
  const route = useRoute(); // Use useRoute hook
  const { selectedCategories } = route.params || {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
      <DrawerHeader navigation={navigation} />
      <StatusBar
                barStyle="light-content"
                backgroundColor={AppColors.primary}
                translucent={true}
            />
     <ScrollView>
      <FlatList
        data={selectedCategories}
        numColumns={2} // Set the number of columns to 2
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => {
          return( <SmallCard navigation={navigation} item={item} /> 
          );
        }}
 
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
