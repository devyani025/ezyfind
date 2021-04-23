import React, { Component } from 'react';
import { NavigationActions, } from 'react-navigation';
import { ScrollView, TouchableOpacity, View, Image, Share, ImageBackground, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import Constant from '../constants/Constant';
import Utils from '../constants/Utils';
import { fontFamily, fontSize } from '../components/styles';
import AsyncStorage from '@react-native-community/async-storage';
import cont from '../components/cont'

class DrawerContent extends Component {
  state = {
    user_name:'',
    user_email: '',
    channels: [
      { screen: Constant.edit_profile, title: Constant.edit_profile, image: cont.edit_profile  },
      { screen: Constant.feed, title: Constant.feed,  image: cont.feed},
      { screen: Constant.near_by, title: Constant.near_by,  image: cont.near_by},
      { screen: Constant.settings, title: Constant.settings,  image: cont.settings},
      // { screen: Constant.notification, title: Constant.notification, },
      { screen: Constant.privacy_policy, title: Constant.privacy_policy,  image: cont.privacy_policy},
      { screen: Constant.term_condition, title: Constant.term_condition,  image: cont.term_condition},
      { screen: Constant.faq, title: Constant.faq,  image: cont.faq},
      { screen: Constant.contact_us, title: Constant.contact_us,  image: cont.contact_us},
      { screen: Constant.about_us, title: Constant.about_us,  image: cont.about_us},
      
      { screen: Constant.my_Favirity, title: Constant.my_Favirity,  image: cont.my_Favirity},
      { screen: Constant.my_Reviews, title: Constant.my_Reviews,  image: cont.my_Reviews},
      { screen: Constant.rate_the_app, title: Constant.rate_the_app,  image: cont.rate_the_app},

      { screen: Constant.give_feedback, title: Constant.give_feedback,  image: cont.give_feedback},
      { screen: Constant.share_app, title: Constant.share_app,  image: cont.share_app},
      { screen: Constant.logout, title: Constant.logout,  image: cont.logout},
    ],
    selectedRoute: '',
    userInfo: {}
  };
 

  componentDidMount = async () => {
    let user_info = await AsyncStorage.getItem('user_info')
    let user_details = JSON.parse(user_info)
    this.setState({
      user_name: user_details.name,
      user_email: user_details.email,
      user_image: user_details.image,
    })
  }

  componentWillUnmount = () => {
  }

  componentWillReceiveProps = () => {
    this._UpdateProfile()
  }


  navigateToScreen = route => () => {

    this.setState({ selectedRoute: route === Constant.share_app ? '' : route })

    this.props.navigation.closeDrawer()
    switch (route) {
      case Constant.logout:
        console.log('logout')
        Utils._signOutAsync(this.props.navigation)
        break;

    

      case Constant.change_password:
        console.log('change password')
        this.props.navigation.navigate(Constant.change_password)
        break

      case Constant.feed:
        console.log('change password')
        this.props.navigation.navigate("FeedStack")
        break

        case Constant.share_app:
          console.log('share app')
          this.setState({ selectedRoute: Constant.feed_sidemenu })
          this.props.navigation.navigate('Feed')
          this._ShareApp();
          break

      default:
        const navigate = NavigationActions.navigate({
          routeName: route,
        });

        this.props.navigation.dispatch(navigate);
        break;
    }
  };

  _ShareApp = async () => {
    try {
      const result = await Share.share({
        message:
          'Ezyfind',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('result.activityType')
        } else {
          // shared
          console.log('shared')
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Utils.toastShow(error.message);
    }
  }
  
  _UpdateProfile = () => {
    //this.setState({ userInfo: {} })
    AsyncStorage.getItem(Constant.USERINFO)
      .then(req => JSON.parse(req))
      .then(json => {
        this.setState({ userInfo: json })
      })
      .catch(error => console.log('error : ' + error));
  }

  renderChannelButtons() {
    return this.state.channels.map(({ screen, title, image }) => (
      <TouchableOpacity
        key={screen + title + image}
        onPress={this.navigateToScreen(screen)}
        activeOpacity={0.6}
      >
        <View transparent style={{ height: 46, marginTop: 2, marginBottom: 2 }}>
          {
            screen === this.state.selectedRoute ?
              (
                <View style={{ borderLeftColor: '#fff' }}>
                  <CardItem style={{ borderLeftColor: '#fff',backgroundColor:'#FE5665' }} transparent>
                    <Text style={[{ color:'#fff', marginStart: 8, fontFamily: fontFamily.regular }, styles.font_applied]}>{title}</Text>
                  </CardItem>
                </View>)
              :
              (<View style={{ backgroundColor: 'transparent' }} >
                <CardItem style={{ backgroundColor: 'transparent', }} transparent>
                <Image style={{height:25, width:25, resizeMode:"center"}} source={image}/>
                  <Text style={[{ color: '#232323', marginStart: 8,fontFamily: fontFamily.regular }, styles.font_applied]}>{title}</Text>
                  {/* <Image style={{height:20, width:20}} source={require('../assets/menu/Hire.png')}/> */}
                </CardItem>
              </View>
              )
          }
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View style={[styles.containerStyle]}>
        <View style={{ flex: 1, backgroundColor: Colors.primaryColor, position: 'absolute', top: 0, bottom: 0, height: '100%', width: 300, opacity: 0.9 }} />
        <View style={{ paddingTop: 32, marginStart: 4 }}>
          <Card style={{ flex: 0, backgroundColor: 'transparent' }} transparent>
            <CardItem style={{ backgroundColor: 'transparent' }} transparent>
              <Left>
                <Image source={this.state.user_image ? { uri: this.state.user_image } : require('../assets/images/admin.jpg')} style={styles.img_view} />
                
                <Body>
                  <Text style={[{ color: '#fff', }, styles.font_applied]}>{this.state.user_name}</Text>
                  <Text note style={[{ color: '#fff', padding: 4, }, styles.font_applied]}>{this.state.user_email}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingBottom: 20 }}>
            {this.renderChannelButtons()}
          </View>
        </ScrollView>
      </View>

    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    //backgroundColor: Colors.primaryColor,
  },
  font_applied: {
    fontFamily: fontFamily.regular,
  },
  img_view: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
    ,marginBottom:-10
  },

  imageStyle: { borderRadius: 50 / 2 }
};

export default DrawerContent;
