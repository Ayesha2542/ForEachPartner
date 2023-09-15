import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import AppColors from '../assets/colors/AppColors';

const FloatingLabelInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: isFocused || props.value ? -3 : 12,
    fontSize: isFocused || props.value ? 14 : 15,
    color: isFocused ? 'black' : '#666',
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginVertical: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 12,
  },
});

export default FloatingLabelInput;




