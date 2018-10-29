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
class SettingsHomeScreen extends React.Component {
  //Formatting options
  static navigationOptions = ({ navigation }) => {
    return {
      //the three bars in the header
      headerLeft: (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onPress={() => navigation.toggleDrawer()}
            icon={{name: 'menu', size: 30}}
            buttonStyle={{
              flex: 1,
              backgroundColor: "transparent",
            }}
          />
        </View>
      ),
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

//The stack navigator for the settings screen

const SettingsHome = createStackNavigator(
  {
    SettingsHome: SettingsHomeScreen,
  },
  {
    initialRouteName: 'SettingsHome',
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

//How the settings tab appears inside the app's drawer

SettingsHome.navigationOptions = {
  drawerLabel: 'Settings',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name='gear'
      color='black'
      size={24}
    />
  ),

};


export { SettingsHome };
