import React,{useContext} from 'react';
import DrawerHeader from '../../components/headers/DrawerHeader';
import { SafeAreaView, ScrollView, FlatList,StatusBar } from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import { useRoute } from '@react-navigation/native'; // Import useRoute
import SmallCard from '../../components/Cards/SmallCard';
import AppContext from '../../Context/AppContext';

const Home = ({ navigation }) => {
  const {currentUser} = useContext(AppContext)
  const route = useRoute(); 
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
        data={currentUser.restaurantCategories}
        numColumns={2}
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
