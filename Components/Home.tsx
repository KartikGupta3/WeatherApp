/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions, Image, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');
const Home = () => {
  const [weather] = useState<
    'sunny' | 'cloudy' | 'partlycloudy' | 'rainy' | 'sunnyrainy' | 'mist'
  >('sunny');

  const weatherImages = {
    sunny: require('./assets/sun.png'),
    cloudy: require('./assets/cloud.png'),
    partlycloudy: require('./assets/PartlyCloudy.png'),
    rainy: require('./assets/heavyrain.png'),
    sunnyrainy: require('./assets/SunnyRainy.png'),
    mist: require('./assets/mist.png'),
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
          rowGap: height * 0.06,
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
            rowGap: 15,
          }}>
          <View>
            <Text style={{color: 'white', fontSize: 27}}>Delhi, India</Text>
          </View>
          <Image
            source={weatherImages[weather]}
            style={{width: width * 0.5, height: height * 0.22}}
          />
          <View>
            <Text style={{color: 'white', fontSize: 48, paddingLeft: 16}}>
              11{'\u00b0'}
            </Text>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 21}}>Sunny</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', columnGap:40,padding:10}}>
            <View style={{flex: 1, flexDirection: 'row', columnGap: 10}}>
              <Image
                source={require('./assets/wind.png')}
                style={{width: 15, height: 15,marginTop:5}}
              />
              <Text style={{color: 'white', fontSize: 16}}>22km</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', columnGap: 10}}>
              <Image
                source={require('./assets/drop.png')}
                style={{width: 15, height: 15,marginTop:5}}
              />
              <Text style={{color: 'white', fontSize: 16}}>22%</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', columnGap: 10}}>
              <Image
                source={require('./assets/sun2.png')}
                style={{width: 15, height: 15,marginTop:5}}
              />
              <Text style={{color: 'white', fontSize: 16}}>6:00 am</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;
