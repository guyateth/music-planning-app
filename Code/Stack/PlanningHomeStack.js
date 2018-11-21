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

/*
 * Import Submodules
 */


/* This is the main Screen for planning
 * it contains a header formatting for the stack navigator
 */
class PlanningHomeStack extends React.Component {
  constructor() {
    super();

  }
  //Formatting options
  static navigationOptions = ({ navigation }) => {
    return {
      //the three bars in the header
      //The header text
      title: "Planning",
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
              <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('Today')}>
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
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Here you will find the overview over todays session. This is not needed for navigation, therefore there is a placeholder here</Text>
                      </Row>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              </Row>
              <Row size={1} />
              {/* Second Project */}
              <Row size={5}>
              <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('CreateSession')}>
                <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  {/* Text Formatting */}
                  <Grid>
                    <Col size={1} />
                    <Col size={10}>
                      <Row size={1} />
                      <Row size={4}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create a new Session</Text>
                      </Row>
                      <Row size={5}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>To create a new Session, click here</Text>
                      </Row>
                    </Col>
                  </Grid>
                </View>
              </TouchableOpacity>
              </Row>
              <Row size={1} />
              {/* Third Project */}
              <Row size={5}>
              <TouchableOpacity style={{backgroundColor: 'black', flex: 1}} onPress={this.navigateToScreen('History')}>
                <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  {/* Text Formatting */}
                  <Grid>
                    <Col size={1} />
                    <Col size={10}>
                      <Row size={1} />
                      <Row size={4}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>View History</Text>
                      </Row>
                      <Row size={5}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>To view your history, click here</Text>
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



export { PlanningHomeStack };
