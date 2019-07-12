//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,ScrollView,TextInput,TouchableOpacity } from 'react-native';
// import all basic components

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
              <Text style={styles.text}>Nombre</Text>
              <TextInput style={styles.first_input} value={this.state.name} placeholder={'Nombre'}
                  onChangeText={(text) => this.setState({name: text})}
              />

              <Text style={styles.text}>Dirección</Text>
              <TextInput style={styles.first_input} value={this.state.address} placeholder={'Dirección'}
                  onChangeText={(text) => this.setState({address: text})}
              />

              <Text style={styles.text}>Email</Text>
              <TextInput style={styles.first_input} value={this.state.email} placeholder={'Email'}
                  onChangeText={(text) => this.setState({email: text})}
              />

              <Text style={styles.text}>pregunta 1</Text>
              <TextInput style={styles.first_input} value={this.state.pregunta1} placeholder={'pregunta 1'}
                  onChangeText={(text) => this.setState({pregunta1: text})}
              />

              <Text style={styles.text}>pregunta 2</Text>
              <TextInput style={styles.first_input} value={this.state.pregunta2} placeholder={'pregunta 2'}
                  onChangeText={(text) => this.setState({pregunta2: text})}
              />

              <Text style={styles.text}>pregunta 3</Text>
              <TextInput style={styles.first_input} value={this.state.pregunta3} placeholder={'pregunta 3'}
                  onChangeText={(text) => this.setState({pregunta3: text})}
              />
              <Text style={styles.text}>pregunta 4</Text>
              <TextInput style={styles.first_input} value={this.state.pregunta4} placeholder={'pregunta 4'}
                  onChangeText={(text) => this.setState({pregunta4: text})}
              />
              <Text style={styles.text}>pregunta 5</Text>
              <TextInput style={styles.first_input} value={this.state.pregunta5} placeholder={'pregunta 5'}
                  onChangeText={(text) => this.setState({pregunta5: text})}
              />
              <Text style={styles.text}>pregunta 6</Text>
              <TextInput style={styles.first_input} value={this.state.pregunta6} placeholder={'pregunta 6'}
                  onChangeText={(text) => this.setState({pregunta6: text})}
              />
              <TouchableOpacity style={styles.button} onPress={() =>  this.props.navigation.navigate('NavPersonal')}>
                  <Text style={styles.textButton}>Guardar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() =>  this.props.navigation.navigate('NavPersonal')}>
                  <Text style={styles.textButton}>Atrás</Text>
              </TouchableOpacity>

          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

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
