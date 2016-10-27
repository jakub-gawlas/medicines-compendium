import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

function Search({ onChangeText, value }){
  return(
    <View style={styles.container}>
      <TextInput
        placeholder="Wyszukaj..."
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        keyboardType="default"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  input: {
    fontSize: 20,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(127,140,141 ,1)'
  }
});

export default Search;