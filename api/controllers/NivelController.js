import database from './../models/index.js'

const Niveis = database.Niveis

class NivelController {

  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await Niveis.findAll()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarNivel(req, res) {
    const {id} = req.params;

    try {
      const nivel = await Niveis
        .findOne({
          where: {
            id: Number(id)
          }
        })

      return res.status(200).json(nivel);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao buscar Id do Nivel!`})
    }
  }

  static async criarNivel(req, res) {
    const nivel = req.body;

    try {
      const newNivel = await Niveis.create(nivel);

      return res.status(200).json(newNivel);
      
    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao criar novo nivel!`})
    }
  }

  static async atualizarNivel(req, res) {
    const {id} = req.params;
    const newNivel = req.body;

    try {
      await Niveis.update(newNivel, {
        where: {
          id: Number(id)
        }
      })

      const nivel = await Niveis
        .findOne({
          where: {
            id: Number(id)
          }
        })

      return res.status(200).json(nivel);

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Nivel!`});
    }
  }

  static async deletarNivel(req, res) {
    const {id} = req.params;

    try {
      await Niveis.destroy({
        where: {
          id: Number(id)
        }
      })

      return res.status(200).send('Nivel excluido com sucesso!');

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao atualizar Nivel!`});
    }
  }

  static async restaurarNivel(req, res) {
    const {id} = req.params;

    try {
      await Niveis.restore({
        where: {
          id: Number(id)
        }
      })

      return res.status(200)
        .json({message: `id ${id} foi restaurado em Niveis!`})

    } catch(error) {
      return res.status(500)
        .json({message: `${error.message} - Erro ao restaurar Nivel!`});
    }
  }

}

export default NivelController;