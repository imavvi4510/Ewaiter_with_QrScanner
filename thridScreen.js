import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, SectionList, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

// import snackbar from './snack';

// const mapper = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
import Cardlist from './helper/Cardlist';

const Restscreen = ({navigation, route}) => {
  const {tableNumber} = route.params;

  const [selectedItems, setSelectedItems] = useState({});
  const [selectedprice, setselectedprice] = useState({});
  const [data, setData] = useState([]);

  console.log('hii>>>>>>>>>>>>>>', selectedItems, selectedprice);

  var result = Object.keys(selectedprice).reduce((prevValue, key) => {
    return prevValue + Number(key) * selectedprice[key];
  }, 0);

  console.log(result);

  useEffect(() => {
    database()
      .ref('/menu')
      .on('value', (snapshot) => {
        console.log('User data: ', snapshot.val());
        setData(snapshot.val());
      });
  }, []);

  Snackbar.show({
    text: `TOTAL: ${result}`,
    duration: Snackbar.LENGTH_INDEFINITE,
    action: {
      text: 'ORDER',
      textColor: 'green',
      onPress: () => {
        database()
          .ref(`/order/${tableNumber}`)
          .set(selectedItems)
          .then(() => {
            navigation.navigate('Conformation');
          });
      },
    },
  });
  return (
    <View style={styles.container}>
      <View style={{}}>
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
        <View
          style={{
            margin: 10,
            alignItems: 'center',
            borderWidth: 0.5,
            borderBottomColor: 'red',
            borderTopColor: 'red',
          }}>
          <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
            ODER NOW
          </Text>
        </View>
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
    backgroundColor: '#112917',
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
    // backgroundColor: 'transparent',
    borderRadius: 1,
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
