import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";

class Home extends Component {
  constructor (props) {
    super (props)
  }
  // static navigationOptions = {
  //   header: null
  // }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home screen</Text>
      </View>
    );
  }
}


export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Home',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
}
// ,{
//     defaultNavigationOptions: {
//     gesturesEnabled: false
//   }
// }
);