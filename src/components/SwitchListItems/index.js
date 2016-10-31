import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import SwitchItem from 'components/SwitchItem';

function SwitchListItems({ items, headerText, onPressItem }){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        {headerText}
      </Text>
      {items.map((item) => <SwitchItem {...item} onPress={() => onPressItem(item.id)} key={item.id} />)}
    </View>
  );
}

const styles = {
  container: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
};

export default SwitchListItems;