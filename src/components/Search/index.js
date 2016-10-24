import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

function Search({ onChangeText }){
  return(
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        onChangeText={onChangeText}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
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
    borderColor: 'grey'
  }
});

export default Search;