import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import App from './components/App';
import store from './store';

class HelloWorld extends Component {
  render(){
    return(
      <NavigatorIOS
        initialRoute={{
          title: 'Home',
          component: App,
          passProps: {store}
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
