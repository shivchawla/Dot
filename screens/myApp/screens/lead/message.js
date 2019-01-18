import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'; // https://github.com/ptomasroos/react-native-scrollable-tab-view
import Icon from 'react-native-vector-icons/Entypo';

const DetailPanel = () => (
  <View style={[styles.scene]}>
    <Text>Detail</Text>
  </View>
);
const PhotoPanel = () => (
  <View style={[styles.scene]}>
    <Text>John Smith</Text>
  </View>
);
const AddOnsPanel = () => (
  <View style={[styles.scene]}>
    <Text>Messages</Text>
  </View>
);

export default class LeadDetail extends Component {
  constructor (props) {
    super (props)
  }
  static navigationOptions = {
    headerTitle: 'John Smith',
    headerRight: (
      <Icon
        name='dots-three-vertical'
        color='#000'
        size={25}
      />
    ),
  }
  render() {
    return (
      <View style={{flex:1}}> 
        <View style={{flex:1}}> 
        <ScrollableTabView
          style={{marginTop: 5}}
          initialPage={0}
          tabBarUnderlineStyle={{backgroundColor: '#7dbe4b'}}
          tabBarActiveTextColor='#7dbe4b'
         >
            <DetailPanel tabLabel="Details" />
            <PhotoPanel tabLabel="Profile" />
            <AddOnsPanel tabLabel="Messages" />
        </ScrollableTabView>
        </View>
        <View style={{flex:0, flexDirection: 'row', alignItems: 'center'}}> 
          <TouchableHighlight
            style={{justifyContent: 'center', flex: 1, height: 40, backgroundColor: '#7dbe4b'}}
            onPress={() => this.props.navigation.navigate('message')}
          >
            <Text style={{alignSelf: 'center', color: '#fff', fontWeight: 'bold'}}> CALL </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{justifyContent: 'center', flex: 1, height: 40, backgroundColor: 'orange'}}
            onPress={() => this.props.navigation.navigate('message')}
          >
            <Text style={{alignSelf: 'center', color: '#fff', fontWeight: 'bold'}}> MESSAGE </Text>
          </TouchableHighlight>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});