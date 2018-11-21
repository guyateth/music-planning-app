/* This is the settings home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


/* This is the main Screen for settings
 * it contains a header formatting for the stack navigator
 */
class SettingsHomeStack extends React.Component {
  //Formatting options
  static navigationOptions = ({ navigation }) => {
    return {

      //The header text
      title: "Settings",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };
  //The screen itself
  render() {
    return (
      <Text> Placeholder </Text>
    );
  }
}

export { SettingsHomeStack };
