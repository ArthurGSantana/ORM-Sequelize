import { Op } from 'sequelize';

import database from './../models/index.js'

const Turmas = database.Turmas

class TurmaController {

  static async pegaTodasAsTurmas(req, res) {
    const {data_inicial, data_final} = req.query;
    const filter = {
      where: {
        data_inicio: {
          [Op.gte]: data_inicial ?? null,
          [Op.lte]: data_final ?? null
        }
      }
    }

    if(!data_inicial && !data_final)
      filter.where = null;

    try {
      const todosOsTurmas = await Turmas.findAll(filter)
      return res.status(200).json(todosOsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarTurma(req, res) {
    const {id} = req.params;

    try {
      const turma = await Turmas
        .findOne({
          where: {
            id: Number(id)
          }
        })

      return res.status(200).json(turma);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar Id da Turma!`})
    }
  }

  static async criarTurma(req, res) {
    const turma = req.body;

    try {
      const newTurma = await Niveis.create(turma);

      return res.status(200).json(newTurma);
      
    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao criar nova Turma!`})
    }
  }

  static async atualizarTurma(req, res) {
    const {id} = req.params;
    const newTurma = req.body;

    try {
      await Turmas.update(newTurma, {
        where: {
          id: Number(id)
        }
      })

      const turma = await Turmas
        .findOne({
          where: {
            id: Number(id)
          }
        })

      return res.status(200).json(turma);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Turma!`});
    }
  }

  static async deletarTurma(req, res) {
    const {id} = req.params;

    try {
      await Turmas.destroy({
        where: {
          id: Number(id)
        }
      })

      return res.status(200).send('Turma excluida com sucesso!');

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Turma!`});
    }
  }

  static async restaurarTurma(req, res) {
    const {id} = req.params;

    try {
      await Turmas.restore({
        where: {
          id: Number(id)
        }
      })

      return res.status(200)
        .json({message: `id ${id} foi restaurado em Turmas!`})

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao restaurar Turma!`});
    }
  }
}

export default TurmaController;