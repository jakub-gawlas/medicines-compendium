import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import Input from 'components/Input';
import SwitchListItems from 'components/SwitchListItems';

@observer
class PatientSettings extends Component {
  constructor(props, context){
    super(props, context);

    this.store = this.props.store;
    this._onPressContraindications = this._onPressContraindications.bind(this);
  }

  _onPressContraindications(id){
    this.store.setSelectedContraindications(id);
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputs}>
          <Input label="Wiek" placeholder="lat" keyboardType="numeric" />
          <Input label="Waga" placeholder="kg" keyboardType="numeric" />
        </View>
        <SwitchListItems 
          headerText="PRZECIWWSKAZANIA"
          items={this.store.contraindicationsState} 
          onPressItem={this._onPressContraindications}
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