//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TouchableOpacity,Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements';
import StepModal from "react-native-step-modal";

// import all basic components

export default class Personal extends Component {
  //Personal Component


renderResults=() =>{
  this.setState({
    isVisible:true
  })
}
  render() {
    let Component1 =  <View>
                          <Image source={require("../image/balance.png")} style={styles.image}/>

    <Text> Bienvenido/a a la aplicación de Detección de Tdah, </Text>
    <Text> para empezar, te daremos unos consejos de como </Text>
    <Text> utilizar la aplicación para que puedas sacarle el </Text>
    <Text> máximo provecho. </Text>
    <Text> </Text>
    </View>
    let Component2 =
    <View><Text> Para empezar...</Text>
    <Text> Despues...</Text>
    <Text> y...</Text>
    </View>
    return (
      <View>

      <View>
             <StepModal stepComponents={[Component1, Component2,Component2,Component2,Component2]} />
          </View>

          <View >
          <Button

            title={"Bienvenido "+global.usuario}
            />
            </View>


      <View style={styles.caja}>
        <Text style={{ fontSize: 20 }}> </Text>
        <Text style={{ fontSize: 18 }}> </Text>
        <Text style={{ fontSize: 18 }}>Bienvenido, antes de empezar nos gustaría darte unas recomendaciones:</Text>
        <Text style={{ fontSize: 10 }}> </Text>
        <Text style={{ fontSize: 16 }}>     1.- Busca un lugar cómodo y tranquilo donde realizar las pruebas.</Text>
        <Text style={{ fontSize: 10 }}> </Text>
        <Text style={{ fontSize: 16 }}>     2.- Procura que nadie te interrumpa durante el proceso.</Text>
        <Text style={{ fontSize: 10 }}> </Text>
        <Text style={{ fontSize: 16 }}>     3.- No permitas que nadie te ayude a realizar las pruebas.</Text>
        <Text style={{ fontSize: 10 }}> </Text>
        <Text style={{ fontSize: 18 }}>Cuando estés preparado pulsa continuar.</Text>

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

        <Text style={{ fontSize: 24, color : '#FFFFFF'}}>Continuar</Text>
        </TouchableOpacity>
        </View>
      </View>
</View>

    );
  }
}

const styles = StyleSheet.create({
  image: {
      height: 150,
      width: 150,
      marginTop: 30,
      marginLeft: 85,
      marginBottom: 20
  },
  MainContainer: {
    flex: 1,
    paddingTop: 0,

    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
  },
  caja: {
    height: 260,
    margin:  20,
    padding: 20,
    alignItems: 'center',
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
