/* This is the planning home
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



 const textStyles = StyleSheet.create({
   title: {
     fontSize: 25,
     fontWeight: 'bold',
   },
   subtitle: {
     height: 60,
     backgroundColor: 'gray'
   },
   normalText: {
     height: 60,
     backgroundColor: 'gray'
   },
 });

/* This is the main Screen for planning
 * it contains a header formatting for the stack navigator
 */
class ProjectsHomeStack extends React.Component {
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
              <Row size={5}>
                <Col size={15} >
                <TouchableOpacity style={{ flex: 1}} onPress={this.navigateToScreen('Project')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                    {/* Text Formatting */}
                    <Grid>
                      <Col size={1} />
                      <Col size={10}>
                        <Row size={1} />
                        <Row size={4}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Project 1</Text>
                        </Row>
                        <Row size={5}>
                          <Col size={1}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Phase 3</Text>
                          </Col>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Next up</Text>
                          <Col size={1}>
                          </Col>
                        </Row>
                      </Col>
                    </Grid>
                  </View>
                  </TouchableOpacity>
                </Col>
                <Col size={6} >
                <TouchableOpacity style={{ flex: 1}} onPress={this.navigateToScreen('Project')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2}} >
                    <Progress.Circle size={75} progress={0.77} showsText={true} thickness={8} borderWidth={0} color={'black'} />
                  </View>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row size={1} />
              {/* Second Project */}
              <Row size={5}>
                <Col size={15} >
                <TouchableOpacity style={{ flex: 1}} onPress={this.navigateToScreen('Project')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                    {/* Text Formatting */}
                    <Grid>
                      <Col size={1} />
                      <Col size={10}>
                        <Row size={1} />
                        <Row size={4}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Project 2</Text>
                        </Row>
                        <Row size={5}>
                          <Col size={1}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Phase 1</Text>
                          </Col>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Next up</Text>
                          <Col size={1}>
                          </Col>
                        </Row>
                      </Col>
                    </Grid>
                  </View>
                  </TouchableOpacity>
                </Col>
                <Col size={6} >
                <TouchableOpacity style={{ flex: 1}} onPress={this.navigateToScreen('Project')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2}} >
                    <Progress.Circle size={75} progress={0.15} showsText={true} thickness={8} borderWidth={0} color={'black'} />
                  </View>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row size={1} />
              {/* Third Project */}
              <Row size={5}>
                <Col size={15} >
                <TouchableOpacity style={{ flex: 1}} onPress={this.navigateToScreen('Project')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                    {/* Text Formatting */}
                    <Grid>
                      <Col size={1} />
                      <Col size={10}>
                        <Row size={1} />
                        <Row size={4}>
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Project 3</Text>
                        </Row>
                        <Row size={5}>
                          <Col size={1}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Phase 2</Text>
                          </Col>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Next up</Text>
                          <Col size={1}>
                          </Col>
                        </Row>
                      </Col>
                    </Grid>
                  </View>
                  </TouchableOpacity>
                </Col>
                <Col size={6} >
                <TouchableOpacity style={{ flex: 1}} onPress={this.navigateToScreen('Project')}>
                  <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2}} >
                    <Progress.Circle size={75} progress={0.48} showsText={true} thickness={8} borderWidth={0} color={'black'} />
                  </View>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row size={1} />
              {/* This is the create project at the bottom*/}
              <Row size={5}>
                <Col size={21} >
                  <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('AddProject')}>
                    <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                      {/* Text Formatting */}
                      <Grid>
                        <Col size={1} />
                        <Col size={10}>
                          <Row size={1} />
                          <Row size={4}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create a new Project</Text>
                          </Row>
                          <Row size={5}>
                              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>To create a new Project, click here</Text>
                          </Row>
                        </Col>
                      </Grid>
                    </View>
                  </TouchableOpacity>
                </Col>
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




export { ProjectsHomeStack };
