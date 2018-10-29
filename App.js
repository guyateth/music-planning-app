
//imports for react, react native and the navigator
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

//grid for react, for easy gridding
import { Col, Row, Grid } from "react-native-easy-grid";

//custom imports
import { HomeScreen, PlanningHome, ToolsHome, SettingsHome, FeedBackHome } from './Code/Screens.js';

//icons and cleaner buttons
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';



/* The Stach navigator for The Home Stack
 * Handles everything in the Home Tab
 */
const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

/* The layout for the home tab inside the app drawer
 * needed for every single navigation option inside the drawer
 */
MainStack.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name='home'
      color='black'
      size={24}
    />
  ),
};


/* The Main drawer
 * all naviagation options need to be added here
 * There is one for every button inside the drawer
 */
const MyApp = createDrawerNavigator({
  Home: {
    screen: MainStack,
  },
  Planning: {
    screen: PlanningHome,
  },
  FeedBack: {
    screen: FeedBackHome,
  },
  Tools: {
    screen: ToolsHome,
  },
  Settings: {
    screen: SettingsHome,
  },

}

);


/* This is needed for the react native environment
 * Export the code, so it's useable
 */
export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
