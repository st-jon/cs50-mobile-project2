import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation"

import MovieScreen from "./screens/MovieScreen"
import SearchScreen from "./screens/SearchScreen"
import LoginScreen from "./screens/LoginScreen"


const MainStack = createStackNavigator(
  {
    movie: MovieScreen,
    search: SearchScreen,
  },
  {
    initialRouteName: "search",
    
  }
)

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainStack
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator style={styles.containers}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
