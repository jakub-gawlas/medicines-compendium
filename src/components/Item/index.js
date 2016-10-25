import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

function getInInteractionsMedicinesAsArray(inInteractionsMedicinesAsMap){
  const inInteractionsMedicinesJS = inInteractionsMedicinesAsMap.toJS();
  return Object.entries(inInteractionsMedicinesJS).map(([key, value]) => value.get('name'));
}

@observer
class Item extends Component {
  render(){
    const { data: dataMobx, onPress } = this.props;
    const { name, selected: isActive, inInteractions } = dataMobx.toJS();
    const medicinesInInteractions = inInteractions.get('medicines');
    const textInInteractions = getInInteractionsMedicinesAsArray(medicinesInInteractions).join(', ');
    const backgroundColor = isActive ? 'grey' : 'white';
    return(
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={[styles.container, {backgroundColor}]}>
          <Text style={styles.textName}>
            { name }
          </Text>
          { !!medicinesInInteractions.size &&
            <Text style={styles.textInteractions}>
              {textInInteractions}
            </Text>
          }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey'
  },
  textName: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'transparent',
    padding: 10
  },
  textInteractions: {
    color: 'black',
    fontSize: 14,
    backgroundColor: 'transparent',
    padding: 3
  }
});

export default Item;