import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import Input from 'components/Input';
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputs}>
          <Input label="Wiek" placeholder="lat" keyboardType="numeric" />
          <Input label="Waga" placeholder="kg" keyboardType="numeric" />
        </View>
        <SwitchListItems 
          headerText="PRZECIWWSKAZANIA"
          items={items} 
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  }
});

export default PatientSettings;