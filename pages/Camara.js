'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Button,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {StackActions} from 'react-navigation';

export default class ScanScreen extends Component {

  constructor(props){
    super(props);
    this.state ={
      dataSource: '',

    }
  }



  onSuccess(e) {
this.setState({dataSource: e.data});
global.ausuario='Usuario';
  }

  handleButton = () => {
    this.scanner.reactivate()

  }

  addperfil = async () => {
            const link = 'http://3.14.172.179:8000/usuarios/perfiles/'+`${this.state.name}`+'.'+`${this.state.adress}`;
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

      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        ref={(elem) => { this.scanner = elem }}
        topContent={
          <Button
              onPress={() => {
                  global.currentScreenIndex = 0;
                  this.props.navigation.dispatch(StackActions.popToTop());
                  this.props.navigation.navigate('NavProfesional');
                }}
            title= {"Agregar al usuario: " + this.state.dataSource}
            />

        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}  onPress={this.handleButton}>


            <Button   onPress={() => {
                global.currentScreenIndex = 0;
                this.props.navigation.dispatch(StackActions.popToTop());
                this.props.navigation.navigate('NavProfesional');
              }}

              title="X"
              />
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);
