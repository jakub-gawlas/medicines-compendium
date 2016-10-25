import React, { Component } from 'react';
import { 
  NavigatorIOS,
  StyleSheet
} from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import PatientSettings from 'views/PatientSettings';
import MedicinesSearch from 'views/MedicinesSearch';
import store from './store';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.getRoute = this.getRoute.bind(this);
  }

  routes = {
    'patient-settings': {
      title: 'Pacjent',
      component: PatientSettings,
      rightButtonTitle: 'Leki',
      onRightButtonPress: (props) => {
        this.navigator.push(this.getRoute('medicines-search'));
      }
    },
    'medicines-search': {
      title: 'Leki',
      component: MedicinesSearch,
      rightButtonTitle: 'Wybrane'
    }
  };

  defaultPassProps = { getRoute: this.getRoute, store };

  getRoute(key, { title, passProps } = {}){
    const route = this.routes[key];
    return {
      ...route,
      title: title || route.title,
      passProps: {
        ...this.defaultPassProps,
        ...route.passProps,
        ...passProps
      }
    };
  }

  render(){
    return(
      <ThemeProvider>
        <NavigatorIOS
          ref={(ref) => this.navigator = ref}
          initialRoute={this.getRoute('patient-settings')}
          style={styles.container}
        />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;