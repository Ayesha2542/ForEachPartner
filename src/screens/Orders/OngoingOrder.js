import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import ImageStyles from '../../assets/Styles/ImageStyles';
import { SafeAreaView } from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import ProfileHeader from '../../components/headers/ProfileHeader';

const ongoingOrder = {
  orderId: '#12345',
  restaurantName: 'Delicious Eats',
  items: [
    { id: '1', name: 'Cheeseburger', price: 10.99 },
    { id: '2', name: 'French Fries', price: 4.99 },
    // ... add more items
  ],
  total: 15.98,
};

const OngoingOrder = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
  <ProfileHeader navigation={navigation} item="OnGoing Order" /> 
      
      <Text style={styles.orderId}>Order ID: {ongoingOrder.orderId}</Text>
      <Text style={styles.restaurantName}>{ongoingOrder.restaurantName}</Text>

      {ongoingOrder.items.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      ))}

      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${ongoingOrder.total.toFixed(2)}</Text>
      </View>

      <Image
        source={require('../../assets/Images/donate2.jpg')}
        style={styles.orderImage}
      />

      <Button mode="contained" style={styles.button}>
        Contact Support
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:AppColors.white
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
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingTop: 10,
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
});

export default OngoingOrder;
