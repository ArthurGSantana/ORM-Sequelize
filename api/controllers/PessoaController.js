import database from '../models/index.js';

const Pessoas = database.Pessoas;

class PessoaController {

  static async pegaTodasAsPessoasAtivas(req, res) {
    try {
      const pessoas = await Pessoas.findAll();
      return res.status(200).json(pessoas);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar lista de Pessoas!`})
    }
  }

  static async pegaTodasAsPessoas(req, res) {
    try {
      const pessoas = await Pessoas.scope('todos').findAll();
      return res.status(200).json(pessoas);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar lista de Pessoas!`})
    }
  }

  static async pegarPessoa(req, res) {
    const {id} = req.params;

    try {
      const pessoa = await Pessoas
        .findOne({
          where: {
            id: Number(id)
          }
        })

      return res.status(200).json(pessoa);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar Id da Pessoa!`})
    }
  }

  static async criarPessoa(req, res) {
    const pessoa = req.body;

    try {
      const newPessoa = await Pessoas.create(pessoa)

      return res.status(201).json(newPessoa);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao criar nova Pessoa!`})
    }
  }

  static async atualizarPessoa(req, res) {
    const {id} = req.params;
    const newPessoa = req.body;

    try {
      await Pessoas.update(newPessoa, {
        where: {
          id: Number(id)
        }
      })

      const pessoa = await Pessoas
        .findOne({
          where: {
            id: Number(id)
          }
        })

      return res.status(200).json(pessoa);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Pessoa!`});
    }
  }

  static async deletarPessoa(req, res) {
    const {id} = req.params;

    try {
      await Pessoas.destroy({
        where: {
          id: Number(id)
        }
      })

      return res.status(200).send('Pessoa excluida com sucesso!');

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Pessoa!`});
    }
  }

  static async restaurarPessoa(req, res) {
    const {id} = req.params;

    try {
      await Pessoas.restore({
        where: {
          id: Number(id)
        }
      })

      return res.status(200)
        .json({message: `id ${id} foi restaurado em Pessoas!`})

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao restaurar Pessoa!`});
    }
  }
}

export default PessoaController;