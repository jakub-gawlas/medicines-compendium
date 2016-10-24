import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet
} from 'react-native';

class Details extends Component {
  render(){
    const { name, age, image } = this.props.item;
    return(
      <Image 
        source={{
          uri: image
        }}
        style={styles.container}
      >      
        <Text style={styles.info}>
          {name}, {age}
        </Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  info: {
    fontSize: 40,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    marginBottom: 50
  }
});

export default Details;