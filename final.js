import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const Final = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#112917" barStyle="light-content" />
      <View style={styles.header}>
        {/* <Animatable.Image
          animation="lightSpeedOut"
          duration="1500"
          source={require('./images/wait.jpeg')}
          style={styles.logo}
          resizeMode="stretch"
        /> */}
      </View>
      {/* <Animatable.View
        style={[styles.footer]}
        animation="lightSpeedOut"
        duration="1500">
        <Text style={[styles.title]}>WAITING FOR CONFORMATION</Text>
        <Text style={styles.text}></Text>
        <View style={styles.button}></View>
      </Animatable.View> */}
      <View style={styles.header}>
        <Animatable.Image
          animation="flash"
          duration="1550"
          source={require('./images/done1.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View
        style={{justifyContent: 'center', alignItems: 'center'}}
        animation="flash"
        duration='1500'>
        <Text style={[styles.title]}>ODER SUCCESSFUL</Text>
        <Text style={styles.text}></Text>
        <View style={styles.button}></View>
      </Animatable.View>
    </View>
  );
};

export default Final;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112917',
  },
  header: {
    flex: 0.5,
    // justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    // backgroundColor:'red'
  },
  footer: {
    // flex: 0.5,
    backgroundColor: '#112917',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 100,
    borderColor: '#112917',
    borderWidth: 19,
  },
  title: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'red',
    fontWeight: 'bold',
  },
});
