import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  FlatList,StatusBar,TextInput,Picker,SafeAreaView,    TouchableWithoutFeedback
} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Colors from '../constants/Colors';
import HeaderLeft from '../components/HeaderLeft';
import { textHeader, font_style, view_style } from '../components/styles';
import HeaderBackLeft from '../components/HeaderBackLeft';
import HeaderBackground from '../components/HeaderBackground';
import Entypo from 'react-native-vector-icons/Entypo';
import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerBackground: <HeaderBackground />,
        headerStyle: textHeader.header_style,
        headerTitle:<Image source={require('../assets/img/LoginIcon.png')} style={{width:'100%',height:50,marginTop:5, resizeMode:'contain'}}></Image>,
        headerLeft: <HeaderBackLeft navigationProps={navigation} />,
        // headerRight: <Text></Text>,
      });

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user:'Buy',
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


  render() {
    return (
        <SafeAreaView style={styles.container}>

<StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
  
            <ScrollView style={{flex:1,}}>
             
                    {/* <View style={{  }}> */}
                        <Text style={{marginTop: -5, fontWeight: 'bold', fontSize: 20, padding:20}} >My Cart</Text>
                    <View style={{ flexDirection:"row", alignSelf:"flex-end", marginRight:25, marginTop:-40  }}>
                        <Text style={{ color: "#888888", }}  >Total Items(s): </Text>
                        <Text style={{ color: "#00000" , }}  >1</Text>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.redirectToChatConverstion(item);
                        }}>
                        <View style={styles.mainCardView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.subCardView}>
                                    <Image source={require('../assets/img/Rectangle.png')}
                                        resizeMode="contain"
                                        style={styles.proimg}
                                    />
                                </View>
                                <View style={{ marginLeft: 40 }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: 'Gray',
                                            fontWeight: 'bold',
                                            //   fontFamily: Fonts.nunitoBold,
                                            textTransform: 'capitalize',
                                        }}>
                                        Allow Rim Tyre
          </Text>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            borderWidth: 0,
                                            // width: '85%',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray',
                                                fontSize: 12,
                                            }}>
                                            Dummy Text
            </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            borderWidth: 0,
                                            // width: '85%',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'red',
                                                fontSize: 15,
                                            }}>
                                            Rs. 140
            </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            borderWidth: 0,
                                            // width: '85%',
                                        }}>
                                        <Text
                                            style={{
                                                color: 'gray',
                                                fontSize: 12,
                                            }}>
                                            Rs.120
            </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                marginLeft: -200, shadowColor: 'gray',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 1,
                                shadowRadius: 8,
                                elevation: 8,
                            }}>
                                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 20, alignSelf: 'center', }}>
                                    <Text style={{ color: 'black', fontSize: 20, marginRight: 12 }}>
                                        -
                             </Text>
                                    <Text style={{ color: 'black', fontSize: 18, marginRight: 12, height: 28, paddingRight: 5 }}> 1
                                 </Text>

                                    <Text style={{ color: 'black', fontSize: 20, marginRight: 12 }}>
                                        +
                                 </Text>
                                </View>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View>

                    </View>
             
                    <View style={{  flex: 1,
justifyContent: 'flex-end',position:'relative',marginTop:210
 }}>        
                  <View style={{ flexDirection: 'row', paddingBottom: 5, alignSelf: 'center', }}>
                            <Text style={{ marginLeft: 12, color: '#323232', fontSize: 20 }}>
                                Total:
                                 </Text>
                            <Text style={{ marginLeft: 12, color: 'red', fontSize: 20 }}>
                                Rs. 240
                                 </Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddWorkout')}>
                            <Text style={styles.buttonText}>Check Out</Text>
                        </TouchableOpacity>
                        </View>
            </ScrollView>
          

        </SafeAreaView>
    );
}
}



const styles = StyleSheet.create({
bottomView: {

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
    shadowColor: '#9F1D20',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
},
 
button: {
    backgroundColor: "#db3236",
    padding: 10,
    borderRadius: 10,
    width: 170,
    marginTop: 10,
    alignSelf: "center"
},
newbutton: {
    backgroundColor: "#db3236",
    padding: 8,
    borderRadius: 20,
    width: 180,
    marginTop: 30,
    alignSelf: "center"
},
buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 22

},
proimg: {
    width: 70,
    marginTop: -90
},
container: {
    flex: 1,
    backgroundColor: 'white',
},
mainCardView: {
    height: 100,
    width:"95%",
    alignSelf:"center",
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 25,
    marginBottom: 6,
    // marginLeft: 16,
    // marginRight: 16,
},
subCardView: {
    height: 90,
    width: 50,
    // borderRadius: 25,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    // alignItems: 'center',
    // justifyContent: 'center',
},
}); 
