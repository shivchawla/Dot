import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor (props) {
    super (props)
    this._loadData()
  }
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://www.dotproperty.co.th/img/logos/logo-default.png'}} style={{width: 265, height: 100}} />
      </View>
    )
  }

  _loadData = async () => {
    let self = this
    setTimeout (() => {
      self.props.navigation.navigate('Auth')
    }, 2500)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#428AF8'
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#428AF8',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  },
  btnEnterText: {
    color: '#fff',
    fontWeight: '700'
  }
});
