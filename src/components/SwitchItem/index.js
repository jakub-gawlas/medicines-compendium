import React from 'react';
import {
  TouchableOpacity,
  View,
  Switch,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SwitchItem({ name, iconName, selected, onPress }){
  
  const iconColor = selected ? 'rgba(66,66,66 ,1)' : 'rgba(189,189,189 ,1)';

  return(
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={styles.container}>
        <Switch 
          onValueChange={onPress} 
          value={selected} 
        />
        <View style={styles.right}>
          <Text style={styles.name}>
            {name}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(127,140,141 ,1)'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20
  },
  name: {
    fontSize: 18
  },
  icon: {
    fontSize: 35
  }
});

export default SwitchItem;