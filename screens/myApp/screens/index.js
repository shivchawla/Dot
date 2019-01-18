import React, {Component} from 'react';
import {createDrawerNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import {Text, View, Button, StyleSheet} from 'react-native';
import HomeStack from './home'
import LeadStack from './lead'
import PropertyStack from './property'

export default createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
          tabBarLabel: 'Home',
          headerBackTitle: 'Home',
          tabBarIcon: ({focused, tintColor}) => (
            <Icon name="md-home" style={styles.icon} color={tintColor} />
          ),
          tabBarOptions: {
          activeTintColor: '#7dbe4b',
          labelStyle: {
              fontSize: 14,
          },
        }
      }
    },
    LeadStack: {
      screen: LeadStack,
      navigationOptions: {
          tabBarLabel: 'Leads',
          headerBackTitle: 'Lead',
          tabBarIcon: ({focused, tintColor}) => (
            <Icon name="md-mail-open"style={styles.icon} color={tintColor} />
          ),
          tabBarOptions: {
          activeTintColor: '#7dbe4b',
          labelStyle: {
              fontSize: 14,
          },
        }
      }
    },
    PropertyStack: {
      screen: PropertyStack,
      navigationOptions: {
        tabBarLabel: 'Properties',
        headerBackTitle: 'Property',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon name="md-stats" style={styles.icon} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: '#7dbe4b',
          labelStyle: {
              fontSize: 14,
          },
        },
        // tabBarVisible: false,
      }
    }
  }
);

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  }
});
