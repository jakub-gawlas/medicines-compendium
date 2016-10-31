import React, { Component } from 'react';
import { observer } from 'mobx-react/native'; 
import {
  View,
  StyleSheet
} from 'react-native';
import ListItems from 'components/ListItems';

@observer
class SelectedMedicines extends Component {
  constructor(props, context){
    super(props, context);

    this.store = this.props.store;
    this._onPressItem = this._onPressItem.bind(this);
  }

  _onPressItem(id){
    this.store.setSelectedMedicines(id);
  }

  render(){
    return(
      <View style={styles.container}>
        <ListItems 
            items={this.store.selectedMedicinesDataSource} 
            onPressItem={this._onPressItem}
            showSearch={false}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

export default SelectedMedicines;