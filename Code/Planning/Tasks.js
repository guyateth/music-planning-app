/* This is the planning home
 * it contains a stackNavigator for the header and settings subsystem
 */

import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        Image,
        TouchableOpacity,
        Switch,
        AsyncStorage,
        View,
        TouchableHighlight,
        Modal,
        Alert,
        TouchableWithoutFeedback,
        ScrollView,
        TextInput,
        Animated } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { CheckBox, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Col, Row, Grid } from "react-native-easy-grid";

import ActionButton from 'react-native-action-button';


/*
 * This is the custom checkbox
 *
 *
 */

 class CustomCheckbox extends Component {
   checked: boolean
   constructor(props) {
     super();

     this.state = {
       checked: props.initialState
     };
   }

   render() {
     const { checked } = this.state;
     return (
       <CheckBox
         checked={checked}
         onPress={() => {this.setState({checked: !checked});this.props.function(this.props.nr)}}
         checkedIcon='dot-circle-o'
         uncheckedIcon='circle-o'
         checkedColor='#aaa'
         uncheckedColor='black'
         containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
       />
     );
   }
 }


/* This is the main Screen for planning
 * it contains a header formatting for the stack navigator
 */
class TasksScreenHome extends React.Component {
  constructor() {
    super();
    this.state = {
      reminders: false,
      modalVisible: false,
      title: 'Enter your title',
      subtitle: 'Enter your subtitle',
      tasknr: 0,
      activeTasks: {}
    };
    this.loadState();

  }
  //Formatting options
  static navigationOptions = ({ navigation }) => {
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
      title: "Tasks",
      headerTitleStyle: {
        flex: 1,
        fontSize: 25,
      },
    };
  };

  handleChange = (nr) => {
    if (this.state.activeTasks[nr].active == true) {
      this.state.activeTasks[nr].active = false;
      this.forceUpdate()
    } else {
      this.state.activeTasks[nr].active = true;
      this.forceUpdate()

    }
  }

  updatetasks(field, value) {
    var obj = {};
    obj[field] = value;
    AsyncStorage.getItem('tasks').then(function(strResult) {
            var result = JSON.parse(strResult) || {};
            Object.assign(result, obj);
            AsyncStorage.setItem('tasks', JSON.stringify(result));
    });
    console.log(obj);
    this.setState(obj);
  }


  async loadState() {
    try {
        var obj = {};
        var tasks = await AsyncStorage.getItem('tasks');
        tasks = JSON.parse(tasks);
        Object.assign(obj, tasks);
        this.setState(obj);
        console.log(obj);
    } catch(e) {
    } finally {
    }
  }

  createNewTask() {
    let nr = this.state.tasknr;
    let newTask = {};
    newTask['title'] = this.state.title;
    newTask['subtitle'] = this.state.subtitle;
    newTask['nr'] = nr;
    newTask['active'] = true;

    updateval = {};
    updateval[nr] = newTask;
    Object.assign(updateval, this.state.activeTasks);

    this.setState({tasknr: (nr+1)});
    this.setState({activeTasks: updateval});

    var obj = {};
    obj['tasknr'] = (nr+1);
    obj['activeTasks'] = updateval;

    AsyncStorage.getItem('tasks').then(function(strResult) {
            var result = JSON.parse(strResult) || {};
            Object.assign(result, obj);
            AsyncStorage.setItem('tasks', JSON.stringify(result));
            console.log(result);
    });


  }

  reset() {
    this.setState({tasknr: 0});
    this.setState({activeTasks: {}});

    AsyncStorage.removeItem('tasks');
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
    if (visible == true) {
      this.setState({title: 'Enter your title', subtitle: 'Enter your subtitle'});
    }
  }

  saveTask () {
    this.createNewTask();
    this.setModalVisible(false);
  }


  renderTasks() {
      console.log(this.state.activeTasks)
      try{


      return Object.values(this.state.activeTasks).map((item, key) => {
          var backGr = item.active ? 'skyblue' : 'grey';
          return (
              <View key={key}>
              <View style={{ backgroundColor: backGr, flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2, borderRadius: 5 }} key={key} >
                <Grid>
                  <Col size={0.5} />
                  <Col size={8}>
                    <View style={{ height: 50 }}>
                      <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                      </View>
                    </View>
                    <View style={{ height: 5 }} />
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.subtitle}</Text>
                    <View style={{ height: 25 }} />
                  </Col>
                  <Col size={2}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                      <CustomCheckbox initialState={!item.active} function={this.handleChange} nr={item.nr} />
                    </View>
                  </Col>
                </Grid>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 10 }} key={key} />
              </View>
          );
      });
      } catch(e) {
        console.error(e)
      } finally {
      }
  }
  //The screen itself
  render() {
    return (
      <View style={{flex:1 }}>
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
                          <Row size={5} />
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
                            <Row size={30}>
                              <Col size={1}/>
                              <Col size={8}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
                                  <TextInput
                                   style={{height: 120, borderColor: 'gray', borderWidth: 0, backgroundColor: 'white', borderRadius: 5, fontSize: 18, textAlignVertical: "top" }}
                                   onChangeText={(subtitle) => this.setState({subtitle})}
                                   value={this.state.subtitle}
                                   onFocus={(title) => this.setState({subtitle: ''})}
                                   multiline={true}
                                 />
                               </View>
                             </Col>
                             <Col size={1}/>
                           </Row>

                           <Row size={20}>
                             <Col>
                               <View style={{ flex: 1, justifyContent: 'center'}}>
                                 <Button
                                   onPress={() => this.saveTask()}
                                   icon={{name: 'check', size: 60}}
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
                                   icon={{name: 'ban', size: 60, type: 'font-awesome'}}
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

      <View>
        <TouchableHighlight
          onPress={() => {
            this.reset();
          }}>
          <Text>Reset</Text>
        </TouchableHighlight>
        <ScrollView style={{  }}>
          <View style={{height: 25}} />
          <Grid>
            <Col size={1} />
            <Col size={12}>
              {this.renderTasks()}
            </Col>
            <Col size={1} />
          </Grid>
          <View style={{height: 25}} />
        </ScrollView>
      </View>

        {/* The Add Tasks Component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)" >
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.setModalVisible(true)}>
            <Icon name="pen" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Previous Tasks" onPress={() => {}}>
            <Icon name="history" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

//The stack navigator for the planning screen

const TasksHome = createStackNavigator(
  {
    TasksHome: TasksScreenHome,
  },
  {
    initialRouteName: 'TasksHome',
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

//How the planning tab appears inside the app's drawer

TasksHome.navigationOptions = {
  drawerLabel: 'Tasks',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name='clipboard'
      color='black'
      size={24}
    />
  ),

};


export { TasksHome };
