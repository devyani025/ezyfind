import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
// import Home from '../component/Home';
import {bearerToken} from '../constants/Utils';
import {ActivityIndicator} from 'react-native';
class Signup extends React.Component {
  state = {
    isVisible: false, //state of modal default false
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    company: '',
    contact: '',
    loading: false,
  };

  buttonClickListener = () => {
    //   alert("Clicked On Button !!!");
    this.setState({
      isVisible: false,
      //   header:true
    });
    this.props.navigation.navigate('SetSubscriptionPlan');
  };

  async handleSignUp() {
    if (
      this.state.email == '' ||
      this.state.company == '' ||
      this.state.firstname == '' ||
      this.state.lastname == '' ||
      this.state.contact == '' ||
      this.state.password == ''
    ) {
      ToastAndroid.show('Please enter all details', ToastAndroid.SHORT);
      return;
    }

    this.setState({loading: true});
    let isEmailExist = await this.checkEmailExist();
    if (isEmailExist) {
      ToastAndroid.show('Email already exists', ToastAndroid.SHORT);
      this.setState({loading: false});
      return;
    }
    let isCompanyExist = await this.checkCompanyExist();
    if (isCompanyExist) {
      ToastAndroid.show('Company name already exists', ToastAndroid.SHORT);
      this.setState({loading: false});
      return;
    }
    let isMobileExist = await this.checkMobileExist();
    if (isMobileExist) {
      ToastAndroid.show('Mobile Number already exists', ToastAndroid.SHORT);
      this.setState({loading: false});
      return;
    }

    try {
      let res = await fetch(
        'http://mobileapiv2.ezyfind.co.za/api/User/RegisterBusiness',
        {
          method: 'POST',
          body: JSON.stringify({
            Email: this.state.email,
            ContactNo: this.state.contact,
            CompanyName: this.state.company,
            FirstName: this.state.firstname,
            LastName: this.state.lastname,
            Password: this.state.password,
            provinceId: '1',
            cityId: '2',
            suburbId: '42',
            CategoryID: '1402',
            PackageID: '3',
            DomainUrl: '1',
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            'Content-Length': 0,
          },
        },
      );

      let jsonRes = await res.json();
      console.log(jsonRes);
      if (jsonRes.result !== null && jsonRes.status == true) {
        // Alert.alert('', 'Registration Successfull')
        this.setState({isVisible:true})
      }
    } catch (error) {
      console.log(error);
    }

    this.setState({loading: false});
  }

  async checkEmailExist() {
    try {
      let res = await fetch(
        `http://mobileapiv2.ezyfind.co.za/api/User/EmailCheck/${
          this.state.email
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            'Content-Length': 0,
          },
        },
      );
      if (res.status == 200) {
        let jsonRes = await res.json();
        console.log(jsonRes);
        if (jsonRes.result == 'false') {
          return true;
        }
        return false;
      } else {
        ToastAndroid.show(
          `${res.status} ${res.statusText}`,
          ToastAndroid.SHORT,
        );
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async checkCompanyExist() {
    try {
      let res = await fetch(
        `http://mobileapiv2.ezyfind.co.za/api/User/CompanyCheck/${
          this.state.company
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            'Content-Length': 0,
          },
        },
      );
      if (res.status == 200) {
        let jsonRes = await res.json();
        console.log(jsonRes);
        if (jsonRes.result == 'false') {
          return true;
        }
        return false;
      } else {
        ToastAndroid.show(
          `${res.status} ${res.statusText}`,
          ToastAndroid.SHORT,
        );
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async checkMobileExist() {
    try {
      let res = await fetch(
        `http://mobileapiv2.ezyfind.co.za/api/User/MobileCheck/${
          this.state.contact
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            'Content-Length': 0,
          },
        },
      );
      if (res.status == 200) {
        let jsonRes = await res.json();
        console.log(jsonRes);
        if (jsonRes.result == 'false') {
          return true;
        }
        return false;
      } else {
        ToastAndroid.show(
          `${res.status} ${res.statusText}`,
          ToastAndroid.SHORT,
        );
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={styles.paddingview}>
            <Modal
              transparent={true}
              style={{opacity: 0.2}}
              animationType="fade"
              visible={this.state.isVisible}
              onRequestClose={() => {
                console.log('Modal has been closed.');
              }}>
              <View style={styles.newmodal}>
                <View style={styles.modalInner}>
                  <Text style={styles.text}>Select Account Type</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      padding: 20,
                      alignSelf: 'center',
                      backgroundColor: 'white',
                    }}>
                    <TouchableOpacity>
                      <View
                        style={{
                          padding: 20,
                          borderColor: 'red',
                          borderWidth: 1,
                          marginRight: 20,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={{
                            width: 70,
                            height: 90,
                            marginBottom: 17,
                            marginLeft: 10,
                          }}
                          source={require('../assets/Group49.png')}
                        />
                        <Text style={{color: '#323232', fontSize: 20}}>
                          Individual
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View
                        style={{
                          padding: 20,
                          borderColor: 'red',
                          borderWidth: 1,
                          borderRadius: 10,
                        }}>
                        <Image
                          style={{
                            width: 70,
                            height: 90,
                            marginBottom: 15,
                            marginLeft: 7,
                          }}
                          source={require('../assets/Group47.png')}
                        />
                        <Text style={{color: '#323232', fontSize: 20}}>
                          Business
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={this.buttonClickListener}>
                    {/* <Text style={styles.newbuttonText}>Proceed</Text> */}
                    <Image
                      style={{marginLeft: 7, marginBottom: 10}}
                      source={require('../assets/button.png')}
                    />
                  </TouchableOpacity>
                  {/* <Text style={{ color: "white", fontSize: 20, bottom:12, marginLeft:7,}}>Proceed</Text> */}
                </View>
              </View>
            </Modal>
            {/* <Image
                        style={styles.tinyLogo}
                        source={require('../assets/LoginIcon.png')} */}
            {/* /> */}
            {/* <Text style={styles.header}> Sign Up </Text> */}

            <TextInput
              style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="First Name"
              placeholderTextColor="gray"
              onChangeText={val => {
                this.setState({
                  firstname: val,
                });
              }}
            />

            <TextInput
              style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="Last Name"
              placeholderTextColor="gray"
              onChangeText={val => {
                this.setState({
                  lastname: val,
                });
              }}
            />

            <TextInput
              style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="Company Name"
              placeholderTextColor="gray"
              onChangeText={val => {
                this.setState({
                  company: val,
                });
              }}
            />

            <TextInput
              style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="Contact Number"
              placeholderTextColor="gray"
              onChangeText={val => {
                this.setState({
                  contact: val,
                });
              }}
            />

            <TextInput
              style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="EMAIL"
              placeholderTextColor="gray"
              onChangeText={val => {
                this.setState({
                  email: val,
                });
              }}
            />

            <TextInput
              style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="PASSWORD"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={val => {
                this.setState({
                  password: val,
                });
              }}
            />

            {/* <TextInput
              style={styles.textinput}
              underlineColorAndroid="gray"
              placeholder="REPEAT PASSWORD"
              placeholderTextColor="gray"
              autoCapitalize="none"
            /> */}

            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  style={{}}
                  label=""
                  onChange={checked => console.log('I am checked', checked)}
                />
              </View>
              <Text
                style={{
                  color: '#919191',
                  marginLeft: 37,
                  marginTop: -22,
                  opacity: 0.5,
                }}>
                I Agree With the
              </Text>
              <Text style={{color: '#919191', marginLeft: 135, marginTop: -19}}>
                Terms And Conditions
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // this.setState({isVisible: true});
                this.handleSignUp();
              }}>
              {this.state.loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Continue</Text>
              )}
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 50,
              }}
            />

            <Text style={styles.signup}> Sign Up With </Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                padding: 20,
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 100,
              }}>
              <Image
                style={{width: 40, height: 40, marginLeft: 20, marginRight: 20}}
                source={require('../assets/facebook.png')}
              />
              <Image
                style={{width: 40, height: 40, marginLeft: 20, marginRight: 20}}
                source={require('../assets/google.png')}
              />
              <Image
                style={{width: 40, height: 40, marginLeft: 20, marginRight: 20}}
                source={require('../assets/link.png')}
              />
              <Image
                style={{width: 40, height: 40, marginLeft: 20, marginRight: 20}}
                source={require('../assets/tweet.png')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  headerWrapper: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  header: {
    fontSize: 35,
    // alignSelf: 'left',
    color: 'gray',
    marginBottom: 10,
  },
  signup: {
    marginTop: -11,
    alignSelf: 'center',
    fontSize: 15,
    color: '#8E8E8E',
    width: 90,
    backgroundColor: '#ffffff',
  },
  paddingview: {
    padding: 20,
    // backgroundColor:"white",
    height: '100%',
  },
  box: {
    flexBasis: 75,
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    margin: 10,
  },
  forgetPass: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 15,
    color: 'gray',
  },
  checkboxContainer: {
    marginTop: 25,
  },
  checklable: {
    borderRadius: 20,
    borderColor: 'gray',
  },
  button: {
    backgroundColor: '#db3236',
    padding: 15,
    borderRadius: 20,
    width: 220,
    marginTop: 20,
    alignSelf: 'center',
  },
  newbutton: {
    backgroundColor: '#db3236',
    padding: 8,
    borderRadius: 20,
    width: 180,
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
  },
  newbuttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  tinyLogo: {
    width: 170,
    height: 100,
    resizeMode: 'stretch',
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 50,
    marginTop: 50,
  },

  newOne: {
    width: 170,
    flex: 3,
  },
  newsignup: {
    fontSize: 15,
    color: 'gray',
  },
  dont: {
    fontSize: 14,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  newmodal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  modalInner: {
    height: 320,
    width: 320,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    borderRadius: 20,
    marginLeft: 40,
    marginRight: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 11,
  },
  extinput: {
    marginTop: 193,
    fontSize: 15,
  },
  textinput: {
    marginTop: 16,
    fontSize: 15,
  },
});
export default Signup;
