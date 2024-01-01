/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import debounce from 'lodash/debounce';
const {height, width} = Dimensions.get('screen');
interface Location {
  name: string;
  country: string;
}
interface WeatherForecast {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: String;
    };
    wind_kph: number;
    precip_mm: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      hour: Array<{
        time: string;
        temp_c: number;
        is_day: number;
      }>;
    }>;
  };
}
const Home = () => {
  const [weather] = useState<
    'Sunny' | 'cloudy' | 'partlycloudy' | 'rainy' | 'sunnyrainy' | 'mist'
  >('Sunny');
  const [locationdata, setLocations] = useState<Location[]>([]);
  const [weatherforecast, setWeatherForecast] =
    useState<WeatherForecast | null>(null);
  const apiKey = '9a98fd6da76e438b99943755232912';
  const weatherImages = {
    Sunny: require('./assets/sun.png'),
    cloudy: require('./assets/cloud.png'),
    partlycloudy: require('./assets/PartlyCloudy.png'),
    rainy: require('./assets/heavyrain.png'),
    sunnyrainy: require('./assets/SunnyRainy.png'),
    mist: require('./assets/mist.png'),
  };
  const date = new Date();
  const Time =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  const Handleforecast = useCallback(async (loc1: String) => {
    const options = {
      method: 'GET',
      url: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${loc1}`,
    };

    try {
      const response = await axios.request(options);
      setWeatherForecast(response.data);
    } catch (error) {
      console.log('error: ', error);
      return {};
    }
  }, []);
  const Handlelocations = async (loc: String) => {
    const options = {
      method: 'GET',
      url: `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${loc}`,
    };

    try {
      const response = await axios.request(options);
      setLocations(response.data);
    } catch (error) {
      console.log('error: ', error);
      return {};
    }
  };

  const handleSeachdebounce = useCallback(debounce(Handlelocations, 300), [
    Handlelocations,
  ]);

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
            onChangeText={handleSeachdebounce}
            style={{
              backgroundColor: 'white',
              color: 'black',
              width: width * 0.9,
              borderRadius: 100,
              paddingLeft: 20,
            }}
          />
          {locationdata.length > 0 && (
            <View style={{paddingLeft: 20, paddingRight: 20}}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingLeft: 10,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}>
                {locationdata.map((loc, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      Handleforecast(loc?.name + ' ' + loc?.country)
                    }
                    style={{
                      paddingVertical: 10,
                    }}>
                    <Text style={{color: 'black'}}>
                      {loc?.name}, {loc?.country}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </View>
        <View style={{alignItems: 'center', padding: 19}}>
          <View>
            <Text style={{color: 'white', fontSize: 27}}>
              {weatherforecast?.location?.name},{' '}
              {weatherforecast?.location?.country}
            </Text>
          </View>
          <Image
            source={weatherImages[weather]}
            style={{width: width * 0.5, height: height * 0.22}}
          />
          <View>
            <Text style={{color: 'white', fontSize: 48, paddingLeft: 16}}>
              {weatherforecast?.current?.temp_c}
              {'\u00b0'}C
            </Text>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 21}}>
              {weatherforecast?.current?.condition?.text}
            </Text>
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
            <Text style={{color: 'white', fontSize: 16}}>
              {weatherforecast?.current?.wind_kph} Km/hr
            </Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Image
              source={require('./assets/drop.png')}
              style={{width: 15, height: 15, marginTop: 5}}
            />
            <Text style={{color: 'white', fontSize: 16}}>
              {weatherforecast?.current?.precip_mm}%
            </Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Image
              source={require('./assets/sun2.png')}
              style={{width: 15, height: 15, marginTop: 5}}
            />
            <Text style={{color: 'white', fontSize: 16}}>{Time}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', padding: 20, rowGap: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Today</Text>
          <ScrollView horizontal={true}>
            {weatherforecast?.forecast?.forecastday &&
              weatherforecast.forecast.forecastday.length > 0 && (
                <View style={{flexDirection: 'row', columnGap: 10}}>
                  {weatherforecast.forecast.forecastday[0].hour.map(
                    (hour, hourIndex) => (
                      <View
                        key={hourIndex}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          borderRadius: 10,
                        }}>
                        <View
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 60,
                            height: 70,
                          }}>
                          <Text style={{color: 'white', fontSize: 12}}>
                            {hour.time.split(' ')[1]}
                          </Text>
                          <Image
                            source={require('./assets/sun.png')}
                            style={{width: 30, height: 30}}
                          />
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 12,
                              paddingLeft: 2,
                            }}>{`${hour.temp_c}°C`}</Text>
                        </View>
                      </View>
                    ),
                  )}
                </View>
              )}
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
