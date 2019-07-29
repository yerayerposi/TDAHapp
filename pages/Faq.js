//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,ScrollView,TextInput,TouchableOpacity,Image } from 'react-native';
// import all basic components
import { Icon } from 'react-native-elements';

export default class Faq extends Component {
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
          <Icon
          raised
    name='question '
    type='material'
    color= '#1A63FD'
    size={50} />
          </View>
          <Text style={{ fontSize: 18 }}> </Text>
          <Text style={{ fontSize: 20 }}>¿Quienes somos?</Text>
          <Text style={{ fontSize: 16 }}>Somos dos estudiantes del grado de ingenieria informática.</Text>
          <Text style={{ fontSize: 20 }}>Pregunta1</Text>
          <Text style={{ fontSize: 16 }}>Respuesta1</Text>
          <Text style={{ fontSize: 20 }}>Pregunta2</Text>
          <Text style={{ fontSize: 16 }}>Respuesta3</Text>
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
      marginLeft: 85,
      borderRadius: 3
  },
  first_label: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      height: 200,
      width: 200,
      marginTop: 30,
      marginLeft: 85,
      marginBottom: 20
  },
  caja: {
    backgroundColor:'#DCDCDC',
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
