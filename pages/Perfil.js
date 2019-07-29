//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,ScrollView,TextInput,TouchableOpacity,Image, ALert } from 'react-native';
// import all basic components
import { Icon } from 'react-native-elements';
import * as axios from 'axios';
import {StackActions} from 'react-navigation';
export default class Perfil extends Component {
  //Formulario Component
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          address: '',
          email: '',
          id: '',
          pregunta2: '',
          pregunta3: '',
          pregunta4: '',
          pregunta5: '',
          pregunta6: ''
      };
  }
  componentDidMount() {

       return fetch('http://3.14.172.179:8000/usuarios/recuperar/'+`${global.idusuario}`)
         .then((response) => response.json())
         .then((responseJson) => {
           global.ausuario= responseJson.nombreUsuario;
           global.aid = responseJson.id;
           global.aedad = responseJson.edad;
           global.adetectado = responseJson.detectado;
           global.afecha = responseJson.fecha;
           global.adiagnostico = responseJson.diagnostico;
          this.setdetectados()
           this.setState({
             isLoading: false,
             dataSource: responseJson

           })

         })
         .catch((error) => {
           console.error(error);
         })


     }

     setdetectados = async () => {
       const link = 'http://3.14.172.179:8000/usuarios/nodetectados/'+`${global.aid}`;

       axios.get(link)
         .then(function (response) {
           this.setState({responser: response.status}),

           // handle success
           console.log(response);
         }.bind(this))
         .catch(function (error) {
         this.setState({responser: 'error'}),
             Alert.alert('Autentificación','Lo sentimos, el usuario y/o la contraseña es incorrecta'),
          console.log(error);
  }.bind(this))

}

  diagnosticado = async () => {
        const link = 'http://3.14.172.179:8000/usuarios/diagnosticado/'+`${this.state.id}`;
            this.setState({responser: link}),
        axios.get(link)
          .then(function (response) {
            this.setState({responser: response.status}),
            // handle success
            console.log(response);
          }.bind(this))
          .catch(function (error) {
          this.setState({responser: 'error'}),
           console.log(error);
   }.bind(this))
  }

  mediapartidas = async () => {
            const link = 'http://3.14.172.179:8000/usuarios/media';
                this.setState({responser: link}),
            axios.get(link)
              .then(function (response) {
                this.setState({responser: response.status}),
                // handle success
                console.log(response);
              }.bind(this))
              .catch(function (error) {
              this.setState({responser: 'error'}),
               console.log(error);
       }.bind(this))
      }

  datospartida = async () => {
            const link = 'http://3.14.172.179:8000/usuarios/partida/'+`${this.state.name}`;
                this.setState({responser: link}),
            axios.get(link)
              .then(function (response) {
                this.setState({responser: response.status}),
                // handle success
                console.log(response);
              }.bind(this))
              .catch(function (error) {
              this.setState({responser: 'error'}),
               console.log(error);
       }.bind(this))
      }

  render() {
    return (
      <View style={styles.view}>
          <ScrollView>
          <View style={styles.first_label}>
              <Image source={require("../image/user-shape.png")} style={styles.image}/>

          </View>
          <Text style={{ fontSize: 18 }}> </Text>
          <Text style={{ fontSize: 18 }}>Usuario: {global.ausuario}</Text>
          <Text style={{ fontSize: 18 }}>Este perfil se creó el día: {global.afecha}</Text>
          <Text style={{ fontSize: 18 }}> </Text>
          <Text style={{ fontSize: 18 }}> </Text>

          <View style={styles.caja}>

            <TouchableOpacity style={styles.button2} onPress={() => {
                this.mediapartidas()
                this.props.navigation.dispatch(StackActions.popToTop());
                this.props.navigation.navigate('NavResultados');
              }}>
                <Text style={styles.textButton}>Acceder a los resultados</Text>
            </TouchableOpacity>





    <TouchableOpacity style={styles.button} onPress={() => {
        this.registro()
        this.datospartida()
      }}>
        <Text style={styles.textButton}>Desvincular perfil</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => {
        this.diagnosticado()
      }}>
        <Text style={styles.textButton}>Usuario diagnosticado</Text>
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
