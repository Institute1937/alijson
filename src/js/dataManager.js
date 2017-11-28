export class DataManager {

  constructor(data) {

    this.data = data;
  }

  addItems(items) {
    this.data = Object.asssign(this.data, items);
  }


}
