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
class CommunityScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    //Formatting options
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
      title: "Community",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };
  //The screen itself
  render() {
    return (
      <Text>placeholder</Text>
    );
  }
}

//The stack navigator for the tools screen

const CommunityHome = createStackNavigator(
  {
    CommunityHomeScreen: CommunityScreen,
  },
  {
    initialRouteName: 'CommunityHomeScreen',
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

//How the tools tab appears inside the app's drawer

CommunityHome.navigationOptions = {
    drawerLabel: 'Community',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='users'
        color='black'
        size={20}
      />
    ),
};


export { CommunityHome };
