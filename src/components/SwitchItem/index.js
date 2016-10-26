import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Switch,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SwitchItem extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      switchValue: false
    };
    this._onPressItem = this._onPressItem.bind(this);
    this._onValueChange = this._onValueChange.bind(this);
  }

  _onPressItem(){
    const { switchValue } = this.state;
    this._onValueChange(!switchValue);
  }

  _onValueChange(value){
    this.setState({
      switchValue: value
    });
  }

  render(){
    const { switchValue } = this.state;
    const { label, iconName } = this.props;
    const iconColor = switchValue ? 'rgba(66,66,66 ,1)' : 'rgba(189,189,189 ,1)';
    return(
      <TouchableOpacity 
        onPress={this._onPressItem}
        activeOpacity={1}
      >
        <View style={styles.container}>
          <Switch 
            onValueChange={this._onValueChange} 
            value={switchValue} 
          />
          <View style={styles.right}>
            <Text style={styles.label}>
              {label}
            </Text>
            <Text>
              {iconName && 
                <Icon name={iconName} style={styles.icon} color={iconColor} />
              } 
            </Text>
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
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(127,140,141 ,1)'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20
  },
  label: {
    fontSize: 18,
    marginTop: 6
  },
  icon: {
    fontSize: 35
  }
});

export default SwitchItem;