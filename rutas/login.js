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
    Button, AlertStatic as Alert
} from 'react-native';

class Login1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }



    render() {
        return (
            <View style={styles.view}>
                <ScrollView>
                    <Image source={require("../image/drawer.png")} style={styles.image}/>

                    <View style={styles.first_label}>
                        <Image source={require("../image/drawer.png")} style={styles.first_icon}/>
                        <TextInput style={styles.first_input} placeholder='Nombre de usuario'
                                   onChangeText={(text) => this.setState({username: text})}/>
                    </View>

                    <View style={styles.second_label}>
                        <Image source={require("../image/drawer.png")} style={styles.second_icon}/>
                        <TextInput secureTextEntry={true} style={styles.second_input} placeholder='Contraseña'
                                   onChangeText={(text) => this.setState({password: text})}/>
                    </View>

                    <TouchableOpacity style={styles.button_1}>
                        <Text style={styles.textButton1}> Iniciar sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_2}>
                        <Text style={styles.textButton2}>Registrarse</Text>
                    </TouchableOpacity>

                    <Text style={styles.link}>
                        ¿Has olvidado la contraseña?</Text>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    image: {
        resizeMode: 'center',
        height: 250,
        width: 325,
        marginTop: 30
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
        padding: 20
    }
});
