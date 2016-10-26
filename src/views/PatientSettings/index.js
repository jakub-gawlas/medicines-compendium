import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import SwitchListItems from 'components/SwitchListItems';

const items = [
  {
    id: 0,
    label: 'Ciąża',
    iconName: 'pregnant-woman'
  },
  {
    id: 1,
    label: 'Karmienie piersią',
    iconName: 'child-friendly'
  },
  {
    id: 2,
    label: 'Kierowanie pojazdami',
    iconName: 'directions-car'
  },
  {
    id: 3,
    label: 'Alkohol',
    iconName: 'local-bar'
  }
];

class PatientSettings extends Component {
  render(){
    return(
      <View style={styles.container}>
        <SwitchListItems 
          headerText="Przeciwwskazania:"
          items={items} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 80
  },
  text: {
    marginLeft: 30,
    marginBottom: 10,
    fontSize: 16
  }
});

export default PatientSettings;