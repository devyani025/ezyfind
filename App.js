import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import AppNavigator from './src/navigation/AppNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import firebase, { RNFirebase } from 'react-native-firebase';
import {MenuProvider} from 'react-native-popup-menu';
// import SQLite from 'react-native-sqlite-storage';

console.disableYellowBox = true;

firebase.crashlytics().enableCrashlyticsCollection();

// global.db = SQLite.openDatabase(
//   {
//     name: 'SQLite',
//     location: 'default',
//     createFromLocation: '~SQLite.db',
//   },
//   () => { },
//   error => {
//     console.log("ERROR: " + error);
//   }
// );

export default class App extends React.Component {
  
  // const [isLoadingComplete, setLoadingComplete] = useState(false);

  // if (!isLoadingComplete
  //   //  && !props.skipLoadingScreen
  //    ) {
  //   return (
      // <AppLoading
      //   startAsync={loadResourcesAsync}
      //   onError={handleLoadingError}
      //   onFinish={() => handleFinishLoading(setLoadingComplete)}
      // />
    //   <View>
    //     <Text>ppppppppp</Text>
    //   </View>
    // );
  // } else {

  async componentDidMount() {
    // this.props.navigation.navigate('LoginOptions');
    var token = await AsyncStorage.getItem('token');
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      // user has a device token
      console.log(fcmToken);
      AsyncStorage.setItem('fcm_token', fcmToken);
    } else {
      // user doesn't have a device token yet
      console.log(fcmToken);
    }

    if (this.hasPermission()) {

      firebase.notifications().setBadge(0);

      this.removeNotificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        console.log('notification displayed');
      });
      this.removeNotificationListener = firebase.notifications().onNotification((notification) => {
        // Process your notification as required
        console.log('notification received', notification);
        this.showNotification(notification);
      });

      this.removeNotificationOpenListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        firebase.notifications().setBadge(0);
        const notification = notificationOpen.notification;
        navigator && console.log('notification open', navigator.dispatch(NavigationActions.navigate({ routeName: 'Notification' })));
        notification && firebase.notifications().removeDeliveredNotification(notification.notificationId);
        // this.props.navigation.navigate('Notification');
      });

      const notificationOpen = await firebase.notifications().getInitialNotification();
      if (notificationOpen) {
        // App was opened by a notification
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification = notificationOpen.notification;
        firebase.notifications().setBadge(0);
        notification && firebase.notifications().removeDeliveredNotification(notification.notificationId);

        // token && navigator && console.log('notification open', navigator.dispatch(NavigationActions.navigate({ routeName: 'Notification' })));

      }

    } else {
      console.log('notification permissions requested');
      this.askPermission();
    }
  }

  componentWillUnmount() {
    this.removeNotificationDisplayedListener && this.removeNotificationDisplayedListener();
    this.removeNotificationListener && this.removeNotificationListener();
    this.removeNotificationOpenListener && this.removeNotificationOpenListener();
  }

  hasPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
      return true;
    } else {
      // user doesn't have permission
      return false;
    }
  }

  askPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
    } catch (error) {
      // User has rejected permissions
    }
  }

  showNotification = async (notification) => {

    if (Platform.OS === 'android') {
      notification.android.setChannelId('fitness_notify');
    }

    console.log(Platform.OS+'badge',notification.data.badge)
    if(Platform.OS==='ios' && notification.data.badge){
      firebase.notifications().setBadge(notification.data.badge);
    }

    firebase.notifications().displayNotification(notification);
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#FE5665"} barStyle='light-content' />
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
      </View>

    );
  }
}

async function loadResourcesAsync() {

  const images = await Asset.loadAsync([
    require('./src/assets/images/robot-dev.png'),
    require('./src/assets/images/robot-prod.png'),
  ]);

  const fonts = await Font.loadAsync({
    // This is the font that we are using for our tab bar
    ...Ionicons.font,
    // We include SpaceMono because we use it in HomeScreen.js. Feel free to
    // remove this if you are not using it in your app
    'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
    //'futura-book': require('./assets/fonts/tt0140m_1.ttf'),
    //'futura-bold': require('./assets/fonts/tt0144m_1.ttf'),
    //'futura-medium': require('./assets/fonts/tt0142m_1.ttf'),
    //'futura-light': require('./assets/fonts/FutuLt.ttf'),
    'futura-heavy': require('./src/assets/fonts/FUTURAH.ttf'),
    'futura-extra-heavy': require('./src/assets/fonts/FUTURAXK.ttf'),
  })

  return Promise.all([images,fonts]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  console.log('loading finish')
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
