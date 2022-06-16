import Sequelize from 'sequelize';

import database from '../models/index.js';

const Matriculas = database.Matriculas;
const Pessoas = database.Pessoas;

class MatriculaController {

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

  static async restaurarMatricula(req, res) {
    const {id} = req.params;

    try {
      await Matriculas.restore({
        where: {
          id: Number(id)
        }
      })

      return res.status(200)
        .json({message: `id ${id} foi restaurado em Matriculas!`})

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao restaurar Matricula!`});
    }
  }

  static async pegarMatriculasDeEstudante(req, res) {
    const {idEstudante} = req.params;

    try {
      const pessoa = await Pessoas.findOne({
        where: {
          id: Number(idEstudante)
        }
      })

      const matriculas = await pessoa.getAulasMatriculadas();

      return res.status(200).json(matriculas);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar Matriculas do Estudante!`});
    }
  }

  static async pegarMatriculasPorTurma(req, res) {
    const {idTurma} = req.params;

    try {
      const matriculas = await Matriculas.findAndCountAll({
        where: {
          turma_id: Number(idTurma),
          status: 'confirmado'
        },
        limit: 10, //limita quantidade de resultados (count ainda retorna o total)
        order: [['estudante_id', 'DESC']] //ordena de acordo com a coluna passada e o tipo de ordenação
      })

      return res.status(200).json(matriculas);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar Matriculas por Turma!`});
    }
  }

  static async pegarTurmasLotadas(req, res) {
    const lotacaoTurma = 2;

    try {
      const turmasLotadas = await Matriculas.findAndCountAll({
        where: {
          status: 'confirmado'
        },
        attributes: ['turma_id'], //exibe apenas o atribtuo selecionado
        group: ['turma_id'], //faz o agrupamento pelo atributo selecionado
        having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`) //adiciona literais ao comando do sequelize
      })

      return res.status(200).json(turmasLotadas);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar Matriculas por Turma!`});
    }
  }
}

export default MatriculaController;