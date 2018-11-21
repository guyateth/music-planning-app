/* This is the tools home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

/* This is the main Screen for tools
 * it contains a header formatting for the stack navigator
 */
class ProjectScreenStack extends React.Component {
  static navigationOptions = ({ navigation }) => {
    //Formatting options
    return {

      //The header text
      title: "Project Overview",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };
  //The screen itself
  render() {
    return (
      <Text>Project PlaceHolder</Text>
    );
  }
}




export { ProjectScreenStack };
