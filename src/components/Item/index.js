import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

@observer
class Item extends Component {
  render(){
    const { data: dataMobx, onPress } = this.props;
    const { name, selected: isActive } = dataMobx.toJS();
    const backgroundColor = isActive ? 'grey' : 'white';
    return(
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={[styles.container, {backgroundColor}]}>
          <Text style={styles.text}>
            { name }
          </Text>
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
  text: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'transparent',
    padding: 10
  }
});

export default Item;