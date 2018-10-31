import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Picker} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Col, Row, Grid } from "react-native-easy-grid";

import { textStyles } from "./Styles.js"

import * as Progress from 'react-native-progress';

class CustomCheckbox extends Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  render() {
    const { checked } = this.state;
    return (
      <CheckBox
        checked={checked}
        onPress={() => this.setState({checked: !checked})}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#aaa'
        uncheckedColor='black'
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
      />
    );
  }
}


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
              <Col size={18} >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} >
                <Text style={textStyles.title}>Favourites</Text>
                </View>
              </Col>
              <Col size={3} >
                <View style={{ height: 12 }} />
                  <Picker mode={'dropdown'}>
                    <Picker.Item label = "QuickSettings 1" value = "1" />
                    <Picker.Item label = "QuickSettings 2" value = "2" />
                    <Picker.Item label = "QuickSettings 3" value = "3" />
                  </Picker>
              </Col>
              <Col size={1} />
            </Grid>

          </View>
          {/* Tiles */}
          <View style={{ height: 300 }}>
            <Grid>
              <Col size={1} />
              <Col size={10}>
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue', elevation: 2 }} >
                    {/* This is the Tile itself */}
                    <Text> Favourite 1 </Text>
                  </View>
                </Row>
                <Row size={1} />
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue', elevation: 2 }} >
                    {/* This is the Tile itself */}
                    <Text> Favourite 3 </Text>
                  </View>
                </Row>
                <Row size={1} />
              </Col>

              <Col size={1} />

              <Col size={10}>
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue', elevation: 2 }} >
                    {/* This is the Tile itself */}
                    <Text> Favourite 2 </Text>
                  </View>
                </Row>
                <Row size={1} />
                <Row size={10} >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue', elevation: 2 }} >
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
              <Col size={18} >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} >
                  <Text style={textStyles.title}>Projects</Text>
                </View>
              </Col>
              <Col size={3} >
                <View style={{ height: 12 }} />
                  <Picker mode={'dropdown'}>
                    <Picker.Item label = "QuickSettings 1" value = "1" />
                    <Picker.Item label = "QuickSettings 2" value = "2" />
                    <Picker.Item label = "QuickSettings 3" value = "3" />
                  </Picker>
              </Col>
              <Col size={1} />
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

        {/* Wrapper for Todays tasks */}
        <View style={{ elevation: 4, backgroundColor: '#ddd' }} >
          {/* Tasks */}
          {/* Title */}
          <View style={{ height: 75, }}>
            <Grid>
              <Col size={1} />
              <Col size={18} >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} >
                <Text style={textStyles.title}>Today's Schedule</Text>
                </View>
              </Col>
              <Col size={3} >
                {/* dropdown menu */}
                <View style={{ height: 12 }} />
                  <Picker mode={'dropdown'}>
                    <Picker.Item label = "QuickSettings 1" value = "1" />
                    <Picker.Item label = "QuickSettings 2" value = "2" />
                    <Picker.Item label = "QuickSettings 3" value = "3" />
                  </Picker>
              </Col>
              <Col size={1} />
            </Grid>

          </View>
          {/* Todays task tile */}
          <View style={{ height: 300 }}>
            <Grid>
              <Col size={1} />
              <Col size={20} >
                {/* each row stands for one todo task this is the first one */}
                <Row size={9} >
                  <View style={{ backgroundColor: 'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  <Grid>
                    <Col size={8}>
                      <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>  Task 1</Text>
                      </View>
                    </Col>
                    <Col size={1}>
                      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <CustomCheckbox />
                      </View>
                    </Col>
                  </Grid>
                  </View>
                </Row>
                {/* a little offset in between */}
                <Row size={1} />
                {/* second entry */}
                <Row size={9} >
                  <View style={{ backgroundColor: 'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                    <Grid>
                      <Col size={8}>
                        <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' }} >
                          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>  Task 2</Text>
                        </View>
                      </Col>
                      <Col size={1}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                          <CustomCheckbox />
                        </View>
                      </Col>
                    </Grid>
                  </View>
                </Row>
                <Row size={1} />
                {/* this is the third entry */}
                <Row size={9} >
                  <View style={{ backgroundColor: 'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  <Grid>
                    <Col size={8}>
                      <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>  Task 3</Text>
                      </View>
                    </Col>
                    <Col size={1}>
                      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                      </View>
                    </Col>
                  </Grid>
                  </View>
                </Row>
                <Row size={1} />
                {/* fourth entry */}
                <Row size={9} >
                  <View style={{ backgroundColor: 'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  <Grid>
                    <Col size={8}>
                      <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>  Task 4</Text>
                      </View>
                    </Col>
                    <Col size={1}>
                      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                      </View>
                    </Col>
                  </Grid>
                  </View>
                </Row>
                <Row size={1} />
                {/* fifth entry */}
                <Row size={9} >
                  <View style={{ backgroundColor: 'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  <Grid>
                    <Col size={8}>
                      <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>  Task 5</Text>
                      </View>
                    </Col>
                    <Col size={1}>
                      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                      </View>
                    </Col>
                  </Grid>
                  </View>
                </Row>
                <Row size={1} />
                {/* sixth entry */}
                <Row size={9} >
                  <View style={{ backgroundColor: 'skyblue', flex: 1, alignItems: 'center', justifyContent: 'center', elevation: 2 }} >
                  <Grid>
                    <Col size={8}>
                      <View style={{ flex: 1, alignItems: 'baseline', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>  Task 6</Text>
                      </View>
                    </Col>
                    <Col size={1}>
                      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                      </View>
                    </Col>
                  </Grid>
                  </View>
                </Row>
                <Row size={3} />
              </Col>
              <Col size={1} />
            </Grid>
          </ View>
        </View>

        {/* end of daily schedule */}


        {/* Some offset in between */}
        <View style={{ height: 25 }} />

        {/* Wrapper for Tasks */}
        <View style={{ elevation: 4, backgroundColor: '#ddd' }} >
          {/* Tasks */}
          {/* Title */}
          <View style={{ height: 75, }}>
            <Grid>
              <Col size={1} />
              <Col size={18} >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}} >
                  <Text style={textStyles.title}>Tasks</Text>
                </View>
              </Col>
              <Col size={3} >
                <View style={{ height: 12 }} />
                  <Picker mode={'dropdown'}>
                    <Picker.Item label = "QuickSettings 1" value = "1" />
                    <Picker.Item label = "QuickSettings 2" value = "2" />
                    <Picker.Item label = "QuickSettings 3" value = "3" />
                  </Picker>
              </Col>
              <Col size={1} />
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
