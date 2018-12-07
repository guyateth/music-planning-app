/* This is the tools home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Slider, ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

var Sound = require('react-native-sound');
import { Col, Row, Grid } from "react-native-easy-grid";

/* This is the main Screen for tools
 * it contains a header formatting for the stack navigator
 */
class MetronomeScreen extends React.Component {
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
      title: "Metronome",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };
  constructor () {
    super();
    Sound.setCategory('Playback');
    this.click = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
  // loaded successfully
      console.log('duration in seconds: ' + this.click.getDuration() + 'number of channels: ' + this.click.getNumberOfChannels());
    });

    this.drunk = new Sound('drunk.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
  // loaded successfully
      console.log('duration in seconds: ' + this.drunk.getDuration() + 'number of channels: ' + this.drunk.getNumberOfChannels());
    });
    this.bpm = 100;
    this.interval = 400;
    this.isDrunk = false;
    this.started = false;
  }
  setBpm(bpm) {
    this.bpm = bpm;
    this.bpm = Math.round(this.bpm);
    this.forceUpdate();
  }
  setTime(bpm) {
    this.bpm = bpm;
    this.bpm = Math.round(this.bpm);
    this.interval = 60000 / this.bpm;
    this.stopSound();
    this.startSound();

  }
  loopSound (click, drunk, isDrunk){

      click.play();

  }
  createInterval(f,dp1, dp2, dp3,interval) {
    dp1.play();
    console.log(interval);
    this.nIntervId = setInterval(function() { f(dp1, dp2, dp3); }, interval);
  }
  startSound() {
    if (!this.started){
      this.started = true;
      this.createInterval(this.loopSound, this.click,this.drunk, this.isDrunk, (this.interval - 15));
    }
  }
  stopSound () {
    if (this.started){
      this.started = false;
      clearInterval(this.nIntervId);
    }
  }
  toggleSound () {
    if (this.started){
      this.started = false;
      this.stopSound();
    } else {
      this.started = true;
      this.startSound();
    }
  }
  //The screen itself
  render() {
    return (
      <ScrollView>
        <View style ={{height: 20, flex: 1, alignItems: 'center'}}/>
        <View style ={{height: 30, flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>BPM</Text>
        </View>
        <View style ={{height: 40, flex: 1}}>
          <Slider maximumValue={220}
                  minimumValue={10}
                  value={this.bpm}
                  onValueChange={(bpm) => this.setBpm(bpm)}
                  onSlidingComplete={(bpm) => this.setTime(bpm)}/>
        </View>
        <View style ={{height: 30, flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.bpm}</Text>
        </View>
        <View style={{height: 40, flex: 1}}>
          <Grid>
            <Col>
              <Button
                onPress={() => this.startSound()}
                icon={{name: 'play', size: 30, type: 'font-awesome', color: '#555'}}
                buttonStyle={{
                  flex: 1,
                  backgroundColor: "transparent",
                }}
              />
            </Col>
            <Col>
              <Button
                onPress={() => this.stopSound()}
                icon={{name: 'pause', size: 30, type: 'font-awesome', color: '#555'}}
                buttonStyle={{
                  flex: 1,
                  backgroundColor: "transparent",
                }}
              />
            </Col>
          </Grid>
        </View>
      </ScrollView>
    );
  }
}

//The stack navigator for the tools screen

const MetronomeStack = createStackNavigator(
  {
    Metronome: MetronomeScreen,
  },
  {
    initialRouteName: 'Metronome',
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



export { MetronomeStack, MetronomeScreen };
