import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, FlatList,Picker,ScrollView } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

import { textInput, buttonStyle, font_style, textHeader } from '../components/styles';
import Colors from '../constants/Colors';
import Constants from '../constants/Constant';
import HeaderBackground from '../components/HeaderBackground';
import HeaderBackLeft from '../components/HeaderBackLeft';
import HeaderLeft from '../components/HeaderLeft';

export default class SettingsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerBackground: <HeaderBackground />,
    headerStyle: textHeader.header_style,
    headerTitle: <Text style={textHeader.header}>{`${Constants.settings}`.toUpperCase()}</Text>,
    headerLeft: <HeaderLeft navigationProps={navigation} />,
    headerRight: <Text></Text>,
  });

  constructor(props) {
    super(props);
    this.state = {
  user:'Hire',
      Data: [
        {
          name: 'Whey',
          date: 'Optimum Nutrition 100% Whey Gold Standard',
          dueAmount:'500 Rs',
        
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          like: '25',
          comment: '50',
        },
        {
          name: 'Syntha 6',
          date: ' BSN Syntha 6',
          dueAmount:'500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
         like: '25',
          comment: '50',
        },
        {
          name: 'Isopure',
          date: 'Isopure Low Carb',
          dueAmount:'500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
         like: '25',
          comment: '50',
        },
        {
          name: 'Elite',
          date: 'Dymatize Elite Whey',
          dueAmount:'500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
         like: '25',
          comment: '50',
        },
        {
          name: 'Elite',
          date: 'Dymatize Elite Whey',
          dueAmount:'500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
         like: '25',
          comment: '50',
        },
        {
          name: 'Elite',
          date: 'Dymatize Elite Whey',
          dueAmount:'500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
         like: '25',
          comment: '50',
        },
      ],
    }
  }
 
  updateUser = (user) => {
    this.setState({ user: user })
    console.log(this.state.user,'fghfgh')
    if(this.state.user=="Buy"){
      // this.props.navigation.navigate('ProductBuy')
console.log('buyyyyyyy')
    }
    else if(this.state.user=="Bid"){
      // this.props.navigation.navigate('ProductBid')
      console.log('bid')
    }
    else if(this.state.user=="Hire"){
      // this.props.navigation.navigate('ProductHire')
      console.log('hirrrrrrreee')
    }
     
  }

  renderItem = ({ item, index }) => (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 5 }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          // alert('ttt')
          this.props.navigation.navigate('Details')
        }}
        style={{ marginBottom: 10 }}>
        <View style={{ flex: 1, backgroundColor: '#FFF', borderColor: '#ccc', borderRadius: 15, borderWidth: 1, elevation: 8, }}>
          <View style={{ alignSelf: 'center', flex: 1 }}>
            <Image style={{ height: 100, width: 100, padding: 5, marginVertical: 5 }} source={require('../assets/img/Rectangle.png')} />
          </View>
          <View style={{ flex: 1, borderColor: '#eeeeee', borderRadius: 15, borderWidth: 1, }}>

            <View style={{ flexDirection: 'column', marginLeft: 10, margin: 10 }}>
              <Text style={{ color: "#000", fontSize: 16, fontWeight: 'bold', }}>Alloy Rim Tyre</Text>
              <View style={{ flex: 1, flexDirection: 'row', paddingTop: 1, paddingBottom: 5, alignSelf: "flex-start", }}>
                <Image style={{ width: 10, height: 10, marginLeft: 0, marginRight: 2 }} source={require('../assets/stargold.png')} />
                <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                <Text style={{
                  fontSize: 10,
                  marginLeft: 25,
                  color: '#9f1d20',
                  fontWeight: 'bold',
                  // textTransform: 'capitalize',
                  // flexDirection: 'row', justifyContent: 'flex-end',
                  marginTop: -3
                }}>R4500</Text>
              </View>
              <Text numberOfLines={2} style={{ color: '#BBB' }}>Lorem Ipsum Semibold Vertigo Nala Upsum Lorem Ipsum Semibold Vertigo</Text>

            </View>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row', padding: 5 }}>
              <Image style={{ height: 25, width: 25, tintColor: '#bbb' }} source={require('../assets/heart.png')} />
              <Image style={{ height: 23, width: 23, tintColor: '#DB3236' }} source={require('../assets/img/wacht.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* <View style={{ width: '100%', height: 1, backgroundColor: '#ABABAB' }} /> */}

    </View>

  )

  render() {
    return (

      <View style={{
        flex: 1,
        backgroundColor:'#fff',
      }}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
<ScrollView style={{padding:5,flex:1}}>
<View style={styles.textinput}>
                    {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                    <Image
                        source={require('../assets/search.png')}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            marginTop: 10,
                            marginLeft: 10
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search Products"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View  style={{borderRadius:5, borderColor:"#DCDCDC", borderWidth:2, height:50, width:103, left:18}}>
                  <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{color:'red', height: 40, width: 100}}>
                    <Picker.Item label = "Buy" value = "Buy" />
                    <Picker.Item label = "Bid" value = "Bid" />
                    <Picker.Item label = "Hire" value = "Hire" />
                  </Picker>
                </View>
        <View style={{ justifyContent: 'center', padding: 21, alignItems: 'center',  flex: 1 }}>

          <FlatList
      
            style={{ flex: 1, width: '100%' ,marginBottom:-17}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={this.renderItem}
          // ListEmptyComponent={this.ListEmpty}

          />


        </View>

   
      </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
      flex: 0.8
  }, bottomView: {

      position: 'absolute', left: '8%', right: 0, bottom: 10, justifyContent: 'center'
  },
  overicon: {
      backgroundColor: 'white',
      height: 70,
      width: 70,
      borderRadius: 50,
      position: 'absolute',
      bottom: 10,
      left: -14,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
  },
  modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 100,
  },
  searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  searchIcon: {
      padding: 1,
  },
  input: {
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
      marginLeft: 50,
      marginTop: -30,
      width: '80%',
      height: 40,
      
  },
  textinput: {
      borderRadius: 10,
      fontSize: 12,
      borderColor: '#9f1d20',
      borderWidth: 1,
      margin: 20,
      padding: 5,
      height: 50,
      

  },
  container: {
      flex: 1,
      backgroundColor: 'white',
  },
  mainCardView: {
      height:"100%",
      // width: '88%',
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      // flexDirection: 'row',
      justifyContent: 'space-between',
      // paddingLeft: 2,
      // paddingRight: 2,
      marginTop: 10,
      // marginBottom:4,
      marginLeft: 16,
      marginRight: 16,
      
  },
  subCardView: {
      height: "60%",
      borderRadius: 8,
      backgroundColor: 'white',
      borderColor: '#eeeeee',
      borderWidth: 1,
      borderStyle: 'solid',
      
  },
  prohead: {
      fontSize: 10,
      marginLeft: 10,
      color: '#9f1d20',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      flexDirection: 'row', justifyContent: 'flex-end',
      marginTop: -3

  },
  dummyhead: {

      marginTop:10,
      width:100,
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      flexDirection: 'row', justifyContent: 'flex-end'

  },
  newdummyhead: {
      fontSize: 9,
      color: 'gray',
      textTransform: 'capitalize',
      flexDirection: 'row', 
      justifyContent: 'flex-start',
      marginBottom:10,
      marginTop:-20,
      marginLeft:10

  },
  proimg: {
      height: 90,
      width: 90,
      alignSelf: 'center',
      padding: 10,
      marginTop:10
  }

}); 