/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
    View,
  Text,
} from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from "./src/scenes/home"
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});


export default createAppContainer(AppNavigator);