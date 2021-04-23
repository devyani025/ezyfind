import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TextInput,
  Icon,
  ImageBackground,
  Dimensions,
  Modal
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { textInput, buttonStyle, font_style } from '../components/styles';
import Colors from '../constants/Colors';
import { SafeAreaView } from 'react-navigation';
import { BASE_URL } from './API_baseURL';
import Toast from 'react-native-root-toast';
import Loader from '../components/loader';
import AsyncStorage from '@react-native-community/async-storage';
const app_logo = require('../assets/images/app_logo.png')

export default class ResetPassword extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: this.props.navigation.getParam('email_id'),
    password: '',
    token: '',
    confirm_password: '',
    locationResult: null,
    disableBtn: false,
    isLoading: false,
  }

  showToast = (msg,) => {
    if (this.toast) Toast.hide(this.toast);
    this.toast = Toast.show(msg, {
      duration: 1500,
      position: Toast.positions.BOTTOM,
      backgroundColor: '#000',
      textColor: '#FFF',
    });
  }

  handleSubmit = async () => {
    this.setState({ isLoading: true })
    let params = { email: this.state.email, password: this.state.password, token: this.state.token, confirm_password: this.state.confirm_password };
    var user_token = await AsyncStorage.getItem('user_token');
    return fetch(BASE_URL + 'password/resetpassword', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + user_token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Forgot Password", JSON.stringify(responseJson))
        this.setState({ isLoading: false })
        if (responseJson.code === 200) {
          this.showToast(responseJson.message)
          this.props.navigation.navigate('Main'); 
        } else {
          this.showToast(responseJson.message)
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isLoading: false })
      });
  }

  render() {
    return (
      <View style={styles.container} >
        <KeyboardAwareScrollView enableAutomaticScroll enableOnAndroid
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{}}
          style={{ flex: 1,backgroundColor:'#fff' }}
          scrollEnabled={true}
          keyboardShouldPersistTaps='handled' >
          <TouchableOpacity onPress={() => { Keyboard.dismiss() }} activeOpacity={1} style={styles.container}>
            {/* <Spinner
            visible={this.state.spinner}
            textContent={'Processing...'}
            textStyle={buttonStyle.spinnerTextStyle}
          /> */}


            <ImageBackground source={require('../assets/images/header_bg_3x.png')} style={{ width: Dimensions.get('window').width, height: 300 }}>
              <View style={styles.triangleCorner} />
              <View style={{ position: 'absolute', height: 240, width: Dimensions.get('window').width, alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Image source={app_logo} style={[styles.app_icon,]} />
                </View>

                <Text style={[styles.sign_in_txt, //font_style.font_Book,
                { justifyContent: 'flex-end', }]}>{'Reset Password'.toUpperCase()}</Text>

              </View>
            </ImageBackground>


            <View style={styles.bottom_view}>
              <TextInput
                style={[textInput.auth_textInput,]}
                onChangeText={(token) => this.setState({ token })}
                value={this.state.token}
                placeholder="Enter OTP"
                placeholderTextColor={Colors.dark_gray}
                autoCapitalize='none' />

              <TextInput
                style={[textInput.auth_textInput,]}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor={Colors.dark_gray}
                autoCapitalize='none' />

              <TextInput
                style={[textInput.auth_textInput,]}
                onChangeText={(confirm_password) => this.setState({ confirm_password })}
                value={this.state.confirm_password}
                placeholder="Enter Confirm Password"
                secureTextEntry={true}
                placeholderTextColor={Colors.dark_gray}
                autoCapitalize='none' />

              <TouchableOpacity
                onPress={() => { this.handleSubmit(); }}
                style={buttonStyle.auth_btn}
                underlayColor='gray'
                activeOpacity={0.6}
                disabled={this.state.disableBtn}
              >
                <Text style={buttonStyle.loginText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.props.navigation.goBack() }}
                style={[buttonStyle.auth_btn, { backgroundColor: Colors.gray_light }]}
                underlayColor='gray'
                activeOpacity={0.6}
                disabled={this.state.disableBtn}
              >
                <Text style={[buttonStyle.loginText, { color: Colors.dark_gray }]}>Back</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <SafeAreaView style={{backgroundColor:'#fff'}}/>
        {this.state.isLoading ? <Modal transparent={true}><Loader /></Modal> : null}
      </View>
    );
  }

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  triangleCorner: {
    flex: 1,
    left: 0,
    height: 300,
    backgroundColor: 'rgba(25,36,90,0.85)',
    borderStyle: 'solid',
    borderLeftWidth: Dimensions.get('window').width,
    borderBottomWidth: 40,
    borderLeftColor: 'transparent',
    borderBottomColor: 'white'
  },
  top_view: {

    backgroundColor: Colors.secondColor,
    height: 300
  },
  app_icon: {
    marginTop: 60,
    width: 180,
    height: 56,
  },
  // main_container: {
  //   flex: 1,
  //   width: '100%',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  // },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.shades_blue,
    borderRadius: 4,
    width: '100%',
    height: 46,
    justifyContent: 'center',
  },

  facebookScreenButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.blue_shade,
    borderRadius: 50,
    height: 46,
    justifyContent: 'center',
    flex: 1,
    marginRight: 8,
    flexDirection: 'row'
  },

  accountScreenButton: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.secondColor,
    borderRadius: 50,
    height: 46,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16
  },
  forgot_pass: {
    color: Colors.gray_shade,
    marginTop: 16,
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
    marginBottom: 16,
    fontFamily: 'futura-book',
  },
  sign_in_txt: {
    color: Colors.white_color,

    fontSize: 26,

  },
  bottom_view: {
    marginTop: 60,
    marginStart: 36,
    marginEnd: 36,
  }
});
