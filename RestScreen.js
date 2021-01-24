import React, {useState} from 'react';
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
  SectionList,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Snackbar from 'react-native-snackbar';
// import snackbar from './snack';

const screenwidth = Dimensions.get('screen').width;
const mapper = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
import Cardlist from './Cardlist';
import {data} from './data';
import SnackBar from './snack';

const Restscreen = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedprice, setselectedprice] = useState({});
  console.log('hii>>>>>>>>>>>>>>', selectedItems, selectedprice);
  var result = Object.keys(selectedprice).reduce((prevValue, key) => {
    return prevValue + Number(key) * selectedprice[key];
  }, 0);
  console.log(result);
  Snackbar.show({
    text: `TOTAL: ${result}`,
    duration: Snackbar.LENGTH_INDEFINITE,
    action: {
      text: 'ORDER',
      textColor: 'green',
      onPress: () => {},
    },
  });
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#FF6347">
            <View style={styles.slide}>
              <Image
                source={require('./images/cusin_1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('./images/cusin_1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('./images/cusin_1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          data={mapper}
          renderItem={() => <Cardlist />}
        /> */}
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Cardlist
              {...item}
              unit={selectedItems[item.id]}
              onAdd={() => {
                setSelectedItems((prevItems) => {
                  return {
                    ...prevItems,
                    [item.id]: prevItems[item.id] ? prevItems[item.id] + 1 : 1,
                  };
                });

                setselectedprice((prevprice) => {
                  return {
                    ...prevprice,
                    [item.price]: prevprice[item.price]
                      ? prevprice[item.price] + 1
                      : 1,
                  };
                });
              }}
              onRemove={() => {
                setSelectedItems((prevItems) => {
                  return {
                    ...prevItems,
                    [item.id]: prevItems[item.id] ? prevItems[item.id] - 1 : 0,
                  };
                });
                setselectedprice((prevprice) => {
                  return {
                    ...prevprice,
                    [item.price]: prevprice[item.price]
                      ? prevprice[item.price] - 1
                      : 0,
                  };
                });
              }}
            />
          )}
          extraData={selectedItems}
          // renderSectionHeader={({section: {title}}) => (
          //   <Text style={styles.header}>{title}</Text>
          // )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395c43',
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
    // flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderContainer: {
    height: 200,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default Restscreen;
