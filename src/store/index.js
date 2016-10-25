import { observable, computed, action, asMap } from 'mobx';
import { ListView } from 'react-native';
import data from './data';

class State {

  constructor(){
    this.all = {};
    this.interactions = new Map();
    data.forEach(({id, name, interactions}) => { 
      this.all[id] =  
        asMap({
          selected: false,
          inInteractions: asMap({
            medicines: asMap()
          }),
          id,
          name,
          interactions
        });
    });
  }

  dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  @observable
  filter = asMap({
    query: null
  });

  @computed
  get seen(){
    const query = this.filter.get('query');
    return Object.values(this.all).filter((item) => {
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
    const item = this.all[id];
    if(!item)
      return;
    const selected = item.get('selected');
    item.set('selected', !selected);
    selected ? this.updateMedicinesInteractionsOnRemove(id) : this.updateMedicinesInteractionsOnAdd(id);
  }

  @action updateMedicinesInteractionsOnAdd(newItemId){
    const newItem = this.all[newItemId];
    const interactionsMedicines = newItem.get('interactions').medicines;
    const newItemInInteractionsMedicines = newItem.get('inInteractions').get('medicines');
    interactionsMedicines.forEach((itemId) => {
      const item = this.all[itemId];
      if(!item.get('selected'))
        return;

      const itemInInteractionsMedicines = item.get('inInteractions').get('medicines');
      itemInInteractionsMedicines.set(newItemId, newItem);
      newItemInInteractionsMedicines.set(itemId, item);
    });
  }


  @action updateMedicinesInteractionsOnRemove(removedItemId){
    const removedItem = this.all[removedItemId];
    const inInteractionsMedicines = removedItem.get('inInteractions').get('medicines');
    inInteractionsMedicines.forEach((value, key) => {
      const item = this.all[key];
      const itemInInteractionsMedicines = item.get('inInteractions').get('medicines');
      itemInInteractionsMedicines.delete(removedItemId);
    });
    inInteractionsMedicines.clear();
  }

}

export default new State();