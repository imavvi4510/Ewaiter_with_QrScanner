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

const Buttonn = ({unit, onAdd, onRemove}) => {
  if (unit > 0) {
    return (
      <View style={styles.optionView}>
        <TouchableOpacity style={styles.butnPulsMins} onPress={() => onAdd()}>
          <Text
            // onPress={() => console.log('add mfffffffffe')}
            style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
            +
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{unit}</Text>
        </View>

        <TouchableOpacity
          style={styles.butnPulsMins}
          onPress={() => onRemove()}>
          <Text
            // onPress={() => console.log('add mfffffffffe')}
            style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={styles.btn} onPress={() => onAdd()}>
        <Text style={{fontSize: 18, color: 'red'}}>add</Text>
      </TouchableOpacity>
    );
  }
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
    backgroundColor: '#fff',
  },
  optionView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  butnPulsMins: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.3,
    height: 30,
    width: 40,
  },
});
export default Buttonn;
