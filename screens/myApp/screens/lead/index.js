import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet, TextInput, Switch, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import LeadDetail from './detail'
import Message from './message'

class Lead extends Component {
  constructor (props) {
    super (props)
    this.state = {
      names: [
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-TH-448652-UR-19588549625b17512974ca7-1-150-150/demo-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%98.jpg',
          'name': 'John Smith',
          'salePrice': '฿ 2,200,000',
          'rentPrice': '฿ 14,900',
          'text': 'See you on Tuesday for the viewing',
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-TH-448652-UR-19588549625b17512974ca7-1-150-150/demo-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%98.jpg',
          'name': 'John Smith',
          'salePrice': '฿ 2,200,000',
          'rentPrice': '฿ 14,900',
          'text': 'See you on Tuesday for the viewing',
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-TH-448652-UR-19588549625b17512974ca7-1-150-150/demo-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%98.jpg',
          'name': 'John Smith',
          'salePrice': '฿ 2,200,000',
          'rentPrice': '฿ 14,900',
          'text': 'See you on Tuesday for the viewing',
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-TH-448652-UR-19588549625b17512974ca7-1-150-150/demo-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%98.jpg',
          'name': 'John Smith',
          'salePrice': '฿ 2,200,000',
          'rentPrice': '฿ 14,900',
          'text': 'See you on Tuesday for the viewing',
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-TH-448652-UR-19588549625b17512974ca7-1-150-150/demo-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%98.jpg',
          'name': 'John Smith',
          'salePrice': '฿ 2,200,000',
          'rentPrice': '฿ 14,900',
          'text': 'See you on Tuesday for the viewing',
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-TH-448652-UR-19588549625b17512974ca7-1-150-150/demo-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%98.jpg',
          'name': 'John Smith',
          'salePrice': '฿ 2,200,000',
          'rentPrice': '฿ 14,900',
          'text': 'See you on Tuesday for the viewing',
        },
        {
          'image': 'https://photosrp.dotproperty.co.th/1.0-TH-448652-UR-19588549625b17512974ca7-1-150-150/demo-%E0%B8%88%E0%B8%AD%E0%B8%AB%E0%B9%8C%E0%B8%99-%E0%B8%AA%E0%B8%A1%E0%B8%B4%E0%B8%98.jpg',
          'name': 'John Smith',
          'salePrice': '฿ 2,200,000',
          'rentPrice': '฿ 14,900',
          'text': 'See you on Tuesday for the viewing',
        },
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
              <TouchableOpacity style={styles.item} key={index} onPress={() => this.props.navigation.navigate('LeadDetail')}>
                <View style={styles.itemImage}>
                  <Image source={{uri: item.image}} style={{width: 100, height: 70}} />
                  <Text style={styles.itemDetailName}>{item.name}</Text>
                </View>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemDetailInfo}>Buy {item.salePrice}</Text>
                  <Text style={styles.itemDetailInfo}>Rent {item.rentPrice}</Text>
                  <Text style={styles.itemDetailInfo}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
         </ScrollView>
        {/* <ScrollView>
          {
            this.state.names.map((item, index) => (
                <View key = {item.id} style = {styles.item}>
                  <Text>{item.name}</Text>
                </View>
            ))
          }
       </ScrollView> */}
      </View>
    );
  }
}

const LeadStack = createStackNavigator({
  Lead: {
    screen: Lead,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Lead',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  },
  LeadDetail: {
    screen: LeadDetail,
  },
  Message: {
    screen: Message
  }
});

LeadStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'LeadDetail') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

export default LeadStack

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
    alignSelf: 'center',
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