import React, { Component } from 'react';
import { 
  NavigatorIOS,
  StyleSheet
} from 'react-native';
import Home from 'views/Home';
import store from './store';

const routes= {
  'home': {
    title: 'Home',
    component: Home,
    passProps: { store }
  }
};

const defaultPassProps = { getRoute };

function getRoute(key, { title, passProps } = {}){
  const route = routes[key];
  return {
    ...route,
    title: title || route.title,
    passProps: {
      ...defaultPassProps,
      ...route.passProps,
      ...passProps
    }
  };
}

class App extends Component {
  render(){
    return(
      <NavigatorIOS
        initialRoute={getRoute('home')}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;