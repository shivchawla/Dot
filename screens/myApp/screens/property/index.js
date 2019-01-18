import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet, TextInput, Switch, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import PropertyDetail from './detail'

class Property extends Component {
  constructor (props) {
    super (props)
    this.state = {
      names: [
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-2822-PP-2984538-7705890835b8f9b1abefc5-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-1-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B9%83%E0%B8%95%E0%B9%89-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 0
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-2822-PP-2984538-7705890835b8f9b1abefc5-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-1-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B9%83%E0%B8%95%E0%B9%89-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 0
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-2822-PP-2984538-7705890835b8f9b1abefc5-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-1-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B9%83%E0%B8%95%E0%B9%89-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 0
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-550852-PP-2478299-9807525095a7d422dac9d6-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-%E0%B9%84%E0%B8%8B%E0%B8%A1%E0%B8%B4%E0%B8%AA-%E0%B9%80%E0%B8%AD%E0%B9%8A%E0%B8%81%E0%B8%8B%E0%B9%8C%E0%B8%84%E0%B8%A5%E0%B8%B9%E0%B8%8B%E0%B8%B5%E0%B8%9E-%E0%B8%84%E0%B8%A7%E0%B8%B5%E0%B8%99%E0%B8%AA%E0%B9%8C-siamese-exclusive-queens-1-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%A2-%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%A2-%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89-mrt-%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B9%8C.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 1
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-917087-PP-3274234-10371781625c25a6548449e-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-3-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%89%E0%B8%A5%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 1
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-917087-PP-3274234-10371781625c25a6548449e-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-3-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%89%E0%B8%A5%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 0
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-917087-PP-3274234-10371781625c25a6548449e-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-3-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%89%E0%B8%A5%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 1
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-DP-917087-PP-3274234-10371781625c25a6548449e-1-270-180/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-3-%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B9%83%E0%B8%99-%E0%B8%89%E0%B8%A5%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95.jpg',
          'name': 'AB-1234',
          'location': 'Asoke, Bangkok',
          'detail': '2 beds condo for sale',
          'price': '$ 3,700,000',
          'date': '21/12/2018',
          'status': 1
        }

      ]
   }
  }
  
  render() {
    return (
      <View>
        <View style={styles.searchForm}>
          <View style={styles.searchFormInput}>
            <Icon
              style={styles.searchIcon}
              name='md-search'
              color='#000'
              size={25}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
            />
          </View>
          <View style={styles.searchFormFillter}>
            <Icon
              name='md-apps'
              color='#000'
              size={25}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#eff0f1',
            borderBottomWidth: 1,
          }}
        />
        <ScrollView style={styles.scrollView}>
          {
            this.state.names.map((item, index) => (
              <TouchableOpacity style={styles.item} key={index} onPress={() => this.props.navigation.navigate('PropertyDetail')}>
                <View style={styles.itemImage}>
                  <Image source={{uri: item.image}} style={{width: 100, height: 70}} />
                </View>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemDetailName}>{item.name}</Text>
                  <Text style={styles.itemDetailInfo}>{item.location}</Text>
                  <Text style={styles.itemDetailInfo}>{item.detail}</Text>
                  <Text style={styles.itemDetailInfo}>{item.price}</Text>
                  <Text style={styles.itemDetailDate}>{item.date}</Text>
                  <Switch
                  style={styles.itemDetaiSwitch}
                  value = {item.status}/>
                </View>
              </TouchableOpacity>
            ))
          }
         </ScrollView>
      </View>
    );
  }
}

const PropertyStack = createStackNavigator({
  Property: {
    screen: Property,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Properties',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  },
  PropertyDetail: {
    screen: PropertyDetail
  }
});

PropertyStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'PropertyDetail') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

export default PropertyStack

// for Ex
// https://snack.expo.io/Sk7Go1WRM

const styles = StyleSheet.create ({
  searchForm: {
    flexDirection: 'row',
    padding: 15,
  },
  searchFormInput: {
    flex: 3,
    flexDirection: 'row',
  },
  searchIcon: {
    flex: 0,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center', // center vertical
    // alignItems: 'flex-end' // center horizontal
  },
  searchInput: {
    flex: 6,
    padding: 5,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#7dbe4b'
  },
  searchFormFillter: {
    marginLeft: 10,
    marginRight: 10,
    flex: 0,
    alignSelf: 'center', // center vertical
    alignItems: 'center' // center horizontal
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemImage: {
    margin: 10,
    flex: 0,
    alignSelf: 'center'
  },
  itemDetail: {
    position: 'relative',
    flex: 4,
    margin: 10,
  },
  itemDetailName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3D3D3D'
  },
  itemDetailInfo: {
    fontSize: 14,
    color: 'gray'
  },
  itemDetailDate: {
    fontSize: 10,
    position: 'absolute',
    bottom: 2,
    right: 2,
    color: '#ACACAC'
  },
  itemDetaiSwitch: {
    position: 'absolute',
    top: 2,
    right: 2,
  },
  scrollView: {
    marginBottom: 68
  }
})