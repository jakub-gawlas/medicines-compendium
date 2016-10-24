import React, { Component } from 'react';
import { 
  View, 
  ListView,
  StyleSheet 
} from 'react-native';
import { observer } from 'mobx-react/native';
import Item from './Item';

@observer
class List extends Component {

  _onPressItem(id){
    return () => this.props.onPressItem(id);
  }
  
  render(){
    const { items } = this.props;
    return(
      <ListView
        dataSource={items}
        renderRow={(data) => <Item {...data} onPress={this._onPressItem(data.id).bind(this)} />}
        style={styles.container}
        enableEmptySections
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

export default List;