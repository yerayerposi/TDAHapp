//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
  import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform,Button} from 'react-native';
// import all basic components

export default class Perfiles extends Component {

    constructor(props)
    {

      super(props);

      this.state = {
      isLoading: true
    }
    }

    componentDidMount() {

         return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
           .then((response) => response.json())
           .then((responseJson) => {
             this.setState({
               isLoading: false,
               dataSource: responseJson
             }, function() {
               // In this block you can do something with new state.
             });
           })
           .catch((error) => {
             console.error(error);
           });
       }

  FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#607D8B",
          }}
        />
      );
    }

    GetFlatListItem (fruit_name) {

    Alert.alert(fruit_name);

    }


    render() {

      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (

  <View style={styles.MainContainer}>

         <FlatList

            data={ this.state.dataSource }

            ItemSeparatorComponent = {this.FlatListItemSeparator}

            renderItem={({item}) => <View style={styles.caja}><Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.fruit_name)} > {item.fruit_name} </Text>
            <Button title="Acceder"/></View>}

            keyExtractor={(item, index) => index}

           />


  </View>

      );
    }
  }

  const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        marginTop: 30,
        marginLeft: 80,
        marginBottom: 20
    },

  MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 10,
  paddingTop: (Platform.OS === 'ios') ? 20 : 0,

  },
  caja: {
    height: 120,
    backgroundColor: '#D8E9FE',
    paddingTop: 0,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 1,
shadowRadius: 5,
elevation: 5,
  },
  FlatListItemStyle: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },

  });
