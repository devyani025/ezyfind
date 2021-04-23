import Toast from 'react-native-root-toast';
import Constant from '../constants/Constant';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


_emailValidate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    return false;
  } else {
    console.log("Email is Correct");
    return true;
  }
}

heightValidation = (heightft) => {
  if (heightft >= 2 && heightft <= 9) {
    return true;
  }
  else {
    return false;
  }
}
// Add a Toast on screen.
toastShow = (msg) => {
  Toast.show(msg, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    }
  });
}

handleClick = () => {
  const min = 1;
  const max = 100;
  const rand = min + Math.random() * (max - min);
  return rand
}

is_url = (str) => {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

_signOutAsync = async (navigation) => {

  LoginManager.logOut();
  await AsyncStorage.clear();
  navigation.navigate('Login');
  // ApiService.api.get(ApiService.logout)
  //   .then((response) => {

  //   })
  //   .catch(function (error) {
  //     //Utils.toastShow(Constant.message)

  //     console.log("error " + error);
  //   })
};

const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJqdGkiOiI3YzM4NDU5Ni05YzMxLTRjYzQtODY1Mi1mZTg3ZDE3M2MyMjciLCJJZCI6IjU1OTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYWluIEJ1c2luZXNzIFVzZXIiLCJleHAiOjE2MTkxNjI1MjYsImlzcyI6Ind3dy5FenlGaW5kLmNvLnphIiwiYXVkIjoid3d3LkV6eUZpbmQuY28uemEifQ.nxSQIIEJdGkZ0wD9udqZKkuwxzgZ-7H3ENGqXeK_OQI'


export {
  // _emailValidate,
  // toastShow,
  // handleClick,
  // is_url,
  // _signOutAsync,
  // heightValidation,
  bearerToken
}