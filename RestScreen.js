import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  FlatList,
} from 'react-native';

const screenwidth = Dimensions.get('screen').width;
const mapper = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
import Cardlist from './Cardlist';

const Restscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ImageBackground
          source={require('./images/burger.jpg')}
          style={{
            width: Dimensions.get('screen').width,
            height: 300,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 120,
              backgroundColor: 'rgba(0,0,0,0.6)',
              padding: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 40, fontWeight: '700'}}>
              restro name
            </Text>
            <Text style={{color: '#fff', fontSize: 25, fontWeight: '500'}}>
              restro adress
            </Text>
          </View>
        </ImageBackground>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={mapper}
          renderItem={() => <Cardlist />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigation: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 43,
    paddingLeft: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default Restscreen;
