import React from 'react'
import {createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import MyApp from './screens'
import { Dimensions, ScrollView, StyleSheet, View, Image, Text} from 'react-native';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Image source={{uri: 'https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&h=350'}}
      style={{height: 150}} />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// MyApp.navigationOptions = ({navigation})=>{
//   let navigationOptions = {
//     tabBarVisible: false
//   };s
//   return navigationOptions;
//   }

export default createDrawerNavigator({
  Home: {
    screen: MyApp
  },
  Links: {
    screen: MyApp
  },
  Settings: {
    screen: MyApp
  }
},
{
  navigationOptions: ({ navigation }) => {
    return {
      header: null,
    };
  },
  contentComponent: CustomDrawerContentComponent,
  drawerWidth: Dimensions.get('window').width - 120,
});

// --- or ---

// const AppContainer = createAppContainer(AppDrawerNavigator);

// class App extends Component {
//   constructor (props) {
//     super (props)
//   }
//   static navigationOptions = {
//     header: null
//   }
//   render() {
//     return <AppContainer />;
//   }
// }
// export default App;