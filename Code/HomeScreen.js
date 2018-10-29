import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Col, Row, Grid } from "react-native-easy-grid";

import { textStyles } from "./Styles.js"

const hystyle = StyleSheet.create({
  containerStyle: {
    borderWidth: 5,
    borderRadius: 2,
    borderColor: '#aaa',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  }
});

/* a big ass hyphen to seperate the Screen
 */
class BigHyphen extends React.Component {
  render() {
    return (
      <View style={hystyle.containerStyle} />
    );
  }
};


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
        <View style={{ height: 5 }} />
        {/* Favourites */}
        {/* Title */}
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={textStyles.title}> Favourites </Text>
        </View>
        {/* Tiles */}
        <View style={{ height: 300 }}>
          <Grid>

            <Col size={1} />

            <Col size={10}>
              <Row size={1} />
              <Row size={10} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                  <Text> Favourite 1 </Text>
                </View>
              </Row>
              <Row size={1} />
              <Row size={10} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                  <Text> Favourite 3 </Text>
                </View>
              </Row>
              <Row size={1} />
            </Col>

            <Col size={1} />

            <Col size={10}>
              <Row size={1} />
              <Row size={10} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                  <Text> Favourite 2 </Text>
                </View>
              </Row>
              <Row size={1} />
              <Row size={10} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}} >
                  <Text> Favourite 4 </Text>
                </View>
              </Row>
              <Row size={1} />
            </Col>

            <Col size={1} />

          </Grid>
        </View>

        {/* A hyphen to seperate */}
        <BigHyphen />
        {/* Some offset at the top */}
        <View style={{ height: 5 }} />

        {/* Progress */}
        {/* Title */}
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={textStyles.title}> Projects </Text>
        </View>
        <View style={{ height: 300 }}>
        </ View>

        {/* A hyphen to seperate */}
        <BigHyphen />
        {/* Some offset at the top */}
        <View style={{ height: 5 }} />

        {/* Tasks */}
        {/* Title */}
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={textStyles.title}> Tasks </Text>
        </View>
        <View style={{ height: 300 }}>
        </ View>

      </ScrollView>



    );
  }
}



export { HomeScreen };
