import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'; // https://github.com/ptomasroos/react-native-scrollable-tab-view

const DetailPanel = () => (
  <View style={[styles.scene]}>
    <Text>Detail</Text>
  </View>
);
const PhotoPanel = () => (
  <View style={[styles.scene]}>
    <Text>Photo</Text>
  </View>
);
const AddOnsPanel = () => (
  <View style={[styles.scene]}>
    <Text>Add-ons</Text>
  </View>
);

export default class PropertyDetail extends Component {
  constructor (props) {
    super (props)
  }
  static navigationOptions = {
    headerTitle: '#AB-123',
  }
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 5, }}
        initialPage={0}
        tabBarUnderlineStyle={{backgroundColor: '#7dbe4b'}}
        tabBarActiveTextColor='#7dbe4b'
      >
        <DetailPanel tabLabel="Details" />
        <PhotoPanel tabLabel="Photos" />
        <AddOnsPanel tabLabel="Add-ons" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});