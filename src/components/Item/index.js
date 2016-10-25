import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation
} from 'react-native';

function getInInteractionsMedicinesAsArray(inInteractionsMedicinesAsMap){
  const inInteractionsMedicinesJS = inInteractionsMedicinesAsMap.toJS();
  return Object.entries(inInteractionsMedicinesJS).map(([key, value]) => value.get('name'));
}

@observer
class Item extends Component {
  render(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const { data: dataMobx, onPress } = this.props;
    const { name, selected: isActive, inInteractions } = dataMobx.toJS();
    const medicinesInInteractions = inInteractions.get('medicines');
    const textInInteractions = getInInteractionsMedicinesAsArray(medicinesInInteractions).join(', ');
    const isInInteractions = !!medicinesInInteractions.size;
    const containerStyles = [styles.container, isActive ? (isInInteractions ? styles.isInInteractions : styles.isActive) : null];
    return(
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={containerStyles}>
          <Text style={styles.textName}>
            { name }
          </Text>
          { isInInteractions &&
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
    borderColor: 'rgba(127,140,141 ,1)',
    backgroundColor: 'white'
  },
  isActive: {
    borderColor: 'white',
    backgroundColor: 'rgba(102,187,106 ,1)'
  },
  isInInteractions: {
    borderColor: 'white',
    backgroundColor: 'rgba(231,76,60 ,1)'
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