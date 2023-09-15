import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerModal = ({ visible, onClose, onDateSet }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    setSelectedDate(currentDate);
  }, []); // Set default date on component mount

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
  };

  const handleDone = () => {
    onDateSet(selectedDate);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <DateTimePicker
          value={selectedDate}
          mode="date" // Set to 'date' to allow only date selection
          display="default"
          onChange={handleDateChange}
          minimumDate={new Date()} // Optional: Set minimum date
        />
        <TouchableOpacity onPress={handleDone}>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DateTimePickerModal;
