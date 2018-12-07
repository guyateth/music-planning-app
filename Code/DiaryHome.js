/* This is the tools home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        View,
        Image,
        TouchableOpacity,
        Switch,
        AsyncStorage,
        Picker,
        ScrollView,
        Animated,
        Modal,
        TouchableWithoutFeedback,
        TextInput,
        DatePickerAndroid } from 'react-native';
import { DrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Col, Row, Grid } from "react-native-easy-grid";

import * as Progress from 'react-native-progress';

import { AddCalendarEventStack,
         AddCalendarEventScreen } from './Diary/CalendarEvent.js'

import { CreateSessionScreen } from './Planning/CreateSession.js'

const Realm = require('realm');
import realm from './Database/Schemas.js'
import { Calendar, Agenda } from 'react-native-calendars'

import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

/* This is the main Screen for tools
 * it contains a header formatting for the stack navigator
 */
class DiaryHomeScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      items: {},
      modalVisible: false,
      title: 'Enter your title',
      subtitle: 'Enter your subtitle',
    }
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
  addDBentry (title, date) {
    console.log('test');
    realm.write(() => {
      let myCar = realm.create('SessionEntry', {
        date:  date,
        title: title,
        subtitle: 'fling',
        tasks: 'string',
      });
      console.log(myCar);
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

  componentWillMount(){
    this.current_date = Date();
    console.log(this.current_date);
    console.log(realm.objects('SessionEntry'));
  }

  loadItems(day) {

      //console.log(day);
      setTimeout(() => {
        dataOut = realm.objects('SessionEntry');
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          var calcDate = new Date (time);
          console.log(calcDate);
          const strTime = this.timeToString(time);
          filteredForDate = dataOut.filtered(
            "date = $0",
            strTime
          );
          if (filteredForDate == {}) {
            this.state.items[strTime] = [];
          } else {
            this.state.items[strTime] = filteredForDate;
          }
          console.log(filteredForDate);
          //this.state.items[strTime] = realm.objects('SessionEntry').filtered('date=='+calcDate);

        }
        //console.log(this.state.items);
        const newItems = {};
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
        this.setState({
          items: newItems
        });
      }, 0);
      console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
      return (
        <View style={[styles.item, {height: 75}]}><Text>{item.title}</Text></View>
      );
    }

    renderEmptyDate() {
      return (
        <View style={styles.emptyDate}><Text>There is nothing scheduled for this date</Text></View>
      );
    }

    rowHasChanged(r1, r2) {
      return r1.name !== r2.name;
    }

    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
    if (visible == true) {
      this.setState({title: 'Enter your title', subtitle: 'Enter your subtitle'});
    }
  }

  async setTime() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        this.setState({subtitle: (year + "-" + (month+1) + "-" + day)});
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  createEvent () {
    this.addDBentry(this.state.title, this.state.subtitle);
    this.setModalVisible(false);

  }

  //The screen itself
  render() {
    return (
      <View style={{ elevation: 4, backgroundColor: '#ddd', flex: 1 }} >
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={Date()}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          // markingType={'period'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
           // monthFormat={'yyyy'}
           // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          />
          <View>
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setModalVisible(false)}}
            >
              <TouchableOpacity
               style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', opacity: 0.75 }}
               activeOpacity={0}
               onPressOut={() => {this.setModalVisible(false)}}
              >
                <Grid>
                  <Col size ={1} />
                  <Col size ={8} >
                    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                      <View
                      style={{ height: 300 }}
                      >
                        <TouchableWithoutFeedback>

                        <View style={{ flex: 1, backgroundColor: 'skyblue', borderRadius: 5 }}>
                          <Grid>
                            <Row size={2}/>
                            <Row size={12}>
                              <Col size={1}/>
                              <Col size={8}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
                                  <Text style={{fontSize: 25}}> Title: </Text>
                                </View>
                              </Col>
                              <Col size={1}/>
                            </Row>
                            <Row size={2}/>
                            <Row size={12}>
                              <Col size={1}/>
                              <Col size={8}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
                                  <TextInput
                                    style={{height: 40, borderColor: 'gray', borderWidth: 0, backgroundColor: 'white', borderRadius: 5, fontSize: 18 }}
                                    onChangeText={(title) => this.setState({title})}
                                    value={this.state.title}
                                    onFocus={(title) => this.setState({title: ''})}
                                  />
                                </View>
                              </Col>
                              <Col size={1}/>
                            </Row>
                            <Row size={4} />
                            <Row size={12}>
                              <Col size={1}/>
                              <Col size={8}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
                                  <TouchableOpacity
                                   style={{height: 40, borderColor: 'gray', borderWidth: 0, backgroundColor: 'white', borderRadius: 5, fontSize: 18, flex: 1, justifyContent: 'center'}}
                                   text={this.state.subtitle}
                                   onPress={(title) => this.setTime()}
                                 >
                                   <Text style={{marginLeft: 5, fontSize: 18}}>{this.state.subtitle}</Text>
                                 </TouchableOpacity>
                               </View>
                             </Col>
                             <Col size={1}/>
                           </Row>
                           <Row size={18} />
                           <Row size={20}>
                             <Col>
                               <View style={{ flex: 1, justifyContent: 'center'}}>
                                 <Button
                                   onPress={() => this.createEvent()}
                                   icon={{name: 'check', size: 50, type: 'font-awesome'}}
                                   buttonStyle={{
                                     backgroundColor: "transparent",
                                     height: 100,
                                   }}
                                 />
                               </View>
                             </Col>
                             <Col>
                               <View style={{ flex: 1, justifyContent: 'center'}}>
                                 <Button
                                   onPress={() => this.setModalVisible(false)}
                                   icon={{name: 'times', size: 50, type: 'font-awesome'}}
                                   buttonStyle={{
                                     backgroundColor: "transparent",
                                     height: 100,
                                   }}
                                 />
                               </View>
                             </Col>
                           </Row>
                           </Grid>
                         </View>
                       </TouchableWithoutFeedback>
                     </View>
                   </View>
                 </Col>
                 <Col size ={1} />
               </Grid>
             </TouchableOpacity>
           </Modal>
          </View>
          {/* this is the plus button on the bottom right */}
          <ActionButton buttonColor="rgba(231,76,60,1)" >
            <ActionButton.Item buttonColor='#9b59b6' title="Plan Session" onPress={() => this.setModalVisible(true)}>
              <Icon name="pen" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="New Entry" onPress={() => {}}>
              <Icon name="calendar-plus" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
      </View>
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
