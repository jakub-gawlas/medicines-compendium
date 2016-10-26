import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import SwitchItem from 'components/SwitchItem';

function SwitchListItems({ items, headerText }){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        {headerText}
      </Text>
      {items.map((item) => <SwitchItem {...item} key={item.id} />)}
    </View>
  );
}

const styles = {
  container: {
    flex: 1
  },
  text: {
    marginLeft: 30,
    marginBottom: 10,
    fontSize: 16
  }
};

export default SwitchListItems;