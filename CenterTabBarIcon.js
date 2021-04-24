import React from 'react';
import {View,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function CenterTabBarIcon(props) {
  return (
    <View style={{position:'relative',width:60,marginTop:-30,marginBottom:10,
    height:60,
    borderRadius:30,
    elevation:3,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.tabIconSelected}}>
      {/* <Ionicons
        name={props.name}
        size={30}
        style={{ }}
        color={'#fff'}
      /> */}
      <Image
      style={{ width:60, height:60, resizeMode:'contain'}}
      source={props.source}
    />
    </View>
  );
}
//elevation:3,