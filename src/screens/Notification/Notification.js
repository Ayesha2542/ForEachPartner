import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { List } from 'react-native-paper';
import ProfileHeader from '../../components/headers/ProfileHeader';
import AppColors from '../../assets/colors/AppColors';
import ContainerStyles from '../../assets/Styles/ContainerStyles';
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import IconStyles from '../../assets/Styles/IconStyles';


const notificationsData = [
  { id: '1', title: 'Order Confirmed', description: 'Your order #123 has been confirmed and is being prepared.' },
  { id: '2', title: 'Order Cencelled', description: 'Your order #123 has been cencelled.' },

  { id: '3', title: 'Delivery Update', description: 'Your delivery is on the way and will arrive in 10 minutes.' },
  // ... add more notification objects as needed
];

const Notification = ({navigation}) => {

  const renderNotification = ({ item }) => (
    <View style={{ alignItems: 'center' }}>

    <Neomorph
    darkShadowColor={AppColors.Gray}
    lightShadowColor={AppColors.darkgray}
    swapShadows // <- change zIndex of each shadow color
    style={[ContainerStyles.notificationInputFieldContainer]}>

    <List.Item
        title={item.title}
        description={item.description}
        left={() => < Entypo
            name="bell"
            size={35}
            color={AppColors.primary}
            style={[IconStyles.bellIcon]} />}
      />
    </Neomorph>
    </View>
  );

  return (
<SafeAreaView style={{flex:1,backgroundColor:AppColors.white}}>
    <ProfileHeader navigation={navigation} item="Notification" /> 

      <FlatList
        data={notificationsData}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
      />
</SafeAreaView>
  );

};

export default Notification;
