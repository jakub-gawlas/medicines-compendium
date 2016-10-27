import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';
import Item from 'components/Item';
import Search from 'components/Search';

class ListItems extends Component{

  constructor(props, context){
    super(props, context);
    this._renderRow = this._renderRow.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _renderRow(data){
    const { onPressItem } = this.props;
    return(
      <Item data={data} onPress={() => onPressItem(data.id)} />
    );
  }

  _renderHeader(){
    const { onSearchChange, searchValue } = this.props;
    return(
      <Search onChangeText={onSearchChange} value={searchValue} />
    );
  }

  render(){
    const { items, onSearchChange, onPressItem } = this.props;
    return(
      <ListView
        dataSource={items}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        style={styles.container}
        enableEmptySections
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListItems;