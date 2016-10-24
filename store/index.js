import { observable, computed, action } from 'mobx';
import { ListView } from 'react-native';

let id = 0;
class State {
  @observable
  list = [];

  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  constructor(){
    [...Array(3)].forEach(this.addRandomItem.bind(this));
  }

  @computed
  get dataSource(){
    return this.ds.cloneWithRows(this.list.toJS());
  }

  @action
  addItem({ name, age, image }){
    const item = { name, age, image, id: id++ };
    this.list.push(item);
  }

  addRandomItem(){
    const items = [
      {name: 'Janusz', age: 43, image: 'https://3.bp.blogspot.com/-tms5FyJrLC0/TwjYkx3S7RI/AAAAAAAABKE/T03X6Pz-T8k/s1600/polak-radzi-pan-andrzej-janusz-lawrynowicz-zdj%25C4%2599cie.jpg'},
      {name: 'Karol', age: 50, image: 'https://d-pt.ppstatic.pl/k/r/6/b7/36/5154504132c60_o.jpg?1400640968'},
      {name: 'Zbyszek', age: 22, image: 'https://1.bp.blogspot.com/-BtCpds1720g/UIruddlUqTI/AAAAAAAAHis/aTC2tMLU8NU/s1600/zjarany-zbyszek-10-guy-stoner-guy-oryginalne-zdjecia-2-mem.jpg'},
      {name: 'Andrzej', age: 30, image: 'https://pbs.twimg.com/profile_images/556495456805453826/wKEOCDN0_400x400.png'},
      {name: 'Marian', age: 49, image: 'https://vignette2.wikia.nocookie.net/kiepscy/images/b/bd/Marian-Pa%C5%BAdzioch.JPG/revision/latest?cb=20130725171654'},
      {name: 'Zdzisław', age: 54, image: 'https://m.ocdn.eu/_m/53a16e2ab1fae1afa217a38dcc122436,62,37.jpg'}
    ];
    const randomItem = items[Math.floor(Math.random()*items.length)];
    this.addItem(randomItem); 
  }

  getItemById(id){
    return this.list.filter((item) => item.id === id)[0] || null;
  }

}

const state = new State();
export default state;