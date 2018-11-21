/* This is the tools home
 * it contains a stackNavigator for the header and settings subsystem
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Switch, AsyncStorage, Picker, ScrollView } from 'react-native';
 import { DrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
 import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

 import { Button } from 'react-native-elements';
 import Icon from 'react-native-vector-icons/FontAwesome5';

 import { Col, Row, Grid } from "react-native-easy-grid";

 import * as Progress from 'react-native-progress';

import { AddCalendarEventStack,
         AddCalendarEventScreen } from './Diary/CalendarEvent.js'

import { CreateSessionScreen } from './Planning/CreateSession.js'

/* This is the main Screen for tools
 * it contains a header formatting for the stack navigator
 */
class DiaryHomeScreen extends React.Component {
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
      title: "Diary",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  //The screen itself
  render() {
    return (
      <ScrollView>
      <View style={{ height: 20 }} />
      <View style={{ elevation: 4, backgroundColor: '#ddd' }} >
        {/* Projects */}
        {/* Title */}
        <View style={{ height: 600 }}>
          <Grid>
            <Col size={1} />

            <Col size={21} >
            {/* First Project */}
              <Row size={1}/>
              <Row size={11}>
              <TouchableOpacity style={{backgroundColor: 'black', flex: 1}}>
                <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  {/* Text Formatting */}
                  <Grid>
                    <Col size={1} />
                    <Col size={10}>
                      <Row size={1} />
                      <Row size={2}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Overview for today</Text>
                      </Row>
                      <Row size={5}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Here you will find the calendar with planned sessions. This is not needed for navigation, therefore there is a placeholder here</Text>
                      </Row>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              </Row>
              <Row size={1} />
              {/* Second Project */}
              <Row size={5}>
              <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('AddCalendarEvent')}>
                <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  {/* Text Formatting */}
                  <Grid>
                    <Col size={1} />
                    <Col size={10}>
                      <Row size={1} />
                      <Row size={4}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create a new Calendar Event</Text>
                      </Row>
                      <Row size={5}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>To create an entry for the calendar, press here</Text>
                      </Row>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              </Row>
              <Row size={1} />
              {/* Third Project */}
              <Row size={5}>
              <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('CreateSession')}>
                <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  {/* Text Formatting */}
                  <Grid>
                    <Col size={1} />
                    <Col size={10}>
                      <Row size={1} />
                      <Row size={4}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Plan Session</Text>
                      </Row>
                      <Row size={5}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>To plan a new session, press here</Text>
                      </Row>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              </Row>
              <Row size={1} />
            </Col>
            <Col size={1} />
          </Grid>

        </ View>
      </View>
      </ScrollView>
    );
  }
}

//The stack navigator for the tools screen

const DiaryHome = createStackNavigator(
  {
    DiaryHome: DiaryHomeScreen,
    AddCalendarEvent: AddCalendarEventScreen,
    CreateSession: CreateSessionScreen,
  },
  {
    initialRouteName: 'DiaryHome',
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

DiaryHome.navigationOptions = {
    drawerLabel: 'Diary',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name='calendar-alt'
        color='black'
        size={24}
      />
    ),
};


export { DiaryHome, AddCalendarEventStack };
