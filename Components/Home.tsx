/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions, Image, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');
const Home = () => {
  const [weather] = useState<
    'sunny' | 'cloudy' | 'partlycloudy' | 'rainy' | 'sunnyrainy'
  >('rainy');

  const weatherImages = {
    sunny: require('./assets/sun.png'),
    cloudy: require('./assets/cloudy.png'),
    partlycloudy: require('./assets/PartlyCloudy.png'),
    rainy: require('./assets/rain.png'),
    sunnyrainy: require('./assets/SunnyRainy.png'),
  };
  return (
    <LinearGradient
      colors={['#47BFDF', '#4A91FF']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{height: height}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          padding: 19,
          rowGap: height * 0.12,
        }}>
        <View>
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
            style={{
              backgroundColor: 'white',
              color: 'black',
              width: width * 0.9,
              borderRadius: 100,
              paddingLeft: 20,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            source={weatherImages[weather]}
            style={{width: width * 0.4, height: height * 0.2}}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;
