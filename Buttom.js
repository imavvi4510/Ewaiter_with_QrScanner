import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const Buttonn = () => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => console.log('add me')}>
      <Text
        // onPress={() => console.log('add mfffffffffe')}
        style={{fontSize: 22, color: '#fff'}}>
        ADD
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 40,
    height: 40,
    // alignSelf: 'center',
    borderRadius: 0,
    backgroundColor: 'blue',
  },
});
export default Buttonn;
