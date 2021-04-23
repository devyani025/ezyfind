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
    <View style={{ flex: 1, backgroundColor:'#fff',padding:5 }}>
         <TouchableOpacity
         activeOpacity={0.9}
            onPress={() => {
              // alert('ttt')
              this.props.navigation.navigate('Details')
            }}
         style={{marginBottom:40}}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop:5 }}>
                            <View style={styles.mainCardView}>
                                {/* <View style={styles.subCardView}> */}
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                <View style={styles.subCardView}>
                                    <View style={{ }}>
                                        <Text style={{marginLeft:10,}}>Alloy Rim Tyre</Text>
                                        <Text style={{marginTop:-20, fontSize:11, alignSelf:"flex-end", marginRight:46 }}>Last Bid Amount:</Text>
                                        <Text style={{marginTop:-14, fontSize:11, color:"#DB3236", alignSelf:"flex-end", marginRight:13}}>R2000</Text>
                                        <Text style={{marginTop:-1, fontSize:11,  alignSelf:"flex-end", marginRight:63}}>Cut-off Date:</Text>
                                        <Text style={{ marginTop:-15, fontSize:11, color:"#DB3236", alignSelf:"flex-end", marginRight:13}}>2-11-2020</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row',  paddingBottom: 20,marginLeft:10}}>
                                        <Image style={{ width: 10, height: 10, }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                        <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                    </View>
                                    <View >
                                        <Text style={styles.newdummyhead}>Lorem lpsum Semibold Vertigo Nala Upsum</Text>
                                        <Text style={{ fontSize: 9, color: 'gray', textTransform: 'capitalize', flexDirection: 'row',  justifyContent: 'flex-start', marginBottom:10, marginTop:-11, marginLeft:10}}>Lorem lpsum Semibold Vertigo </Text>
                                         
                                    </View>


                                    <View style={{ flex: 1, }}>
                                        <Image style={{ width: 20, height: 25, marginLeft:10, padding:15 }} source={require('../assets/Bid1.png')} />
                                        <Image style={{ width: 25, height: 25, marginTop:-35, padding:15, alignSelf:"flex-end", marginRight:15 }} source={require('../assets/Bid2.png')} />
                                        <TextInput style={{borderRadius: 5, fontSize: 12, borderColor: 'grey', borderWidth: 1,  bottom:25, padding: 5, height: 30, marginLeft:60, marginRight:60}}
                                           placeholder="Enter Bid Amount"
                                           placeholderTextColor="red"
                                         />
                                    </View>
                                    <View style={{borderWidth:2, height:20, width:80, borderColor:"red", borderTopLeftRadius:5, borderBottomLeftRadius:5, marginTop:-15, backgroundColor:"#FC595D", alignSelf:"center", marginLeft:-79}}>
                                         <Image  source={require('../assets/img/DownArrow.png')}/>
                                        <Text style={{fontSize:8, color:"#FAFAFA", alignSelf:"flex-end", marginTop:-10}}>decrease bid 10%</Text>
                                    </View>
                                    <View style={{borderWidth:2, height:20, width:80, borderColor:"#38DF64", borderTopRightRadius:5, borderBottomRightRadius:5, marginTop:-20, backgroundColor:"#38DF64", alignSelf:"center",marginRight:-79}}>
                                        <Text style={{fontSize:8, color:"#FAFAFA",alignSelf:"flex-start", marginTop:3}}>increase bid 10%</Text>
                                        <Image style={{alignSelf:"flex-end", marginTop:-12}} source={require('../assets/img/upArrow.png')}/>
                                    </View>
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
      width: '98%',
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