/* This is the planning home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Switch, AsyncStorage} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

/*
 * Import Submodules
 */
 import { ProjectStack, ProjectScreen } from './Projects/Project1.js'
 import { AddProjectStack, AddProjectScreen } from './Projects/NewProject.js'


/* This is the main Screen for planning
 * it contains a header formatting for the stack navigator
 */
class ProjectsHomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      reminders: false
    };
    this.setSettings();

  }
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
      title: "Projects",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };

  switchChanged(field, value) {
    var obj = {};
    obj[field] = value;
    AsyncStorage.getItem('settings').then(function(strResult) {
            var result = JSON.parse(strResult) || {};
            Object.assign(result, obj);
            AsyncStorage.setItem('settings', JSON.stringify(result));
    });
    console.log(obj);
    this.setState(obj);
  }

  async setSettings() {
    try {
        var obj = {};
        var settings = await AsyncStorage.getItem('settings');
        settings = JSON.parse(settings);
        Object.assign(obj, settings);
        this.setState(obj);
    } catch(e) {
    } finally {
    }
  }
  //The screen itself
  render() {
    return (
      <View>
      <Text> Placeholder </Text>
      <Switch
      onValueChange={(value) => this.switchChanged('reminders', value)}
      value={this.state.reminders} />
      </View>
    );
  }
}

//The stack navigator for the planning screen

const ProjectsHome = createStackNavigator(
  {
    ProjectsHome: {
      screen: ProjectsHomeScreen,
      screen: ProjectScreen,
      screen: AddProjectScreen,
    },
  },
  {
    initialRouteName: 'ProjectsHome',
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

//How the planning tab appears inside the app's drawer

ProjectsHome.navigationOptions = {
  drawerLabel: 'Projects',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name='project-diagram'
      color='black'
      size={20}
    />
  ),

};


export { ProjectsHome, ProjectStack, AddProjectStack };
