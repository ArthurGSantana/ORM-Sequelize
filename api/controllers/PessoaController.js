import database from '../models/index.js';

class PessoaController {

  static async pegaTodasAsPessoas(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.status(200).json(pessoas);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar lista de Pessoas!`})
    }
  }
}

export default PessoaController;