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
    Button,Alert,
    Icon,
    StatusBar,
    Platform
} from 'react-native';
import * as axios from 'axios';

export default class Login1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          responser:'',
          team:'NavPersonal',
            username: '',
            password: '',
            clickCount: 0,
            datos:"hola",
            renderUnity: false,
            unityPaused: false,
            isLoading: true,
            dataSource: [],
        };
    }

    componentDidMount() {
        StatusBar.setHidden(true);
        StatusBar.setBarStyle('dark-content');
        if (Platform.OS == 'android') {
            StatusBar.setBackgroundColor('rgba(255,255,255,0)');
            StatusBar.setTranslucent(true);
        }
    }

    login = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/login/'+`${this.state.username}` + '.' + `${this.state.password}`;

          this.setState({responser: link}),

      axios.get(link)
        .then(function (response) {
          this.setState({responser: response.status}),
          this.setState({dataSource: response.data}),
          global.usuario= this.state.dataSource[0].nombreUsuario;
          global.id = this.state.dataSource[0].id;
          global.email = this.state.dataSource[0].email;
          global.rol = this.state.dataSource[0].rol;
          global.edad = this.state.dataSource[0].edad;
          global.completado = this.state.dataSource[0].completado;
          global.detectado = this.state.dataSource[0].detectado;
          global.fecha = this.state.dataSource[0].fecha;
          global.diagnostico = this.state.dataSource[0].diagnostico;
          if(global.rol > 0){
            this.props.navigation.navigate('loginpro');
          }else{
            this.props.navigation.navigate('login');
          }

          // handle success
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),
            Alert.alert('Autentificación','Lo sentimos, el usuario y/o la contraseña es incorrecta'),
         console.log(error);
 }.bind(this))

    }

    render() {

        return (
            <View style={styles.view}>
                <ScrollView>
                    <Image source={require("../image/drawer.png")} style={styles.image}/>

                    <View style={styles.first_label}>
                        <Image source={require("../image/user-shape.png")} style={styles.first_icon}/>
                        <TextInput style={styles.first_input} placeholder='Nombre de usuario'
                                   onChangeText={(text) => this.setState({username: text})}/>
                    </View>

                    <View style={styles.second_label}>
                        <Image source={require("../image/padlock.png")} style={styles.second_icon}/>
                        <TextInput secureTextEntry={true} style={styles.second_input} placeholder='Contraseña'
                                   onChangeText={(text) => this.setState({password: text})}/>
                    </View>

                    <TouchableOpacity style={styles.button_1} onPress={() => {
                        this.login()
                      }}>
                        <Text style={styles.textButton1}> Iniciar sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_2} onPress={() => {
                        global.currentScreenIndex = 0;
                        this.props.navigation.navigate('Registro');
                      }}>
                        <Text style={styles.textButton2}>Registrarse</Text>
                    </TouchableOpacity>



                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    image: {
        height: 300,
        width: 300,
        marginTop: 30,
        marginLeft: 30
    },
    first_label: {
        margin: 7,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    first_icon: {
        height: 40,
        width: 40,
        marginRight: 20,
        margin:8
    },
    first_input: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 7,
        width: "75%",
        height: 50
    },
    second_label: {
        margin: 7,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    second_icon: {
        height: 40,
        width: 40,
        marginRight: 20,
        margin:8
    },
    second_input: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 7,
        width: "75%",
        height: 50
    },
    button_1: {
        marginTop:20,
        backgroundColor:'#63615F',
        margin:5,
        padding:10,
        borderRadius: 3
    },
    textButton1: {
        color:'#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    button_2: {
        backgroundColor:'#1B6DE5',
        margin:5,
        padding:10,
        borderRadius: 3
    },
    textButton2: {
        color:'#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    link: {
        color: 'blue',
        margin: 10,
        fontSize: 17,
        textAlign:'center',
        fontWeight: 'bold'
    },
    view: {
      justifyContent: 'center',
alignItems: 'center',
        padding: 20
    }
});
