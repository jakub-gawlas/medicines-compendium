import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

class Input extends Component {
  render(){
    const { label, placeholder } = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>
        <TextInput {...this.props} style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  label: {
    fontSize: 18,
    marginVertical: 5
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    textAlign: 'center'
  }
});

export default Input;