import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
import CenterTabBarIcon from '../components/CenterTabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Matches from '../screens/Matches';
import PartnerDetail from '../screens/PartnerDetailScreen';
import Chat from '../screens/Chat';
import Workout from '../screens/Workout';
import Alert from '../screens/Alert';
import SettingsScreen from '../screens/SettingsScreen';
import Filter from '../screens/Filter';
import FriendFilter from '../screens/FriendFilter'
import Colors from '../constants/Colors';
import AddWorkout from '../screens/AddWorkout';
import FriendSearch from '../screens/FriendSearch';
import FriendRequest from '../screens/FriendRequest';
import EditWorkout from '../screens/EditWorkout';
import SingleChat from '../screens/SingleChat';
import BottomTabBar from './BottomTabBar';

import Feed from '../screens/Feed';
import MyFeed from '../screens/MyFeed';
import CreateFeed from '../screens/CreateFeed';
import FeedComments from '../screens/FeedComments';
import FeedDetails from '../screens/FeedDetails';
import EditFeed from '../screens/EditFeed';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
  },
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Filter: Filter,
    FriendSearch: FriendSearch
  },
  config
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'NEAR BY',
    headerStyle: {
      backgroundColor: 'red',
    },
    header: null,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
        source={focused ? require('../assets/images/nearby_select_3x.png') : require('../assets/images/nearby_3x.png')}
      />
    ),
    tabBarVisible,
  };
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,

  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      source={focused ? require('../assets/images/nearby_select_3x.png') : require('../assets/images/nearby_3x.png')}
    />
  ),
};

LinksStack.path = '';

const MatchesStack = createStackNavigator(
  {
    Matches: Matches,
    PartnerDetail: PartnerDetail,
    Filter: Filter,
    FriendSearch: FriendSearch,
    FriendRequest: FriendRequest
  },
  config
);

MatchesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'MATCHES',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        source={focused ? require('../assets/images/matches_select_3x.png') : require('../assets/images/matches_3x.png')}
      />
    ),
    tabBarVisible,
  };
};

MatchesStack.path = '';

const ChatStack = createStackNavigator(
  {
    Chat: Chat,
    SingleChat: SingleChat
  },
  config
);

ChatStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: 'CHAT',
    tabBarIcon: ({ focused }) => (
      <CenterTabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        source={require('../assets/menu/request.png')}
      />
    ),
    tabBarVisible
  }
};

ChatStack.path = '';

const WorkoutStack = createStackNavigator(
  {
    Workout: Workout,
    AddWorkout: AddWorkout,
    EditWorkout: EditWorkout,
  },

  config
);

WorkoutStack.navigationOptions = {
  tabBarLabel: 'WORKOUT',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      source={focused ? require('../assets/images/workout_select_3x.png') : require('../assets/images/workout_3x.png')}
    />
  ),
};

WorkoutStack.path = '';

const AlertStack = createStackNavigator(
  {
    Alert: Alert,
  },
  config
);

AlertStack.navigationOptions = {
  tabBarLabel: 'Wish List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      source={focused ? require('../assets/menu/heart.png') : require('../assets/menu/heart.png')}
    />
  ),
};

AlertStack.path = '';

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
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
}, {
  // initialRouteName:'Feed'
});

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'SETTINGS',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      source={focused ? require('../assets/images/nearby_select_3x.png') : require('../assets/images/nearby_3x.png')}
    />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MatchesStack,
  ChatStack,
  WorkoutStack,
  AlertStack,
  FeedStack
}, {
  tabBarOptions: {
    activeTintColor: Colors.primaryColor,
    style: {
      paddingTop: 7, paddingBottom: 7,
      height: 60,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
    },
    labelStyle: {
      //fontFamily: 'futura-light'
    }
  },
  tabBarComponent: BottomTabBar
});

tabNavigator.path = '';

export default tabNavigator;
