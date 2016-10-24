import { observable, computed, action, asMap } from 'mobx';
import { ListView } from 'react-native';
import data from './data';

class State {

  constructor(){
    const allData = data.map((item) => { 
      return asMap({
        ...item,
        selected: false
      });
    });
    this.all = allData;
  }

  dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  get allMap(){
    const map = new Map();
    this.all.forEach(({ id, ...item }) => map.set(id, item));
    return map;
  }

  @observable
  filter = asMap({
    query: null
  });

  @observable 
  used = [];

  @computed
  get seen(){
    const query = this.filter.get('query');
    return this.all.filter((item) => {
      const name = item.get('name');
      return !query || (name.toLowerCase().includes(query.toLowerCase()));
    });
  }

  @computed
  get seenDataSource(){
    return this.dataSource.cloneWithRows(this.seen);
  }

  @action
  setFilterQuery(value){
    const resultValue = value !== '' ? value : null;
    this.filter.set('query', resultValue);
  }

  @action
  setSelected(id){
    const item = this.all.filter((item) => item.get('id') === id)[0];
    if(!item)
      return;
    const selected = item.get('selected');
    item.set('selected', !selected);
  }
}

export default new State();