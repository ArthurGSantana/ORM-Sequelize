import database from '../models/index.js';

const Matriculas = database.Matriculas;

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
}

export default MatriculaController;