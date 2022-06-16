import Services from './Services.js';
import database from './../models/index.js';

class PessoasService extends Services {

  constructor() {
    super('Pessoas');
  }

  async pegaRegistrosAtivos(where = {}) {
    return database[this.model]
      .findAll({where: {...where}})
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.model]
      .scope('todos')
      .findAll({where: {...where}})
  }
}

export default PessoasService;