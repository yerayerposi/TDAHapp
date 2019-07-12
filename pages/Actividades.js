/*/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Alert ,FlatList} from 'react-native';
import Button from '../out/components/Button';
import UnityView, { UnityModule } from 'react-native-unity-view';


const responseJson = [{d2:[{ level:0, total: 0,C:0,O :46}]}]

export default class Screen2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0,
			      datos:"hola",
            renderUnity: false,
            unityPaused: false,
            isLoading: true,
            dataSource: responseJson,
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
    onToggleUnity() {
        this.setState({ renderUnity: !this.state.renderUnity });
    }
    onPauseAndResumeUnity() {
        if (this.state.unityPaused) {
            UnityModule.resume();
        }
        else {
            UnityModule.pause();
        }
        this.setState({ unityPaused: !this.state.unityPaused });
    }
    onToggleRotate() {
	Alert.alert('Enviado',"todo");
	UnityModule.postMessageToUnityManager('message');
    }
	onMessage(event) {
    	Alert.alert('evento',event),
    this.setState({dataSource: eval(event)});

	}

  renderItem = ({item, index}) => {
      let { d2 } = item;

      if (!d2[0]) return null;
      let details = d2[0];

      return (
        <View>
          <View>
            <Text>{}</Text>
            <Text>{details?.level}</Text>
            <Text>{details?.TOTAL}</Text>
            <Text>{details?.C}</Text>
            <Text>{details?.O}</Text>

            </View>

          </View>

      );
    }

    keyExtractor = (item, index) => {
      return index.toString();
    }


    onUnityMessage(hander) {
		 Alert.alert('otrop',hander.name);
        setTimeout(() => {

            hander.send('I am click callback!');
        }, 2000);
    }
    render() {
        const { renderUnity, unityPaused, clickCount } = this.state;
        let unityElement;
        if (renderUnity) {
            unityElement = (React.createElement(UnityView, { style: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }, onUnityMessage: this.onUnityMessage.bind(this),onMessage: this.onMessage.bind(this) }));
        }

        return (
           React.createElement(View, { style: [styles.container] },
            unityElement,
            React.createElement(Button, { label: "Toggle Unity", style: styles.button, onPress: this.onToggleUnity.bind(this) }),
            renderUnity ? React.createElement(Button, { label: "Toggle Rotate", style: styles.button, onPress: this.onToggleRotate.bind(this) }) : null,
            renderUnity ? React.createElement(Button, { label: unityPaused ? "Resume" : "Pause", style: styles.button, onPress: this.onPauseAndResumeUnity.bind(this) }) : null,
			renderUnity ? React.createElement(Button, { label:" Enviar", style: styles.button, onPress: this.onToggleRotate.bind(this) }) : null,

      <View>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>

      ));
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
        marginTop: 30,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        marginTop: 10
    }
});
