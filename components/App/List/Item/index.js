import React, { Component } from 'react';
import { 
  TouchableOpacity,
  View, 
  Text,
  LayoutAnimation,
  StyleSheet 
} from 'react-native';

class Item extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      hiddenMore: true
    };
  }
  _onPressMore(){
    const { hiddenMore } = this.state;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      hiddenMore: !hiddenMore
    });
  }
  render(){
    const { hiddenMore } = this.state;
    const { name, age, onPress } = this.props;
    return(
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
      >
        <View style={styles.container}>
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.age}>
            {age}
          </Text>
          {!hiddenMore && <Text style={styles.more}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>}
          <TouchableOpacity onPress={this._onPressMore.bind(this)}>
            <Text style={styles.buttonMore}>
              {hiddenMore ? 'SHOW MORE' : 'HIDE MORE'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: 5,
    padding: 5
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  age: {
    fontSize: 20,
    textAlign: 'center'
  },
  more: {
    textAlign: 'justify',
    color: 'white',
    fontSize: 18,
    margin: 10
  },
  buttonMore: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    padding: 5,
    backgroundColor: 'white'
  }
});

export default Item;
