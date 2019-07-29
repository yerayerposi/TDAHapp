//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements';
import StepModal from "react-native-step-modal";
import {StackActions} from 'react-navigation';
import * as axios from 'axios';
// import all basic components

export default class Personal extends Component {
  //Personal Component
  constructor(props) {
      super(props);
      this.state = {
          clickCount: 0,
          datos:1,
          renderUnity: false,
          unityPaused: false,
          isLoading: true,
          dataSource: 'responseJson',
          isVisible:true,
          isVisible2:false,
      };
      this.status = {



      }
  }

  componentDidMount() {
this.detectados()
    if(global.completado > 0){
      this.setState({
        isVisible:false
      })
    }

    return fetch('http://3.14.172.179:8000/usuarios/completado/'+`${global.id}`)
      .then((response) => response.json())
      .then((responseJson) => {

      })
      .catch((error) => {
        console.error(error);
      });

  }

  detectados = async () => {
    const link = 'http://3.14.172.179:8000/usuarios/detectados/'+`${global.id}`;


    axios.get(link)
      .then(function (response) {
        if(response.data){
          this.setState({
            isVisible2:true
          })
        }
        this.setState({responser: response.status}),


        // handle success
        console.log(response);
      }.bind(this)


    )
      .catch(function (error) {
      this.setState({responser: 'error'}),
       console.log(error);
}.bind(this))

}

  render() {
    let Component1 =
    <View>

    <Image source={require("../image/drawer.png")} style={styles.image}/>

    <Text>Bienvenido/a a la aplicación para la detección de usuarios con TDAH-H, esperamos que esta aplicación te sea de utilidad.</Text>
    </View>
    let Component2 =
    <View>
    <Image source={require("../image/balance.png")} style={styles.image}/>

    <Text>En la pantalla principal puedes usar el botón de actividades que te llevaran a la zona para realizar las pruebas.</Text>
    </View>
    let Component3 =
    <View>
    <Text></Text>
    <Text></Text>
    <Icon
      name="assignment"
      type='material'
      color= '#1A63FD'
      size={150}
    />
    <Text></Text>
    <Text></Text>
    <Text>Una vez realizados todas las pruebas puedes ver los resultados disponibles en el apartado “Resultados” que también puedes acceder desde la pantalla principal.</Text>
    </View>
    let Component4 =
    <View>
    <Text></Text>
    <Text></Text>
    <Icon
      name="group"
      type='material'
      color= '#1A63FD'
      size={150}
    />
    <Text></Text>
    <Text></Text>
    <Text>Puedes acceder a las pruebas de otros perfiles agregándolos desde el menú, y accediendo a “escáner Qr” tras acceder puedes escanear el qr del usuario al que deseas agregar para poder acceder a sus datos.</Text>
    </View>
    let Component5 =
    <View>
    <Text></Text>
    <Text></Text>
    <Icon
      name="person"
      type='material'
      color= '#1A63FD'
      size={150}
    />
    <Text></Text>
    <Text></Text>
    <Text>Puedes acceder en todo momento a los usuarios que hayas agregado, para ello pulsa el botón “Perfiles” localizado en la pantalla principal o desde el menú.</Text>
    </View>
    let Component6 =
    <View>
    <Text></Text>
    <Text></Text>
    <Icon
      name="accessibility"
      type='material'
      color= '#1A63FD'
      size={150}
    />
    <Text></Text>
    <Text></Text>
    <Text>El equipo de TDaHapp espera que puedes sacarle el máximo provecho a la aplicación ayudándonos a crecer, para ello te animamos a indicarnos si has identificado a algún usuario con TDAH pulsando el botón usuario con TDAH localizado en el perfil del usuario en tu lista de perfiles.</Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    </View>

    return (
      <View>

{this.state.isVisible?
           <View>
                  <StepModal stepComponents={[Component1, Component2, Component3, Component4, Component5, Component6]} />
               </View>
:null}
               <View >
               <Button

                 title={"Bienvenido "+global.usuario}
                 />
                 </View>

                 <View >
                 {this.state.isVisible2?
                 <Button
                  color="#FC2C2C"
                   title={"Posible caso detectado"}
                   onPress={() => {
                       global.currentScreenIndex = 0;
                       this.props.navigation.dispatch(StackActions.popToTop());
                       this.props.navigation.navigate('NavDetectados');
                     }}
                   />
                   :null}
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
