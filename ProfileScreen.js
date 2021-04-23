import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,StatusBar
} from 'react-native';
import HeaderBackground from '../components/HeaderBackground';
import HeaderLeft from '../components/HeaderLeft';
import { font_style, textHeader } from '../components/styles';
import Constant from '../constants/Constant';
export default class LoginScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerBackground: <HeaderBackground />,
    headerStyle: textHeader.header_style,
    headerTitle: <Text style={textHeader.header}>Profile</Text>,
    headerLeft: <HeaderLeft navigationProps={navigation} />,
    headerRight: <Text></Text>,
});
  render(){
    return(
      <View style={{flex:1}}>
          <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <View style={{backgroundColor:"#DB3236", height:"100%",flex:1,marginTop:5}}>
        <TouchableOpacity
                  style={{backgroundColor:"#FFFFFF",  padding: 10, borderRadius:10, height:39, width:140, top:110, left:25}}>
                  <Text style={{color:"#EF4044", marginLeft:25}}>Edit Profile</Text>
                </TouchableOpacity>
            <View style={styles.main}>
            <View>
                {/* <Image style={{height:180, width:180,}} source={require('../assets/img/profile.png')} /> */}
                <Text style={{left:20, marginTop:20, fontWeight:"bold", fontSize:25, color:"#9F1D20"}}>John Doe</Text>
                <Text style={styles.sub}>Gender</Text>
                <Text style={styles.text}>Male</Text>
                <Text style={styles.sub}>Date of Birth</Text>
                <Text style={styles.text}>3 / 11 / 1997</Text>
                <Text style={styles.sub}>Account Info</Text>
                <Text style={styles.text}>JohnDoe@ezyfind.co.za</Text>
                <Text style={styles.sub}>Address Info</Text>
                <Text style={styles.text}>12 Simmonds St. Guateng City of Johannesburg Metropolitan Municipal 2000</Text>
                
                <Image style={{height:180, width:180, marginTop:-470, marginLeft:150}} source={require('../assets/img/profile.png')} />
                </View>
             </View>
        </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
    main:{
        height: "70%",
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 35,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: "35%",
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    sub:{
        fontWeight: "bold",
        fontSize:17, 
        color:"#9F1D20", 
        padding:10,
    },
    text:{
        fontSize:17, 
        color:"#232323",  
        opacity:0.5, 
        marginLeft:10
    },
    header: {
      color: '#fff',
      //fontFamily: 'FuturaPTMedium',
      fontSize: 20,
      textAlign: 'center',
      //width: '100%'
    },
    header_style: {
      height: Platform.OS==='ios'?85:68
    },
    leftIcon: {
      justifyContent: 'center',
      paddingLeft: 20,
      width: 48,
      height: 48,
    },
    rightIcon: {
      justifyContent: 'center',
      paddingRight: 20,
      width: 48,
      height: 48,
    }

})

