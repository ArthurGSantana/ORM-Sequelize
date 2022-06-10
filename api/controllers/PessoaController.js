import database from '../models/index.js';

const Pessoas = database.Pessoas;
const Matriculas = database.Matriculas;

class PessoaController {

  static async pegaTodasAsPessoas(req, res) {
    try {
      const pessoas = await Pessoas.findAll();
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
      const newPessoa = await Pessoas
        .create(pessoa)

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

  static async pegarMatricula(req, res) {
    const {idEstudante, idMatricula} = req.params;

    try {
      const matricula = await Matriculas
        .findOne({
          where: {
            id: Number(idMatricula),
            estudante_id: Number(idEstudante)
          }
        })

      return res.status(200).json(matricula);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar Id da Pessoa!`})
    }
  }

  static async criarMatricula(req, res) {
    const {idEstudante} = req.params;
    const matricula = {
      ...req.body,
      estudante_id: Number(idEstudante)
    };

    try {
      const newMatricula = await Matriculas
        .create(matricula)

      return res.status(201).json(newMatricula);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao criar nova Pessoa!`})
    }
  }

  static async atualizarMatricula(req, res) {
    const {idEstudante, idMatricula} = req.params;
    const newMatricula = req.body;

    try {
      await Matriculas.update(newMatricula, {
        where: {
          id: Number(idMatricula),
          estudante_id: Number(idEstudante)
        }
      })

      const matricula = await Matriculas
        .findOne({
          where: {
            id: Number(idMatricula),
            estudante_id: Number(idEstudante)
          }
        })

      return res.status(200).json(matricula);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Pessoa!`});
    }
  }

  static async deletarMatricula(req, res) {
    const {idEstudante, idMatricula} = req.params;

    try {
      await Matriculas.destroy({
        where: {
          id: Number(idMatricula),
          estudante_id: Number(idEstudante)
        }
      })

      return res.status(200).send('Matricula excluida com sucesso!');

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Matricula!`});
    }
  }
}

export default PessoaController;