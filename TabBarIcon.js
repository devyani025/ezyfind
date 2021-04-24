import React from 'react';
import {Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Image
      style={{ width:22, height:22, resizeMode:'contain'}}
      source={props.source}
    />
  );
}

{/* <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    /> */}
