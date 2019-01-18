import React from 'react';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation'

import LoginScreen from './screens/loginScreen'
import MyApp from './screens/myApp'
import LoadingScreen from './screens/loadingScreen'

const AppStack = createStackNavigator({Home: MyApp})
const AuthStack = createStackNavigator({Login: LoginScreen})
const LoadingStack = createStackNavigator({Loading: LoadingScreen})


const AppContainer =  createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingStack,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'Loading'
    }
  )
)

export default class App extends React.Component {
  render () {
    return <AppContainer />
  }
}