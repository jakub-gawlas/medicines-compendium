import { observable, computed, action, asMap } from 'mobx';
import { ListView } from 'react-native';
import data from './data';

class State {

  constructor(){
    this.medicines = {};
    data.medicines.forEach((item) => this.medicines[item.id] = item);  
  }

  dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  @observable
  filter = asMap({
    query: null
  });

  @observable
  selected = asMap();

  @computed
  get medicinesState(){
    return Object.values(this.medicines).map((item) => {
      const { id: itemId, interactions } = item;
      const isSelected = !!this.selected.get(itemId);
      const inInteractionsMedicinesIds = interactions.medicines.filter((interactionsItemId) => !!this.selected.get(interactionsItemId));
      const inInteractionsMedicines = inInteractionsMedicinesIds.map((id) => this.medicines[id]);
      return {
        ...item,
        selected: isSelected,
        inInteractions: {
          medicines: inInteractionsMedicines
        }
      };
    });
  }

  @computed
  get seen(){
    const query = this.filter.get('query');
    return this.medicinesState.filter(({ name }) => (!query || (name.toLowerCase().includes( query.toLowerCase() )) ));
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
    if(!this.selected.get(id))
      return this.selected.set(id, true);

    this.selected.delete(id);
  }

}

export default new State();