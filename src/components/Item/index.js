import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function getInInteractionsMedicinesAsArray(inInteractionsMedicinesAsMap){
  const inInteractionsMedicinesJS = inInteractionsMedicinesAsMap.toJS();
  return Object.entries(inInteractionsMedicinesJS).map(([key, value]) => value.get('name'));
}

const CustomLayoutSpring = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7
  },
  update: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7
  }
};

@observer
class Item extends Component {
  render(){
    LayoutAnimation.configureNext(CustomLayoutSpring);
    const { data: dataMobx, onPress } = this.props;
    const { name, selected: isActive, inInteractions } = dataMobx.toJS();
    const medicinesInInteractions = inInteractions.get('medicines');
    const textInInteractions = getInInteractionsMedicinesAsArray(medicinesInInteractions).join(', ');
    const isInInteractions = !!medicinesInInteractions.size;
    const icon = isActive ? 
      (isInInteractions ? 
        <Icon name="error-outline" style={styles.bigIcon} color="rgba(231,76,60 ,1)" /> : 
        <Icon name="done" style={styles.bigIcon} color ="rgba(102,187,106 ,1)" />) 
      : null;
    return(
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.container}>
          <View style={styles.left}>
            {icon}
          </View>
          <View style={styles.right}>
            <Text style={styles.textName}>
              { name }
            </Text>
            { isInInteractions &&
              <View style={styles.containerInteractions}>
                <Icon name="local-pharmacy" style={styles.smallIcon} />
                <Text style={styles.textInteractions}>
                  {textInInteractions}
                </Text>
              </View>
            }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(127,140,141 ,1)',
    backgroundColor: 'white'
  },
  left: {
    marginLeft: 20
  },
  right: {
    marginLeft: 20
  },
  bigIcon: {
    fontSize: 40
  },
  smallIcon: {
    fontSize: 20
  },
  textName: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'transparent',
    padding: 10
  },
  containerInteractions: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center'
  },
  textInteractions: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5
  }
});

export default Item;