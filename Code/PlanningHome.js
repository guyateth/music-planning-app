/* This is the planning home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';



class PlanningHomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
      title: "Planning",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };

  render() {
    return (
      <Text> Placeholder </Text>
    );
  }
}

const PlanningHome = createStackNavigator(
  {
    PlanningHome: PlanningHomeScreen,
  },
  {
    initialRouteName: 'PlanningHome',
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

PlanningHome.navigationOptions = {
  drawerLabel: 'Planning',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name='clipboard'
      color='black'
      size={24}
    />
  ),

};

export { PlanningHome };
