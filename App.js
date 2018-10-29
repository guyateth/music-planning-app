
//imports
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

//grid
import { Col, Row, Grid } from "react-native-easy-grid";

//custom imports
import { HomeScreen, PlanningHome, ToolsHome, SettingsHome, FeedBackHome } from './Code/Screens.js';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const drawerStyles = StyleSheet.create({
  basicButton: {
    height:60
  },
  subMenuText: {
    height: 60,
    backgroundColor: 'gray'
  },
});

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
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
MainStack.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name='home'
      color='black'
      size={24}
    />
  ),
};

class DrawerElement extends React.Component {
  render() {
    return (
      <View style={drawerStyles.subMenuText} >
        <Grid>
          <Col size= {1}>
            <Icon name ="home"
                  size= {30}/>
          </Col>
          <Col size= {5}>
            <Button
              //onPress={() => this.props.navigationb.navigate('Home')}
              title={this.props.buttonTitle}
            />
          </Col>
        </Grid>
      </View>
    );

  }
}

const MyApp = createDrawerNavigator({
  Home: {
    screen: MainStack,
  },
  Planning: {
    screen: PlanningHome,
  },
  FeedBack: {
    screen: FeedBackHome,
  },
  Tools: {
    screen: ToolsHome,
  },
  Settings: {
    screen: SettingsHome,
  },

} /*,{
  contentComponent: ({ navigation }) => (
    <ScrollView>
      <View style={drawerStyles.subMenuText} >
        <Grid>
          <Col size={1}>
            <Icon name ="gear"
                  size= {30}/>
          </Col>
          <Col size={5}>
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Go back home"
            />
          </Col>
        </Grid>

      </View>
      <DrawerElement buttonTitle="test" />
      <View style={drawerStyles.basicButton} />
      <View style={drawerStyles.subMenuText} />
      <View style={drawerStyles.basicButton} />
      <View style={drawerStyles.subMenuText} />
      <View style={drawerStyles.basicButton} />
      <View style={drawerStyles.subMenuText} />
      <View style={drawerStyles.basicButton} />
      <View style={drawerStyles.subMenuText} />
      <View style={drawerStyles.basicButton} />
      <View style={drawerStyles.subMenuText} />
      <View style={drawerStyles.basicButton} />
    </ScrollView>
  )
}*/

);



export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
