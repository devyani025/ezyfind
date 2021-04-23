import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TextInput, TouchableOpacity, Slider } from 'react-native';
import Colors from '../constants/Colors';

import HeaderBackground from '../components/HeaderBackground';
import { textHeader, font_style, view_style,buttonStyle } from '../components/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { SearchBar, } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import HeaderBackLeft from '../components/HeaderBackLeft';

export default class FriendFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sliderValue: 1,
      sliderValue2: 1,
      sliderValue3: 6
    };
  }
  updateSearch = search => {
    this.setState({ search });
  };

  static navigationOptions = ({ navigation }) => ({
    headerBackground: <HeaderBackground />,
    headerStyle: textHeader.header_style,
    headerTitle: <Text style={textHeader.header}>{`Filter`.toUpperCase()}</Text>,
    headerLeft: <HeaderBackLeft navigationProps={navigation} />,
    // headerRight: <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //   <Image style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }} source={require('../assets/images/filter_3x.png')} />
    // </View>
  });

  render() {
    const { search } = this.state;
    return (

      <View style={styles.container}>

        <Text style={{ fontSize: 14, fontWeight: '500' }}>Location</Text>

        <SearchBar
          placeholder="Enter Search"
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{ backgroundColor: '#fff', borderBottomWidth: 0, borderTopWidth: 0 }}
          inputContainerStyle={{ backgroundColor: '#fff' }}
        />
        <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 5, marginBottom: 5 }}>Distance :</Text>
        <View style={styles.inputs}
        >
          <Text>Min(km)</Text>
          <Text>Max(km)</Text>
        </View>

        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#FE5665"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FE5665"
          step={1}
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
        />
        <Text style={{ color: 'black', marginTop: 5,marginBottom:5 }}>{this.state.sliderValue}km</Text>

      

        <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 5, marginBottom: 5 }}>Price</Text>
        <Text style={{ color: 'black', marginTop: 5 }}>Up to ${this.state.sliderValue2}</Text>

        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#FE5665"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FE5665"
          step={1}
          value={this.state.sliderValue2}
          onValueChange={(sliderValue2) => this.setState({ sliderValue2 })}
        />


        <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 5, marginBottom: 5 }}>Time</Text>
        <View style={styles.inputs}
        >
          <Text>6 AM</Text>
          <Text>10PM</Text>
        </View>

        <Slider
          maximumValue={18}
          minimumValue={6}
          minimumTrackTintColor="#FE5665"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FE5665"
          step={1}
          value={this.state.sliderValue3}
          onValueChange={(sliderValue3) => this.setState({ sliderValue3 })}
        />
        <Text style={{ color: 'black', marginTop: 5,marginBottom:15 }}>Time:{this.state.sliderValue3}</Text>
<View style={{marginTop:30}}>
        <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('FriendRequest') }}
                style={buttonStyle.auth_btn}
                underlayColor='gray'
               
                activeOpacity={1}
                disabled={this.state.disableBtn}
              >
                <Text style={buttonStyle.loginText}>Apply Filters</Text>
              </TouchableOpacity>  
              </View>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bg_color,
  },
  inputs: {
    marginBottom: 5,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',


  },
})
