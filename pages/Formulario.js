//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,ScrollView,TextInput,TouchableOpacity,Image } from 'react-native';
// import all basic components
import { Icon } from 'react-native-elements';

export default class Formulario extends Component {
  //Formulario Component
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          address: '',
          email: '',
          pregunta1: '',
          pregunta2: '',
          pregunta3: '',
          pregunta4: '',
          pregunta5: '',
          pregunta6: ''
      };
  }
  render() {
    return (
      <View style={styles.view}>
          <ScrollView>
          <View style={styles.first_label}>
              <Image source={require("../image/gamepad.png")} style={styles.image}/>

          </View>
          <Text style={{ fontSize: 120 }}> </Text>

          <Text style={{ fontSize: 18 , textAlign: 'center',}}>Haz Click en Empezar las pruebas cuando estés preparado.</Text>
          <Text style={{ fontSize: 30 }}> </Text>
          <Text style={{ fontSize: 18 }}> </Text>

          <View style={styles.caja}>

            <TouchableOpacity style={styles.button2} onPress={() => {
                this.registro()
              }}>
                <Text style={styles.textButton}>Empezar las pruebas</Text>
            </TouchableOpacity>



          </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
      backgroundColor:'#FF3131',
      margin:20,
      padding:10,
      borderRadius: 3
  },
  image: {
      height: 130,
      width: 260,
      marginTop: 30,
      marginLeft: 50,
      marginBottom: 20
  },
  caja: {
    backgroundColor:'#FFFFFF',
    height: 200,
    margin:  20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 3,
}},
    text: {
        marginTop: 5,
        padding: 7,
        fontSize: 15,
        fontWeight: 'bold'
    },
    first_input: {
        height: 40,
        fontSize: 13,
        borderColor: "black",
        borderWidth: 1.5,
        borderRadius: 7,
        padding: 7
    },
    view: {
        padding: 10
    },
    button: {
        backgroundColor:'#FF3131',
        margin:20,
        padding:10,
        borderRadius: 3
    },
    button2: {
        backgroundColor:'#6325A2',
        margin:20,
        padding:10,
        borderRadius: 3
    },
    textButton: {
        color:'#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});
