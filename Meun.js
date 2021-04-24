import React, { Component } from 'react'
import {
  Platform,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { textHeader } from './styles';

import { createAppContainer } from 'react-navigation';
export default class Meun extends Component {
  static navigationOptions = {
    header: null,
  };

  

  render() {
    return (
      <TouchableOpacity
        onPress={() => { this.props.navigationProps.navigate('M') }} style={textHeader.leftIcon}>
        <Image source={require('./../assets/burgermenu.png')} style={{ width: 21, height: 20, alignSelf: 'flex-start' ,tintColor:'#000'}} />
      </TouchableOpacity>

    )
  }
}