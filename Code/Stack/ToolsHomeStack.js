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


/* This is the main Screen for tools
 * it contains a header formatting for the stack navigator
 */
class ToolsHomeStack extends React.Component {
  static navigationOptions = ({ navigation }) => {
    //Formatting options
    return {
      //the three bars in the header
      //The header text
      title: "Tools",
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
          <View style={{ height: 400 }}>
            <Grid>
              <Col size={1} />

              <Col size={21} >
              {/* First Project */}
                <Row size={1}/>
                <Row size={5}>
                <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('Metronome')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                    {/* Text Formatting */}
                    <Grid>
                      <Col size={1} />
                      <Col size={10}>
                        <Row size={1} />
                        <Row size={2}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Metronome</Text>
                        </Row>
                        <Row size={5}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Open the Metronome</Text>
                        </Row>
                      </Col>
                    </Grid>
                  </View>
                </TouchableOpacity>
                </Row>
                <Row size={1} />
                {/* Second Project */}
                <Row size={5}>
                <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('Recording')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                    {/* Text Formatting */}
                    <Grid>
                      <Col size={1} />
                      <Col size={10}>
                        <Row size={1} />
                        <Row size={4}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Recording</Text>
                        </Row>
                        <Row size={5}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Open the recordings</Text>
                        </Row>
                      </Col>
                    </Grid>
                  </View>
                </TouchableOpacity>
                </Row>
                <Row size={1} />
                {/* Third Project */}
                <Row size={5}>
                <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('Shop')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                    {/* Text Formatting */}
                    <Grid>
                      <Col size={1} />
                      <Col size={10}>
                        <Row size={1} />
                        <Row size={4}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Store</Text>
                        </Row>
                        <Row size={5}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Open the store</Text>
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

export { ToolsHomeStack };
