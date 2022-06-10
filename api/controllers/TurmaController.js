import database from './../models/index.js'

const Turmas = database.Turmas

class TurmaController {

  static async pegaTodasAsTurmas(req, res) {
    try {
      const todosOsTurmas = await Turmas.findAll()
      return res.status(200).json(todosOsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

export default TurmaController;