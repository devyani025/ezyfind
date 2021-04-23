import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SingleChat from '../screens/SingleChat';
import DrawerContent from './DrawerContent'
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Constant from '../constants/Constant';
import WorkInProgress from '../screens/WorkInProgress';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermCondition from '../screens/TermCondition';
import ChangePassword from '../screens/ChangePassword';
import SettingsScreen from '../screens/SettingsScreen';
import ContactUs from '../screens/ContactUs';
import AboutUs from '../screens/AboutUs';
import FaqScreen from '../screens/FaqScreen';
import Feed from '../screens/Feed';
import MyFeed from '../screens/MyFeed';
import CreateFeed from '../screens/CreateFeed';
import FeedComments from '../screens/FeedComments';
import FeedDetails from '../screens/FeedDetails';
import EditFeed from '../screens/EditFeed';
import VideoRecord from '../components/VideoRecord';
import MyReviews from '../screens/MyReviews';
import SetSubscriptionPlan from '../screens/SetSubscriptionPlan';
import Companyinfo from '../screens/Companyinfo';
import Payment42 from '../screens/Payment42';
import Special from '../screens/Special';
import RequestItem from '../screens/RequestItem';
import MyRequest from '../screens/MyRequest';
import Request25 from '../screens/Request25';
import Marsh26 from '../screens/Marsh26';
import WhiteHouseInteriors from '../screens/WhiteHouseInteriors';
import RateandReview from '../screens/RateandReview';
import Catalogue36 from '../screens/Catalogue36';
import Categories20 from '../screens/Categories20';
//splash
const SplashStack = createStackNavigator({
  Splash: SplashScreen,
});

SplashStack.navigationOptions = {
  tabBarLabel: 'Splash'
};

//splash
const SingleChatStack = createStackNavigator({
  screen: SingleChat,

  
});

SingleChatStack.navigationOptions = {
  tabBarLabel: 'Chat'
};

//login
const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerBackTitle: null,
      header:null
    }
  },
  
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerBackTitle: null,
      header:null
    }
  },
 
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  SetSubscriptionPlan: {
    screen: SetSubscriptionPlan,
    navigationOptions: {
      headerBackTitle: null,
    }
  },


  Companyinfo: {
    screen: Companyinfo,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  Payment42:{
    screen: Payment42,
    navigationOptions: {
      headerBackTitle: null,
    }
  },


  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
},
  {
    initialRouteName: 'Login',
  });


//login
const EditProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerBackTitle: null,

    }
  },
});

const PrivacyStack = createStackNavigator({
  PrivacyPolicy: {
    screen: PrivacyPolicy,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
});

const TermConditionStack = createStackNavigator({
  TermCondition: {
    screen: TermCondition,
    navigationOptions: {
      headerBackTitle: null,
      // headerBackTitleVisible:true
    }
  },

  WhiteHouseInteriors: {
    screen: WhiteHouseInteriors,
    navigationOptions: {
      headerBackTitle: null,
      // headerBackTitleVisible:true
    }
  },

  RateandReview: {
    screen: RateandReview,
    navigationOptions: {
      headerBackTitle: null,
      // headerBackTitleVisible:true
    }
  },
});

const ChangePasswordStack = createStackNavigator({
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
}, {
  initialRouteName: 'ChangePassword'
});

const SettingsStack = createStackNavigator({
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
}, {
  initialRouteName: 'SettingsScreen'
});

const MyReviewsStack = createStackNavigator({
  MyReviewsStack: {
    screen: MyReviews,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
}, {
  // initialRouteName: 'MyReviews'
});

const ContactUsStack = createStackNavigator({
  ContactUs: {
    screen: ContactUs,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
},{
  initialRouteName:'ContactUs'
});

const AboutUsStack = createStackNavigator({
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
},{
  initialRouteName:'AboutUs'
});

const FaqStack = createStackNavigator({
  FaqScreen: {
    screen: FaqScreen,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  Special:{
    screen: Special,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  Catalogue36: {
    screen: Catalogue36,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

},{
  initialRouteName:'FaqScreen'
});


const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  RequestItem: {
    screen: RequestItem,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  Request25: {
    screen: Request25,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  Categories20: {
    screen: Categories20,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  MyRequest: {
    screen: MyRequest,
    navigationOptions: {
      headerBackTitle: null,
    }
  },

  Marsh26: {
    screen: Marsh26,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  

  MyFeed: {
    screen: MyFeed,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  CreateFeed: {
    screen: CreateFeed,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  VideoRecord: {
    screen: VideoRecord,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  FeedDetails: {
    screen: FeedDetails,
    navigationOptions: {
      headerShown: false,
    }
  },
  FeedComments: {
    screen: FeedComments,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
  EditFeed: {
    screen: EditFeed,
    navigationOptions: {
      headerBackTitle: null,
    }
  },
},{
  initialRouteName:'Feed'
});

const WorkInProgressStack = createStackNavigator({
  screen: WorkInProgress,
}, {
  headerLayoutPreset: 'center',
  initialRouteName: 'screen'
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    
    // [Constant.edit_profile]: EditProfileStack,
    [Constant.near_by]: MainTabNavigator,
    [Constant.edit_profile]: EditProfileStack,
    [Constant.settings]: SettingsStack,
    [Constant.faq]: FaqStack,
    [Constant.feed]: FeedStack,
    [Constant.about_us]: AboutUsStack,
    [Constant.my_Reviews]: MyReviewsStack,
    // [Constant.notification]: WorkInProgressStack,
    // Setting: MainTabNavigator,
    [Constant.share_app]: WorkInProgressStack,
    [Constant.privacy_policy]: PrivacyStack,
    [Constant.term_condition]: TermConditionStack,
    [Constant.contact_us]: ContactUsStack,
    [Constant.change_password]: ChangePasswordStack,
    [Constant.logout]: WorkInProgressStack,
  },
  {
    drawerWidth: Dimensions.get('window').width,
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerWidth: 300,
    edgeWidth:300,
    // drawerType:'slide',
    //drawerPosition: 'left',
    // drawerBackgroundColor: 'transparent',
    // drawerBackgroundColor: Colors.primaryColor,
    overlayColor: 0.8,
     
  }
);

MyDrawerNavigator.navigationOptions = {
  header: false
}

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Splash: SplashStack,
  Auth: AuthStack,
  Main: MyDrawerNavigator,
  m: MyDrawerNavigator,
  SingleChat: SingleChatStack,
}),
  {
    initialRouteName: 'Auth',
  }
);
