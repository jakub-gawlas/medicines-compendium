import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import { 
  View,
  StyleSheet
} from 'react-native';
import ListItems from 'components/ListItems';

@observer
class Home extends Component{
  constructor(props, context){
    super(props, context);

    this.store = this.props.store;
    this._onSearchChange = this._onSearchChange.bind(this);
    this._onPressItem = this._onPressItem.bind(this);
  }

  _onSearchChange(value){
    this.store.setFilterQuery(value);
  }

  _onPressItem(id){
    this.store.setSelected(id);
  }

  render(){
    return(
      <View style={styles.container}>
        <ListItems 
          items={this.store.seenDataSource} 
          onSearchChange={this._onSearchChange}
          onPressItem={this._onPressItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;