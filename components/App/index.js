import React, { Component } from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import { observer } from 'mobx-react/native';
import Details from './Details';
import List from './List';
import Button from './Button';

@observer
class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      id: 0
    };
    this.store = this.props.store;
  }

  _onPressListItem(id){
    const item = this.store.getItemById(id);
    this.props.navigator.push({
      title: `About ${item.name}`,
      component: Details,
      passProps: {item}
    });
  }

  _onPressButton(){
    this.store.addRandomItem();
  }

  render(){
    const { dataSource } = this.store; 
    console.log(dataSource.length);
    return(
      <Image 
        source={{
          uri: 'https://il8.picdn.net/shutterstock/videos/1261375/thumb/1.jpg'
        }}
        style={styles.container}
      >
        <List 
          items={dataSource}
          onPressItem={this._onPressListItem.bind(this)}
        />
        <Button 
          text="ADD ITEM" 
          onPress={this._onPressButton.bind(this)}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default App;