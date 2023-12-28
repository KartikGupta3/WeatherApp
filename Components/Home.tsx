/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
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
      style={{flex: 1}}>
      <ScrollView
        style={{
          flexDirection: 'column',
        }}>
        <View style={{padding: 19}}>
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
        <View style={{alignItems: 'center', padding: 19}}>
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
        </View>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 40,
            paddingLeft: 36,
          }}>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Image
              source={require('./assets/wind.png')}
              style={{width: 15, height: 15, marginTop: 5}}
            />
            <Text style={{color: 'white', fontSize: 16}}>22km</Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Image
              source={require('./assets/drop.png')}
              style={{width: 15, height: 15, marginTop: 5}}
            />
            <Text style={{color: 'white', fontSize: 16}}>22%</Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Image
              source={require('./assets/sun2.png')}
              style={{width: 15, height: 15, marginTop: 5}}
            />
            <Text style={{color: 'white', fontSize: 16}}>6:00 am</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', padding: 20, rowGap: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Today</Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 70,
                  }}>
                  <Image
                    source={require('./assets/sun.png')}
                    style={{width: 30, height: 30}}
                  />
                  <Text style={{color: 'white', fontSize: 12}}>7:00</Text>
                  <Text style={{color: 'white', fontSize: 12, paddingLeft: 2}}>
                    11{'\u00b0'}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{flexDirection: 'column', padding: 20, rowGap: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Daily Forecast</Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                  }}>
                  <Image
                    source={require('./assets/sun.png')}
                    style={{width: 30, height: 30}}
                  />
                  <Text style={{color: 'white', fontSize: 12}}>Friday</Text>
                  <Text style={{color: 'white', fontSize: 24, paddingLeft: 5}}>
                    11{'\u00b0'}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
