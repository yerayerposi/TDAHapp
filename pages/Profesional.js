//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements';
import StepModal from "react-native-step-modal";

// import all basic components

export default class Personal extends Component {
  //Personal Component
  constructor(props) {
      super(props);
      this.state = {
          clickCount: 0,
          datos:"hola",
          renderUnity: false,
          unityPaused: false,
          isLoading: true,
          dataSource: 'responseJson',
      };
  }

renderResults=() =>{
  this.setState({
    isVisible:true
  })
}
  render() {
    let Component1 =  <View><Text> Para empezar...</Text>
    <Text> Despues...</Text>
    <Text> y...</Text>
    </View>
    let Component2 =
    <View><Text> Para empezar...</Text>
    <Text> Despues...</Text>
    <Text> y...</Text>
    </View>

    return (
      <View>


           <View>
                  <StepModal stepComponents={[Component1, Component2]} />
               </View>

               <View >
               <Button

                 title={"Bienvenido "+global.usuario}
                 />
                 </View>

      <View style={styles.caja}>

        <Text style={{ fontSize: 18 }}> </Text>
        <Text style={{ fontSize: 18 }}>Empezar las pruebas </Text>
        <Text style={{ fontSize: 10 }}> </Text>
        <View style={styles.mini}>
        <Icon
        raised
name='play'
type='font-awesome'
color='#AB3A87' />
  <TouchableOpacity   onPress={() => {
      global.currentScreenIndex = 0;
      this.props.navigation.navigate('NavActividades');
    }}>

        <Text style={{ fontSize: 24, color : '#FFFFFF'}}>Actividades</Text>
        </TouchableOpacity>
        </View>
      </View>

        <View style={styles.caja}>
          <Text style={{ fontSize: 18 }}> </Text>
          <Text style={{ fontSize: 18 }}>Accede a los perfiles</Text>
          <Text style={{ fontSize: 10 }}> </Text>
          <View style={styles.mini}>
          <Icon
          raised
  name='book'
  type='font-awesome'
  color='#AB3A87' />

  <TouchableOpacity   onPress={() => {
      global.currentScreenIndex = 0;
      this.props.navigation.navigate('NavPerfiles');
    }}>
          <Text style={{ fontSize: 24, color : '#FFFFFF'}}>Perfiles</Text>
  </TouchableOpacity>
          </View>
        </View>

      <View style={styles.caja}>
        <Text style={{ fontSize: 18 }}> </Text>
        <Text style={{ fontSize: 18 }}>Accede a los resultados </Text>
        <Text style={{ fontSize: 10 }}> </Text>
        <View style={styles.mini}>
        <Icon
        raised
name='heartbeat'
type='font-awesome'
color='#AB3A87' />

<TouchableOpacity   onPress={() => {
    global.currentScreenIndex = 0;
    this.props.navigation.navigate('NavResultados');
  }}>
        <Text style={{ fontSize: 24, color : '#FFFFFF'}}>Resultados </Text>
</TouchableOpacity>
        </View>
      </View>
</View>

    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
  },
  caja: {
    height: 120,
    backgroundColor: 'lightgrey',
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
  mini: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#6E6EFF',
    shadowColor: "#FF55FF",
shadowOffset: {
  width: 0,
  height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 10,

  },
  grid: {
    flex: 1,
    marginTop: 10,
  },
});
