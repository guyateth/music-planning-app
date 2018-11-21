
//imports for react, react native and the navigator
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated} from 'react-native';
import { DrawerNavigator, DrawerItems, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

//grid for react, for easy gridding
import { Col, Row, Grid } from "react-native-easy-grid";

//custom imports
import { HomeScreen,
         PlanningHome,
         ToolsHome,
         SettingsHome,
         CommunityHome,
         DiaryHome,
         ProjectsHome,
         MetronomeStack,
         StoreStack,
         RecordingStack,
         AddCalendarEventStack,
         ProjectStack,
         AddProjectStack,
         CreateSessionStack,
         TodayStack,
         HistoryStack  } from './Code/Screens.js';





//icons and cleaner buttons
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';



/* The Stach navigator for The Home Stack
 * Handles everything in the Home Tab
 *
 * It will be displayed initially as a home screen. It has to be a stack navigator
 * to actually track presses
 */
const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'skyblue',
        elevation: 5
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

/* The layout for the home tab inside the app drawer
 * needed for every single navigation option inside the drawer
 * Tis is not needed anymore for newer versions, as the drawer has a custom layout
 */
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

/*
 * This is the stylesheet for the sidemenu (drawer)
 */

const SideMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuelement: {
    height: 50,
    backgroundColor: 'white'
  },
  subelement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStretch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  menutext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

/*
 * This is the layout for the sidemenu itself. it will be passed to the drawer
 * and renders everything needed including animations
 */

class SideMenu extends Component {
  /*
   * This is the navigation function, used for handling the navigation inside
   * the submenu
   */
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  /*
   * constructor for setting the initial state
   */
  constructor() {
    super();
    this.state = {
      projectsPicker: false,
      planningPicker: false,
      diaryPicker: false,
      toolsPicker: false,
      projectsHeight: 0,
      planningHeight: 0,
      diaryHeight: 0,
      toolsHeight: 0
    };
    this.state.projectsHeight = new Animated.Value(0);
    this.state.planningHeight = new Animated.Value(0);
    this.state.diaryHeight = new Animated.Value(0);
    this.state.toolsHeight = new Animated.Value(0);

  }

  /*
   * Here follow some functions to handle the press on the little Picker
   * next to the button in the submenu. each little picker has its own function
   * named after the button next to it.
   * The first one is for the projects picker
   */
  updateProjectsPicker () {
    //reset the others
    if (this.state.planningPicker) {this.updatePlanningPicker();}
    if (this.state.diaryPicker) {this.updateDiaryPicker();}
    if (this.state.toolsPicker) {this.updateToolsPicker();}

    if (this.state.projectsPicker) {
      this.setState({projectsPicker: false});
      Animated.timing(                  // Animate over time
        this.state.projectsHeight,        // The animated value to drive
        {
          toValue: '0',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    } else {
      this.setState({projectsPicker: true});
      Animated.timing(                  // Animate over time
        this.state.projectsHeight,       // The animated value to drive
        {
          toValue: '200',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    }

  }
  /*
   * The second one is for the planning picker
   */
  updatePlanningPicker () {
    //reset the others
    if (this.state.diaryPicker) {this.updateDiaryPicker();}
    if (this.state.projectsPicker) {this.updateProjectsPicker();}
    if (this.state.toolsPicker) {this.updateToolsPicker();}

    if (this.state.planningPicker) {
      this.setState({planningPicker: false});
      Animated.timing(                  // Animate over time
        this.state.planningHeight,        // The animated value to drive
        {
          toValue: '0',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    } else {
      this.setState({planningPicker: true});
      Animated.timing(                  // Animate over time
        this.state.planningHeight,       // The animated value to drive
        {
          toValue: '150',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    }
  }

  /*
   * The third one is for the diary picker
   */
  updateDiaryPicker () {
    //reset the others
    if (this.state.planningPicker) {this.updatePlanningPicker();}
    if (this.state.projectsPicker) {this.updateProjectsPicker();}
    if (this.state.toolsPicker) {this.updateToolsPicker();}

    if (this.state.diaryPicker) {
      this.setState({diaryPicker: false});
      Animated.timing(                  // Animate over time
        this.state.diaryHeight,        // The animated value to drive
        {
          toValue: '0',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    } else {
      this.setState({diaryPicker: true});
      Animated.timing(                  // Animate over time
        this.state.diaryHeight,       // The animated value to drive
        {
          toValue: '100',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    }
  }

  /*
   * The fourth one is for the tools picker
   */
  updateToolsPicker () {

    if (this.state.planningPicker) {this.updatePlanningPicker();}
    if (this.state.projectsPicker) {this.updateProjectsPicker();}
    if (this.state.diaryPicker) {this.updateDiaryPicker();}

    if (this.state.toolsPicker) {
      this.setState({toolsPicker: false});
      Animated.timing(                  // Animate over time
        this.state.toolsHeight,        // The animated value to drive
        {
          toValue: '0',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    } else {
      this.setState({toolsPicker: true});
      Animated.timing(                  // Animate over time
        this.state.toolsHeight,       // The animated value to drive
        {
          toValue: '150',          // Animate to opacity: 1 (opaque)
          duration: 200,              // Make it take a while
        }
      ).start();
    }
  }

  /*
   * here comes a bunch of functions that render the subelement of the menu
   * a subelement is one button. tthese are used in the submenus, the ones
   * showing when zou press a picker
   */
  renderMenuSubElement(iconname, text, navName) {
    return (
      <View style={SideMenuStyles.menuelement}>
        <TouchableOpacity style={SideMenuStyles.menuelement} onPress={this.navigateToScreen(navName)}>
          <Grid>
            <Col size={2}/>
            <Col size={2}>
              <View style={SideMenuStyles.icon}>
                <Icon
                  name={iconname}
                  color='#777'
                  size={24}
                />
              </View>
            </Col>
            <Col size={8}>
              <View style={SideMenuStyles.subelement}>
                <Text style={SideMenuStyles.menutext} >
                {text}
                </Text>
              </View>
            </Col>
          </Grid>
        </TouchableOpacity>
      </View>
    )
  }

  /*
   * here comes a bunch of functions that render the subelement of the menu
   * a subelement is one button. these are used in the main menu, for buttons
   * without a picker
   */
  renderMenuElement(iconname, text, navName) {
    return (
      <View style={SideMenuStyles.menuelement}>
        <TouchableOpacity style={SideMenuStyles.menuelement} onPress={this.navigateToScreen(navName)}>
          <Grid>
            <Col size={2}>
              <View style={SideMenuStyles.icon}>
                <Icon
                  name={iconname}
                  color='#777'
                  size={24}
                />
              </View>
            </Col>
            <Col size={8}>
              <View style={SideMenuStyles.subelement}>
                <Text style={SideMenuStyles.menutext} >
                {text}
                </Text>
              </View>
            </Col>
            <Col size={2}/>
          </Grid>
        </TouchableOpacity>
      </View>
    )
  }

  /*
   * here comes a bunch of functions that render a specific menu element.
   * those with a picker need to be built inside the the funtion, the others
   * simply use the renderMenuElement subfuntion.
   * Those with a picker also have an auxillary funtion to render the submenu
   */
  //here we render the home part
  renderHome() {
    return(
      <View>
        {this.renderMenuElement('home', 'Home', 'Home')}
      </View>
    )

  }
  renderProjects() {
    const rot = this.state.projectsHeight.interpolate({
        inputRange: [0, 200],
        outputRange: ["0deg", "180deg"]
    });
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    return(
      <View style={{ backgroundColor: 'black' }}>
      <TouchableOpacity style={SideMenuStyles.menuelement} onPress={this.navigateToScreen('ProjectsOverview')}>
        <Grid>
          <Col size={2}>
            <View style={SideMenuStyles.icon}>
              <Icon
                name='project-diagram'
                color='#777'
                size={24}
              />
            </View>
          </Col>
          <Col size={8}>
            <View style={SideMenuStyles.subelement}>
              <Text style={SideMenuStyles.menutext} >
              Projects
              </Text>
            </View>
          </Col>
          <Col size={2}>
            <View style={SideMenuStyles.iconStretch}>
              <TouchableOpacity style={SideMenuStyles.icon} onPress={() => this.updateProjectsPicker()}>
                <AnimatedIcon
                  name='caret-down'
                  color='black'
                  size={24}
                  style={{ transform: [{rotate: rot}] }}
                />
              </TouchableOpacity>
            </View>
          </Col>
        </Grid>

      </TouchableOpacity>
      {this.renderProjectList()}
      </View>
    )

  }

  renderProjectList(){
    return(
      <Animated.View style={{ height: this.state.projectsHeight }} >
        {this.renderMenuSubElement('minus', 'beethovens 9th','Project')}
        {this.renderMenuSubElement('minus', 'beethovens 5th','Project')}
        {this.renderMenuSubElement('minus', '4 Jahreszeiten','Project')}
        {this.renderMenuSubElement('minus', 'New Project','AddProject')}
      </Animated.View>
    )
  }

  renderPlanning() {
    const rot = this.state.planningHeight.interpolate({
        inputRange: [0, 150],
        outputRange: ["0deg", "180deg"]
    });
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    return(
      <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity style={SideMenuStyles.menuelement} onPress={this.navigateToScreen('Planning')}>
        <Grid>
          <Col size={2}>
            <View style={SideMenuStyles.icon}>
              <Icon
                name='clipboard'
                color='#777'
                size={24}
              />
            </View>
          </Col>
          <Col size={8}>
            <View style={SideMenuStyles.subelement}>
              <Text style={SideMenuStyles.menutext} >
              Planning
              </Text>
            </View>
          </Col>
          <Col size={2}>
            <Animated.View style={SideMenuStyles.iconStretch}>
              <TouchableOpacity style={SideMenuStyles.icon} onPress={() => this.updatePlanningPicker()}>
                <AnimatedIcon
                  name='caret-down'
                  color='black'
                  size={24}
                  style={{ transform: [{rotate: rot}] }}
                />
              </TouchableOpacity>
            </Animated.View>
          </Col>
        </Grid>

      </TouchableOpacity>
      {this.renderPLanningList()}
      </View>
    )
  }

  renderPLanningList(){
    return(
      <Animated.View style={{ height: this.state.planningHeight }} >
        {this.renderMenuSubElement('minus', 'Today\'s Session','Today')}
        {this.renderMenuSubElement('minus', 'Create Session','CreateSession')}
        {this.renderMenuSubElement('minus', 'History','History')}
      </Animated.View>
    )
  }

  renderDiary() {
    const rot = this.state.diaryHeight.interpolate({
        inputRange: [0, 100],
        outputRange: ["0deg", "180deg"]
    });
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    return(
      <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity style={SideMenuStyles.menuelement} onPress={this.navigateToScreen('Diary')}>
        <Grid>
          <Col size={2}>
            <View style={SideMenuStyles.icon}>
              <Icon
                name='calendar-alt'
                color='#777'
                size={24}
              />
            </View>
          </Col>
          <Col size={8}>
            <View style={SideMenuStyles.subelement}>
              <Text style={SideMenuStyles.menutext} >
              Diary
              </Text>
            </View>
          </Col>
          <Col size={2}>
            <View style={SideMenuStyles.iconStretch}>
              <TouchableOpacity style={SideMenuStyles.icon} onPress={() => this.updateDiaryPicker()}>
                <AnimatedIcon
                  name='caret-down'
                  color='black'
                  size={24}
                  style={{ transform: [{rotate: rot}] }}
                />
              </TouchableOpacity>
            </View>
          </Col>
        </Grid>

      </TouchableOpacity>
      {this.renderDiaryList()}
      </View>
    )
  }

  renderDiaryList(){
    return(
      <Animated.View style={{ height: this.state.diaryHeight }} >
        {this.renderMenuSubElement('minus', 'Add Event','AddCalendarEvent')}
        {this.renderMenuSubElement('minus', 'Create Session','CreateSession')}
      </Animated.View>
    )
  }


  renderTools() {
    const rot = this.state.toolsHeight.interpolate({
        inputRange: [0, 150],
        outputRange: ["0deg", "180deg"]
    });
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    return(
      <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity style={SideMenuStyles.menuelement} onPress={this.navigateToScreen('Tools')}>
        <Grid>
          <Col size={2}>
            <View style={SideMenuStyles.icon}>
              <Icon
                name='toolbox'
                color='#777'
                size={24}
              />
            </View>
          </Col>
          <Col size={8}>
            <View style={SideMenuStyles.subelement}>
              <Text style={SideMenuStyles.menutext} >
              Tools
              </Text>
            </View>
          </Col>
          <Col size={2}>
            <View style={SideMenuStyles.iconStretch}>
              <TouchableOpacity style={SideMenuStyles.icon} onPress={() => this.updateToolsPicker()}>
                <AnimatedIcon
                  name='caret-down'
                  color='black'
                  size={24}
                  style={{ transform: [{rotate: rot}] }}
                />
              </TouchableOpacity>
            </View>
          </Col>
        </Grid>

      </TouchableOpacity>
      {this.renderToolsList()}
      </View>
    )
  }

  renderToolsList(){
    return(
      <Animated.View style={{ height: this.state.toolsHeight }} >
        {this.renderMenuSubElement('minus', 'Metronome','Metronome')}
        {this.renderMenuSubElement('minus', 'Recording','Recording')}
        {this.renderMenuSubElement('minus', 'Store','Store')}
      </Animated.View>
    )
  }

  renderCommunity(){
    return(
      <View>
        {this.renderMenuElement('users', 'Community', 'Community')}
      </View>
    )
  }

  renderSettings () {
    return(
      <View>
        {this.renderMenuElement('cog', 'Settings', 'Settings')}
      </View>
    )
  }

  /*
   * This is the main render function. everything is put into functions to better
   * structure the code
   */
  render () {
    return (
      <View style={SideMenuStyles.container}>
        <ScrollView>
          {this.renderHome()}
          {this.renderProjects()}
          {this.renderPlanning()}
          {this.renderDiary()}
          {this.renderTools()}
          {this.renderCommunity()}
          {this.renderSettings()}
        </ScrollView>
        <View style={{}}>
          <Text>This is an ad for money</Text>
        </View>
      </View>
    );
  }
};

/* The Main drawer
 * all naviagation options need to be added here
 * There is one for every button inside the drawer
 */
const MyApp = createDrawerNavigator({
  Home: {
    screen: MainStack,
  },
  ProjectsOverview: {
    screen: ProjectsHome,
  },
  Planning: {
    screen: PlanningHome,
  },
  Diary: {
    screen: DiaryHome,
  },
  Tools: {
    screen: ToolsHome,
  },
  Community: {
    screen: CommunityHome,
  },
  Settings: {
    screen: SettingsHome,
  },
  //projects
  Project: {
    screen: ProjectStack,
  },
  AddProject: {
    screen: AddProjectStack,
  },
  //planning
  Today: {
    screen: TodayStack,
  },
  History: {
    screen: HistoryStack,
  },
  CreateSession: {
    screen: CreateSessionStack,
  },
  //diary
  AddCalendarEvent: {
    screen: AddCalendarEventStack,
  },
  //tools
  Metronome: {
    screen: MetronomeStack,
  },
  Store: {
    screen: StoreStack,
  },
  Recording: {
    screen: RecordingStack,
  }
},{
  contentComponent: SideMenu,
}

);



/* This is needed for the react native environment
 * Export the code, so it's useable
 */
export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
