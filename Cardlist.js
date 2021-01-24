import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Buttonn from './Buttom';
import Swiper from 'react-native-swiper';
const Cardlist = ({title, description, price, onAdd, unit, onRemove}) => {
  // console.log('hiyy');
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./images/burger_icon.jpg')}
          style={styles.tinyLogo}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '',
          flex: 1,
          justifyContent: 'space-between',
          margin: 5,
        }}>
        <View style={{justifyContent: 'space-around'}}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '500'}}>{description}</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-around'}}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>$ {price}</Text>
          </View>
          <View>
            <Buttonn onAdd={onAdd} onRemove={onRemove} unit={unit} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#fff',
    height: 100,
    width: 400,
    borderRadius: 20,
    flexDirection: 'row',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,

    borderRadius: 20,
  },
});
export default Cardlist;
