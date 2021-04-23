import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  View,
  ImageBackground,
} from 'react-native';
import Constant from '../constants/Constant';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }

  componentWillMount = async () => {
    // const data = await this.performTimeConsumingTask();
    // if (data !== null) {
      this.loadIntialState();
    // }
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    )
  }

  loadIntialState = async () => {
    try {
      var value = await AsyncStorage.getItem('user_token');
      if (value == null) {
        this.props.navigation.navigate('Login');
      } else {
        this.props.navigation.navigate('Main')
      }
    }
    catch (error) {
      this.props.navigation.replace('Login');
    }
  }

  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/images/splash_3x.png')}
          style={{ width: Dimensions.get('window').width, height: "100%" }} />
      </View>
    );
  }
}