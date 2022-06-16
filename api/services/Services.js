import database from './../models/index.js';

class Services {

  constructor(model) {
    this.model = model;
  }

  async listarRegistros() {
    return database[this.model].findAll();
  }

}

export default Services;