import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class PatientSettings extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>
          HELLO!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PatientSettings;