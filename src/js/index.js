
import { DataManager } from './dataManager';
import { Loader } from './loader.js';

export class Index {
  
    constructor() {
  
      const main = document.getElementById('main');
      const tableData = this.createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
      this.renderTableToDom(main, tableData);
      this.loadData()
    }
  
    loadData() {
      this.loader = new Loader();
      const data = this.loader.load('/assets/stuff.json')
        .then(response => response.json())
        .then(json => console.log(json))

    }
  
    renderTableToDom(element, data) {
      element.innerHTML = data;
    }
  
    createTable(data) {
      let result = ["<table border=1'>"];
      for(let row of data) {
        result.push("<tr>");
        for(let cell of row){
          result.push(`<td>${cell}</td>`);
        }
        result.push("</tr>");
      }
      result.push("</table>");
      return result.join('\n');
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
    new Index()
  });

