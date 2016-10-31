import { observable, computed, action, asMap } from 'mobx';
import { ListView } from 'react-native';
import data from './data';

class State {

  constructor(){
    this.medicines = {};
    data.medicines.forEach((item) => this.medicines[item.id] = item);

    this.contraindications = {};
    data.contraindications.forEach((item) => this.contraindications[item.id] = item);  
  }

  dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  @observable
  filter = asMap({
    query: null
  });

  @observable
  selectedContraindications = asMap();

  @observable
  selectedMedicines = asMap();

  @computed
  get contraindicationsState(){
    return Object.values(this.contraindications).map((item) => {
      const { id } = item;
      const isSelected = !!this.selectedContraindications.get(id);
      return {
        ...item,
        selected: isSelected
      }
    });
  }

  @computed
  get medicinesState(){
    return Object.values(this.medicines).map((item) => {
      const { id: itemId, interactions } = item;

      const isSelected = !!this.selectedMedicines.get(itemId);

      const inInteractionsMedicinesIds = interactions.medicines.filter((id) => !!this.selectedMedicines.get(id));
      const inInteractionsMedicines = inInteractionsMedicinesIds.map((id) => this.medicines[id]);
      const inInteractionsContraindicationsIds = interactions.contraindications.filter((id) => !!this.selectedContraindications.get(id));
      const inInteractionsContraindications = inInteractionsContraindicationsIds.map((id) => this.contraindications[id]); 

      return {
        ...item,
        selected: isSelected,
        inInteractions: {
          medicines: inInteractionsMedicines,
          contraindications: inInteractionsContraindications
        }
      };
    });
  }

  @computed 
  get selectedMedicinesDataSource(){
    return this.dataSource.cloneWithRows(this.medicinesState.filter(({ selected }) => !!selected));
  }

  @computed
  get seenMedicines(){
    const query = this.filter.get('query');
    return this.medicinesState.filter(({ name }) => (!query || (name.toLowerCase().includes( query.toLowerCase() )) ));
  }

  @computed
  get seenMedicinesDataSource(){
    return this.dataSource.cloneWithRows(this.seenMedicines);
  }

  @action
  setFilterQuery(value){
    const resultValue = value !== '' ? value : null;
    this.filter.set('query', resultValue);
  }

  @action
  setSelectedContraindications(id){
    if(!this.selectedContraindications.get(id))
      return this.selectedContraindications.set(id, true);
    
    this.selectedContraindications.delete(id);
  }

  @action
  setSelectedMedicines(id){
    if(!this.selectedMedicines.get(id))
      return this.selectedMedicines.set(id, true);

    this.selectedMedicines.delete(id);
  }

}

export default new State();