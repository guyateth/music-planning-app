/* This is the tools home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Realm = require('realm');
import realm from '../Database/Schemas.js'

/* This is the main Screen for tools
 * it contains a header formatting for the stack navigator
 */
class TodayScreen extends React.Component {

  constructor(){
    super();
  }

  addDBentry = () => () => {
    realm.write(() => {
      let myCar = realm.create('SessionEntry', {
        date:  new Date(Date.now()),
        title: 'string',
        subtitle: 'fling',
        tasks: 'string'
      });
    });
  }

  readDBentries = () => () => {
    Realm.open({schema: [Schemas.SessionEntry]})
    .then(realm => {
      let dogs = realm.objects('SessionEntry');
      console.log(dogs);
    })
    .catch(error => {
    // Handle the error here if something went wrong
    });

  }

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
      title: "Today\'s Session",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };
  //The screen itself
  render() {
    return (
      <Text>Today's session PlaceHolder</Text>
    );
  }
}

//The stack navigator for the tools screen

const TodayStack = createStackNavigator(
  {
    Today: TodayScreen,
  },
  {
    initialRouteName: 'Today',
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



export { TodayStack, TodayScreen };
