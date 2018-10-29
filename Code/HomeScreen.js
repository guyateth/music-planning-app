import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  //formatting of the header
  static navigationOptions = ({ navigation }) => {
    return {
      //three bars icon with drawer button
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
      //header text and formatting
      title: "Home",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };
//the main screen
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="Go to notifications"
        />
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Drawer"
        />
      </View>

    );
  }
}

export { HomeScreen };
