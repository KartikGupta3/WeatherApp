/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height} = Dimensions.get('screen');
const Home = () => {
  return (
    <LinearGradient
      colors={['#47BFDF', '#4A91FF']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={{height: height}}>
      <View>
        <Text>Hello</Text>
      </View>
    </LinearGradient>
  );
};

export default Home;
