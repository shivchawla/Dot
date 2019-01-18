import React from 'react'
import {StyleSheet, AsyncStorage, Text, View, TouchableOpacity, TextInput} from 'react-native';

// const userInfo = {Email: 'moo', password: '1234'}

export default class LoginScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {Email: '', password: ''}
  }
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sing in</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(Email) => this.setState({Email})}
          value={this.state.Email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.btnEnter}
          onPress={this._signin}
        >
          <Text style={styles.btnEnterText}>Sing in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _signin = async () => {
    // await AsyncStorage.setItem('logged', '1')
    this.props.navigation.navigate('App')
    // if (this.state.Email !== userInfo.Email || this.state.password !== userInfo.password) {
    //   alert('Email or Password wrong!!')
    // } else {
    //   await AsyncStorage.setItem('logged', '1')
    //   this.props.navigation.navigate('App')
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#7dbe4b'
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#7dbe4b',
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
