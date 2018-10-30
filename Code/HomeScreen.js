import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Col, Row, Grid } from "react-native-easy-grid";

import { textStyles } from "./Styles.js"

import * as Progress from 'react-native-progress';

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
      <ScrollView>
        {/* Some offset at the top */}
        <View style={{ height: 20 }} />
        {/* Wrapper for Favourites */}
        <View style={{ elevation: 4, backgroundColor: '#ddd' }} >
          {/* Favourites */}
          {/* Title */}
          <View style={{ height: 75, }}>
            <Grid>
              <Col size={1} />
              <Col size={22} >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} >
                <Text style={textStyles.title}>Favourites</Text>
                </View>
              </Col>
            </Grid>

          </View>
          {/* Tiles */}
          <View style={{ height: 300 }}>
            <Grid>
              <Col size={1} />
              <Col size={10}>
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                    {/* This is the Tile itself */}
                    <Text> Favourite 1 </Text>
                  </View>
                </Row>
                <Row size={1} />
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                    {/* This is the Tile itself */}
                    <Text> Favourite 3 </Text>
                  </View>
                </Row>
                <Row size={1} />
              </Col>

              <Col size={1} />

              <Col size={10}>
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                    {/* This is the Tile itself */}
                    <Text> Favourite 2 </Text>
                  </View>
                </Row>
                <Row size={1} />
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                    {/* This is the Tile itself */}
                    <Text> Favourite 4 </Text>
                  </View>
                </Row>
                <Row size={1} />
              </Col>

              <Col size={1} />

            </Grid>
          </View>
        </View>
        {/* End of Favourite wrapper */}


        {/* Some offset in between */}
        <View style={{ height: 25 }} />
        {/* Wrapper for Projects */}
        <View style={{ elevation: 4, backgroundColor: '#ddd' }} >
          {/* Projects */}
          {/* Title */}
          <View style={{ height: 75, }}>
            <Grid>
              <Col size={1} />
              <Col size={22} >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} >
                  <Text style={textStyles.title}>Projects</Text>
                </View>
              </Col>
            </Grid>

          </View>
          <View style={{ height: 400 }}>
            <Grid>
              <Col size={1} />

              <Col size={21} >
              {/* First Project */}
                <Row size={5}>
                  <Col size={15} >
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
                  </Col>
                  <Col size={6} >
                    <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2}} >
                      <Progress.Circle size={75} progress={0.77} showsText={true} thickness={8} borderWidth={0} color={'black'} />
                    </View>
                  </Col>
                </Row>
                <Row size={1} />
                {/* Second Project */}
                <Row size={5}>
                  <Col size={15} >
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
                  </Col>
                  <Col size={6} >
                    <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2}} >
                      <Progress.Circle size={75} progress={0.15} showsText={true} thickness={8} borderWidth={0} color={'black'} />
                    </View>
                  </Col>
                </Row>
                <Row size={1} />
                {/* Third Project */}
                <Row size={5}>
                  <Col size={15} >
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
                  </Col>
                  <Col size={6} >
                    <View style={{ backgroundColor:'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2}} >
                      <Progress.Circle size={75} progress={0.48} showsText={true} thickness={8} borderWidth={0} color={'black'} />
                    </View>
                  </Col>
                </Row>
                <Row size={1} />
              </Col>
              <Col size={1} />
            </Grid>

          </ View>
        </View>
        {/* End of Projects */}

        {/* Some offset in between */}
        <View style={{ height: 25 }} />
        {/* Wrapper for Tasks */}
        <View style={{ elevation: 4, backgroundColor: '#ddd' }} >
          {/* Tasks */}
          {/* Title */}
          <View style={{ height: 75, }}>
            <Grid>
              <Col size={1} />
              <Col size={22} >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} >
                <Text style={textStyles.title}>Tasks</Text>
                </View>
              </Col>
            </Grid>

          </View>
          <View style={{ height: 300 }}>
            <Grid>

            </Grid>
          </ View>
        </View>

        {/* Some offset at the bottom */}
        <View style={{ height: 25 }} />
      </ScrollView>



    );
  }
}



export { HomeScreen };
