import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const screenwidth = Dimensions.get('screen').width;

const HomeScreen = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('hii')}>
      <Image
        source={require('./images/burger.jpg')}
        style={{
          width: screenwidth - 20,
          height: 220,
          borderRadius: 20,
          backgroundColor: 'red',
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'green',
    width: screenwidth - 20,
    height: 220,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
  },
  // navigation: {
  //   flex: 1,
  //   backgroundColor: 'red',
  // },
  // body: {
  //   flex: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'yellow',
  // },
  // footer: {
  //   flex: 1,
  //   backgroundColor: 'cyan',
  // },
});

export default HomeScreen;
