import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Buttonn from './Buttom';
const Cardlist = () => {
  // console.log('hiyy');
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./images/burger_icon.jpg')}
      />
      <View
        style={{
          flexDirection: 'column',
          position: 'relative',
          top: 20,
          right: 0,
          justifyContent: 'flex-end',
        }}>
        <View style={{position: 'absolute', top: -59, right: 200}}>
          <Text style={{backgroundColor: '#fff', fontSize: 20}}>
            food name{' '}
          </Text>
          <Text style={{backgroundColor: '#fff', fontSize: 20}}>desc</Text>
        </View>
        <View style={{position: 'absolute', right: 0}}>
          <Text style={{fontSize: 20}}> price</Text>
          <Buttonn />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    height: 100,
    width: 400,
    borderRadius: 10,
    margin: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 10,
    top: 0,
  },
});
export default Cardlist;
