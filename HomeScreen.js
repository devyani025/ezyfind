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
  FlatList,
  StatusBar,
  TextInput
} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Colors from '../constants/Colors';
import HeaderLeft from '../components/HeaderLeft';
import { textHeader, font_style, view_style } from '../components/styles';
import Meun from '../components/Meun';
import HeaderBackground from '../components/HeaderBackground';
import Entypo from 'react-native-vector-icons/Entypo';
import { MonoText } from '../components/StyledText';
import { Menu } from 'react-native-popup-menu';


export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackground: <HeaderBackground />,
    headerStyle: textHeader.header_style,
    //headerTitle: <Text style={textHeader.header}>{`${navigation.state.params.title}`.toUpperCase()}</Text>,
    headerTitle: <Image style={{ height: 22, width: 25, padding: 5, resizeMode:"center", alignSelf:"flex-end"}} source={require('../assets/burgermenu.png')} />,
    headerTitle:<Image source={require('../assets/img/LoginIcon.png')} style={{width:'100%',height:50,marginTop:0, resizeMode:'contain'}}></Image>,
    // headerTitle: <Image style={{ height: 22, width: 25, padding: 5, resizeMode:"center", alignSelf:"flex-end"}} source={require('../assets/share.png')} />,
     headerLeft: <Meun navigationProps={navigation} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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


  renderItem = ({ item, index }) => (
    <View style={{ flex: 1, backgroundColor:'#fff',padding:5 }}>
         <TouchableOpacity
         activeOpacity={0.9}
            onPress={() => {
              // alert('ttt')
              this.props.navigation.navigate('Filter')
            }}
         style={{marginBottom:10}}>
      <View style={{   flex: 1,backgroundColor:'#FFF',borderColor:'#ccc',borderRadius:15,borderWidth:1, elevation: 8,}}>
      <View style={{alignSelf:'center',flex:1}}>
        <Image style={{ height: 100, width: 100, padding: 5,marginVertical:5}} source={require('../assets/img/Rectangle.png')} />
        </View>
      <View style={{  flex: 1,borderColor:'#eeeeee',borderRadius:15,borderWidth:1, }}>
     
        <View style={{ flexDirection:'column',marginLeft:10,margin:10 }}>
        <Text  style={{ color:"#000", fontSize: 16, fontWeight: 'bold', }}>Alloy Rim Tyre</Text>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop:1, paddingBottom: 5, alignSelf: "flex-start",  }}>
                                                    <Image style={{ width: 10, height: 10, marginLeft: 0, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                                    <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                                    <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                                    <Image style={{ width: 10, height: 10, marginLeft: 2, marginRight: 2 }} source={require('../assets/stargold.png')} />
                                                    <Image style={{ width: 12, height: 12, marginLeft: 2, marginRight: 2 }} source={require('../assets/starwhite.png')} />
                                                    {/* <Text style={{ fontSize: 10, marginLeft: 15, color: '#9f1d20', fontWeight: 'bold', marginTop: -3}}>R4500</Text> */}
                                                </View>
                                                <Text style={{ fontSize: 10, color: '#9f1d20', fontWeight: 'bold', marginTop: -17, alignSelf:"flex-end", }}>R4500</Text>
   <Text numberOfLines={2} style={{color:'#BBB'}}>Lorem Ipsum Semibold Vertigo Nala Upsum Lorem Ipsum Semibold Vertigo</Text>
        
        </View>
        <View style={{justifyContent:'space-around',flexDirection:'row',padding:5}}>
        <Image style={{ height: 25, width: 25,tintColor:'#bbb' }} source={require('../assets/heart.png')} />
        <Image style={{ height: 25, width: 25,tintColor:'#DB3236' }} source={require('../assets/shopping.png')} />
        </View>
      </View>     
    </View>
      </TouchableOpacity>
      {/* <View style={{ width: '100%', height: 1, backgroundColor: '#ABABAB' }} /> */}
      
    </View>

  )

  render() {

    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView style={{flex:1}}> 
          <View style={{padding:5,flex:1}}>

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
                <Text style={{fontSize:20,color:'#DB3236',marginLeft:27}}>ALL PRODUCTS</Text>
        <View style={{ justifyContent: 'center', padding: 21, alignItems: 'center',  flex: 1 }}>
 
          <FlatList
          numColumns={2}
            style={{ flex: 1, width: '100%' ,marginBottom:-17}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={this.renderItem}
          // ListEmptyComponent={this.ListEmpty}

          />


        </View>

   
      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  cardView: {
    flex: 1,
    padding: 15,
    margin: 15,
    marginBottom: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius:8,
    shadowColor: "#00000090",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  row1: {
    flexDirection: 'row',
    marginBottom: 7
  },
  row2: {
    marginBottom: 10
  },
  row3: {

  },
  row4: {
    flexDirection: 'row',
    marginTop: 10
  },
  nameText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'futura-bold',
    color: Colors.secondColor
  },
  dateText: {
    fontSize: 15,
  },
  textStyle: {
    color: Colors.dark_gray
  },
  addIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25,
    shadowColor: "#00000090",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
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
    borderColor: '#959595',
    borderWidth: 1,
    margin: 20,
    padding: 5,
    height: 50,
    

},
});
