// import React, {useState} from 'react';
// import {encode} from 'base-64';
// import { 
//   StyleSheet, 
//   Text, 
//   View, 
//   Image, 
//   StatusBar, 
//   TouchableOpacity, 
//   TextInput, 
//   ScrollView,
//   Alert,
//   ToastAndroid,
//  } from 'react-native';
 
//  import {bearerToken} from '../constants/Utils';
//  import {ActivityIndicator} from 'react-native';
// export default class LoginScreen extends React.Component  {
       
//     constructor() {
//       super();
//       this.state = {
//         email:"",
//         emailError:"",
//         emailcon:"",
//         password:"",
//         passwordError:"",
//         passwordcon:""
//       }
//     }
//     submit()
//     {
//       let rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       let isValid=rjx.test(this.state.email)
//       console.warn(isValid)
//       if(this.state.email !=="")
//       {
//       if(!isValid)
//       {
//         this.setState({emailError:"Email is not invalid"});
//       }
//       else
//       {
//         this.setState({emailcon:"200"});
//       }
//     }
//     else
//     {
//       this.setState({emailError:"Email is required"});
//     }

//     if(this.state.emailcon==200)
//     {
//       this.getDataUsingPost(); 
//     }
//     if(this.state.password !=="")
//     {
//       if(this.state.email.length >10)
//       {
//         this.setState({passwordcon:"200"});
//       }
//       else
//       {
//         this.setState({passwordError:"Password max lenhth 5 chara"});
//       }
//     }
//   }
  
//    emailVlidator()
//     {
//       if(this.state.email=="")
//       {
//         this.setState({emailError:"Email is required"});
//       }
//       else
//       {
//         this.setState({emailError:""});
//       }
//     }
//     passVlidator()
//     {
//       if(this.state.password=="")
//       {
//         this.setState({passwordError:"Password is required"});
//       }
//       else
//       {
//         this.setState({passwordError:""});
//       }
//     }

//     getDataUsingPost = () => {
//       let _data = { email:this.state.email, password:this.state.password ,}
      
//       fetch('http://mobileapiv2.ezyfind.co.za/api/splogin/SSOMobileLogin', {
//         method: "POST",
//         body: JSON.stringify(_data),
//         headers: {"Content-type": "application/json",
//         Authorization: `Bearer ${bearerToken}`,
//                 'Content-Length': 0,
//         // Authorization:"Basic U3RkYmFua0BFenlGaW5kLmNvLnphOlBhcnRzMzQ1NQ=="
//       }

//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//           console.log("jso22222222222n",responseJson);
  
//           if(responseJson.status === true){
//               // let user_info = responseJson.data
//               // let user_token = responseJson.token
               
//               this.props.navigation.navigate('Main')
//           }
//           else if(responseJson.status=== false){
//              alert(responseJson.message)
//           }
//       })
//       .catch((error) => {
        
//       //   this.setState({ isLoading: false })
//         console.error(error);
//       });
//     };


//     render(){
//         return (
//              <ScrollView style={{flex:1, backgroundColor:'#fff'}}> 
//             <View style={{
//                 flex: 1,
//             }}>
//                 <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
//                 <View style={{ flex: 1,  padding: 21, }}>
//                     <Image

//                         source={require('../assets/logo.jpg')}
//                         resizeMode='contain'
//                         style={{ width: 210, height: 170,marginBottom:10,alignSelf:"center" }}>
//                     </Image>
//                     <View style={{alignSelf:'flex-start'}}>
//                     <Text style={{color:'#AAA',fontSize:25,}}>SIGN IN</Text>
//                     </View>

//                     <TextInput
//                         style={[styles.auth_textInput,]}
//                         onChangeText={(text) => {this.setState({email: text}) }}
//                         onBlur={()=>this.emailVlidator()}
//                         placeholder="Email"
//                         placeholderTextColor='#ccc'
//                         autoCapitalize='none' 
//                       />
//                       <Text style={{color:"red", marginLeft:15}}>{this.state.emailError}</Text>
//                     <TextInput
//                         style={[styles.auth_textInput,]}
//                         onChangeText={(text) => {this.setState({password: text,});}}
//                         onBlur={()=>this.passVlidator()}
//                         maxLength={10}
//                         placeholder="Password"
//                         placeholderTextColor='#ccc'
//                         autoCapitalize='none' 
//                     />
//                     <Text style={{color:"red", marginLeft:15}}>{this.state.passwordError}</Text>
//                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('ForgotPassword')}}> 
//                       <Text style={{color:'#AAA',fontSize:14,marginVertical:20, alignSelf:"center"}}>Forgot Your Password?</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                       style={styles.button}
//                       onPress={() => {this.submit()}}
//                         style={styles.auth_btn}
//                         underlayColor='gray'
//                         activeOpacity={0.8}>
//                         <Text
//                 style={{
//                   fontSize: 14,
//                   textAlign: 'center',
//                   color: '#fff',
//                   fontWeight: 'bold',
//                 }}>
//                 Continue
//               </Text>
//                     </TouchableOpacity>
           
                 

//                     <Text style={{color:'#AAA',fontSize:14,marginVertical:15,alignSelf:"center"}}>Sign up with</Text>
               
            
//   <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:10,marginBottom:10}}>
//     <Image style={{width:30,height:30,}}  source={require('../assets/facebook.png')}></Image>
//     <Image style={{width:33,height:33,}}  source={require('../assets/google.png')}></Image>

//     <Image style={{width:33,height:33,}}  source={require('../assets/linkdin.png')}></Image>
//     <Image style={{width:33,height:33,}}  source={require('../assets/twitter.png')}></Image>

//   </View>
// <TouchableOpacity style={{marginTop:15}}
// activeOpacity={0.7}
// onPress={() => {this.props.navigation.navigate('SignUp'); }}
// >
//     <Text style={{color:'#CCC',alignSelf:"center"}}>Dont have an account? <Text style={{fontSize:16,color:'#CCC',fontWeight:'bold',alignSelf:"center"}}>SIGN UP</Text></Text>
// </TouchableOpacity>
// </View>
//             </View>
//             </ScrollView>
//         )
//         }
     
// }
// const styles = StyleSheet.create({
//     auth_textInput: {
//             alignSelf: 'center',
//         width: '93%',
//         // borderWidth: 1,
//         borderBottomWidth:1,
//         color: '#000',
//         marginTop: 20,
     
//     },
//     auth_btn: {
//         marginTop: 16,
//         paddingTop: 10,
//         paddingBottom: 10,
//         backgroundColor:'red',
//         borderRadius: 25,
//         width: '70%',
//         height: 40,
//         alignSelf:"center",
//         justifyContent: 'center',
//     },
// })

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {encode} from 'base-64';
import url from '../constants/Utils';
import {bearerToken} from '../constants/Utils';
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-community/async-storage';
export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: '',
      emailcon: '',
      password: '',
      passwordError: '',
      passwordcon: '',
      loading: false,
    };
  }
  async submit() {
    let rjx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = rjx.test(this.state.email);
    // console.warn(isValid);
    if (this.state.email === '' || !isValid) {
      this.setState({emailError: 'Enter valid email'});
      return;
    }

    if (this.state.password === '') {
      this.setState({passwordError: 'Password is required'});
    }
    this.setState({loading: true});
    try {
      const res = await fetch(`${url}/splogin/SSOMobileLogin`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encode(
            this.state.email + ':' + this.state.password,
          )}`,
          'Content-Length': 0,
        },
      });
      const jsonRes = await res.json();
      this.setState({loading: false});
      console.log(jsonRes);
      if (jsonRes.status) {
        await AsyncStorage.setItem('userToken', jsonRes.result.token);
        this.props.navigation.navigate('AuthLoading');
      } else {
        ToastAndroid.show(jsonRes.message, ToastAndroid.SHORT);
        // Toast.show(jsonRes.message, {
        //   duration: Toast.durations.SHORT,
        // });
      }
    } catch (error) {
      this.setState({loading: false});
      console.log(error);
    }
  }

  emailVlidator() {
    if (this.state.email === '') {
      this.setState({emailError: 'Email is required'});
    } else {
      this.setState({emailError: ''});
    }
  }
  passVlidator() {
    if (this.state.password === '') {
      this.setState({passwordError: 'Password is required'});
    } else {
      this.setState({passwordError: ''});
    }
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 1,
          }}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <View style={{flex: 1, padding: 21}}>
            <Image
              source={require('../assets/logo.jpg')}
              resizeMode="contain"
              style={{
                width: 210,
                height: 170,
                marginBottom: 10,
                alignSelf: 'center',
              }}
            />
            <View style={{alignSelf: 'flex-start'}}>
              <Text style={{color: '#AAA', fontSize: 25}}>SIGN IN</Text>
            </View>

            <TextInput
              style={[styles.auth_textInput]}
              onChangeText={text => {
                this.setState({email: text});
              }}
              onBlur={() => this.emailVlidator()}
              placeholder="Email"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
            />
            <Text style={{color: 'red', marginLeft: 15}}>
              {this.state.emailError}
            </Text>
            <TextInput
              style={[styles.auth_textInput]}
              onChangeText={text => {
                this.setState({password: text});
              }}
              onBlur={() => this.passVlidator()}
              placeholder="Password"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
            />
            <Text style={{color: 'red', marginLeft: 15}}>
              {this.state.passwordError}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ForgotPassword');
              }}>
              <Text
                style={{
                  color: '#AAA',
                  fontSize: 14,
                  marginVertical: 20,
                  alignSelf: 'center',
                }}>
                Forgot Your Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              // style={styles.button}
              onPress={() => {
                this.submit();
              }}
              style={styles.auth_btn}
              underlayColor="gray"
              activeOpacity={0.8}>
              {this.state.loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.btnTxt}>Continue</Text>
              )}
            </TouchableOpacity>

            <Text
              style={{
                color: '#AAA',
                fontSize: 14,
                marginVertical: 15,
                alignSelf: 'center',
              }}>
              Sign up with
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/facebook.png')}
              />
              <Image
                style={{width: 33, height: 33}}
                source={require('../assets/google.png')}
              />

              <Image
                style={{width: 33, height: 33}}
                source={require('../assets/linkdin.png')}
              />
              <Image
                style={{width: 33, height: 33}}
                source={require('../assets/twitter.png')}
              />
            </View>
            <TouchableOpacity
              style={{marginTop: 15}}
              activeOpacity={0.7}
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}>
              <Text style={{color: '#CCC', alignSelf: 'center'}}>
                Dont have an account?{' '}
                <Text
                  style={{
                    fontSize: 16,
                    color: '#CCC',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  SIGN UP
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  auth_textInput: {
    alignSelf: 'center',
    width: '93%',
    // borderWidth: 1,
    borderBottomWidth: 1,
    color: '#000',
    marginTop: 20,
  },
  auth_btn: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    width: '70%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

 