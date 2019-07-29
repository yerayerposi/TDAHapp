//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import {View,  StyleSheet,  Dimensions,  Image,  TouchableOpacity,  Platform,  Text,Alert,AsyncStorage} from 'react-native';
// import all basic components

//Import required react-navigation component
import {createDrawerNavigator,  createStackNavigator,  createAppContainer,} from 'react-navigation';

//Import all the screens
import Personal from './pages/Personal';
import Actividades from './pages/Actividades';
import Formulario from './pages/Formulario';
import Resultados from './pages/Resultados';
import Profesional from './pages/Profesional';
import Condiciones from './pages/Condiciones';
import LoginScreen from './pages/LoginScreen';
import Registro from './pages/Registro';
import Perfiles from './pages/Perfiles';
import Perfiles2 from './pages/Perfiles2';
import Perfil from './pages/Perfil';
import ScanScreen from './pages/Camara';
import Detectados from './pages/detectados';
import Faq from './pages/Faq';
//Import Custom Sidebar
import CustomSidebarMenu from './pages/CustomSidebarMenu';
import CustomSidebarMenuProfesional from './pages/CustomSidebarMenuProfesional';
Detectados
global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  constructor(props) {
  super(props);
this.index = true;
this.state = {
    name: '',
    address: '',
    email: '',
    responser: '',
    username: '',
    password: ''
};

}

  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

registro = async () => {
  const link =
    "http://3.14.172.179:8000/usuarios/register/" +
    `${this.state.name}` +
    "." +
    `${this.state.adress}` +
    "." +
    `${this.state.password}` +
    "." +
    `${this.state.username}` +
    "." +
    `${"nada"}` +
    "." +
    `${"nada"}` +
    "." +
    `${this.state.email}`;
  this.setState({ responser: link }),
    axios
      .get(link)
      .then(
        function(response) {
          this.setState({ responser: response.status });
          (global.myvar = response.status),
            Alert.alert("Autentificación", `${this.state.responser}`),
            console.log(response);
        }.bind(this)
      )
      .catch(
        function(error) {
          this.setState({ responser: "error" }),
            (global.myvar = error),
            Alert.alert("Autentificación", `${this.state.responser}`),
            console.log(error);
        }.bind(this)
      );
};


  render() {


    return (

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 100, height: 100, marginLeft: 10, marginTop: 0 }}
          />

        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const StackNavigatorPersonal = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Personal,
    navigationOptions: ({ navigation }) => ({
      title: '            TDaH-app',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {

        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    }),
  },
});

const Faq_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Faq,
    navigationOptions: ({ navigation }) => ({
      title: '            Faq',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {

        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    }),
  },
});
const StackNavigatorProfesional = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Profesional,
    navigationOptions: ({ navigation }) => ({
      title: '            TDaH-app',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {

        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    }),
  },
});
//Stack Navigator for the Second Option of Navigation Drawer
const Actividades_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Actividades,
    navigationOptions: ({ navigation }) => ({
      title: '            Actividades',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Perfil_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Perfil,
    navigationOptions: ({ navigation }) => ({
      title: '                   Perfil',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Detectados_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Detectados,
    navigationOptions: ({ navigation }) => ({
      title: '                   Detectados',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Resultados_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  four: {
    screen: Resultados,
    navigationOptions: ({ navigation }) => ({
      title: '            Resultados',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Perfiles_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  four: {
    screen: Perfiles,
    navigationOptions: ({ navigation }) => ({
      title: '          Perfiles',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Perfiles2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  four: {
    screen: Perfiles2,
    navigationOptions: ({ navigation }) => ({
      title: '       Casos detectados',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#523FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Drawer Navigator Which will provide the structure of our App

const DrawerNavigatorPersonal = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavPersonal: {
      screen: StackNavigatorPersonal,
      navigationOptions: {
        drawerLabel: 'Personal',
      },
    },
    NavFaq: {
      screen: Faq_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Faq',
      },
},
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu

    contentComponent: CustomSidebarMenu,

        //Sidebar width

  drawerWidth: Dimensions.get('window').width - 130,
  }
);

const DrawerNavigatorPro = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavProfesional: {
      screen: StackNavigatorProfesional,
      navigationOptions: {
        drawerLabel: 'Profesional',
      },
    },

    NavPerfiles: {
      screen: Perfiles_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Perfiles',
      },
    },
    NavPerfiles2: {
      screen: Perfiles2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Perfiles2',
      },
    },
    NavPerfil: {
      screen: Perfil_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Perfil',
      },
    },
    NavDetectados: {
      screen: Detectados_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Perfil',
      },
    },
    NavResultados: {
      screen: Resultados_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Resultados',
      },
    },

    NavCamara: {
      screen: ScanScreen,
    },

  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu

    contentComponent: CustomSidebarMenuProfesional,

        //Sidebar width

  drawerWidth: Dimensions.get('window').width - 130,
  }
);



const ModalStack = createStackNavigator({

    logout:{screen:LoginScreen},
    Registro:{screen: Registro},
    login:{screen:DrawerNavigatorPersonal},
    NavActividades: {screen: Actividades
    },

    loginpro:{screen:DrawerNavigatorPro},
    Condiciones: {screen: Condiciones}
},{
    mode:'modal',
    headerMode:'none'
})






export default createAppContainer(ModalStack);
