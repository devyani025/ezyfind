import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TextInput, TouchableOpacity, Slider } from 'react-native';
import Colors from '../constants/Colors';
import HeaderBackground from '../components/HeaderBackground';
import { textHeader, font_style, view_style,buttonStyle } from '../components/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { SearchBar, } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import HeaderBackLeft from '../components/HeaderBackLeft';

export default class FriendSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
   
    };
  }
  updateSearch = search => {
    this.setState({ search });
  };

  static navigationOptions = ({ navigation }) => ({
    headerBackground: <HeaderBackground />,
    headerStyle: textHeader.header_style,
    headerTitle: <Text style={textHeader.header}>{`Search`.toUpperCase()}</Text>,
    headerLeft: <HeaderBackLeft navigationProps={navigation} />,
    headerRight: <Text></Text>,
  });

  render() {
    const { search } = this.state;
    return (

      <View style={styles.container}>

   

        <SearchBar
          placeholder="Location"
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{ backgroundColor: '#fff', borderBottomWidth: 0, borderTopWidth: 0 }}
          inputContainerStyle={{      backgroundColor: Colors.bg_color, }}
        />
             <Text style={{ fontSize: 14, fontWeight: '500', marginTop:10}}>Search Result</Text>
        </View>
      );  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
 
    },

  })