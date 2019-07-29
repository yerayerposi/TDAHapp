import React, {Component} from 'react'
import {
    StyleSheet,
    Linking,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    PermissionsAndroid,
    TextInput,
    Button, Alert
} from 'react-native';
import * as axios from 'axios';

import { SegmentedControls, RadioButtons  } from 'react-native-radio-buttons'

export default class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opcion: '',
            edad: '',
            email: '',
            username: '',
            password: '',
            rol: 'Ninguno',
            rolu: null,
        };
    }


registro = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/register/'+`${this.state.username}`+'.'+`${this.state.password}`+'.1.'+`${this.state.rolu}`+'.'+`${this.state.edad}`+'.0.0';

          this.setState({responser: link}),
      axios.get(link)
        .then(function (response) {
          global.usuario = this.state.username,
          this.setState({responser: response.status})
          if(this.state.rolu > 0){
            this.props.navigation.navigate('loginpro');
          }else{
            this.props.navigation.navigate('login');
          }
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),

         console.log(error);
 }.bind(this))

    }

    render() {
  const options = [
    "Personal",
    "Profesional"
  ];
  function setSelectedOption(selectedOption){
    this.setState({
      rol: selectedOption
    });
    if(selectedOption === "Personal"){
  this.setState({
    rolu: 0
  });
}else{
  this.setState({
    rolu: 1
  });
}
}
        return (
            <View style={styles.view}>
                <ScrollView>

                  <View style={styles.first_label}>
                      <Image source={require("../image/user-shape.png")} style={styles.image}/>

                  </View>

                    <Text style={styles.text}>Nombre de usuario</Text>
                    <TextInput style={styles.first_input} value={this.state.username} placeholder={'Nombre de usuario'}
                        onChangeText={(text) => this.setState({username: text})}
                    />

                    <Text style={styles.text}>Email (opcional)</Text>
                    <TextInput style={styles.first_input} value={this.state.email} placeholder={'Email'}
                        onChangeText={(text) => this.setState({email: text})}
                    />

                    <Text style={styles.text}>Contraseña</Text>
                    <TextInput style={styles.first_input} value={this.state.password} placeholder={'Contraseña'}
                        onChangeText={(text) => this.setState({password: text})}
                    />

                    <Text style={styles.text}>Repetir contraseña</Text>
                    <TextInput style={styles.first_input} placeholder={'Repetir contraseña'}

                    />

                    <Text style={styles.text}>¿Que edad tienes?</Text>
                    <TextInput style={styles.first_input} value={this.state.edad} placeholder={'Edad'}
                        onChangeText={(text) => this.setState({edad: text})}
                    />

                    <Text style={styles.text}>¿Que uso le piensas dar a la app?</Text>
                    <Text style={styles.text}>Uso seleccionado: {this.state.rol}</Text>
                    <SegmentedControls

                        options={ options }
                        onSelection={ setSelectedOption.bind(this) }
                    />

                      <Text style={styles.text}>Al registrarte aceptas las condiciones de uso</Text>
                    <TouchableOpacity style={styles.button2} onPress={() => {
                        global.currentScreenIndex = 0;
                        this.props.navigation.navigate('Condiciones');
                      }}>
                        <Text style={styles.textButton}>Condiciones de uso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.registro()
                      }}>
                        <Text style={styles.textButton}>Registrarse</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.textButton}>Atrás</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        )
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
    text: {
        marginTop: 5,
        padding: 7,
        fontSize: 15,
        fontWeight: 'bold'
    },
    text: {
        marginTop: 5,
        color:'#6325A2',
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
        backgroundColor:'#6325A2',
        margin:20,
        padding:10,
        borderRadius: 3
    },
    button2: {
        backgroundColor:"black",
        margin:0,
        padding:0,
        borderRadius: 3
    },
    textButton: {
        color:'#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});
