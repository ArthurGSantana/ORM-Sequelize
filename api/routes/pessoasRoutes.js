import { Router } from 'express';

import PessoaController from './../controllers/PessoaController.js';
import MatriculaController from './../controllers/MatriculaController.js';

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
  .get('/pessoas/todas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegarPessoa)
  .post('/pessoas', PessoaController.criarPessoa)
  .post('/pessoas/:id/restaurar', PessoaController.restaurarPessoa)
  .put('/pessoas/:id', PessoaController.atualizarPessoa)
  .delete('/pessoas/:id', PessoaController.deletarPessoa)

  .get('/pessoas/:idEstudante/matriculas/:idMatricula', MatriculaController.pegarMatricula)
  .post('/pessoas/:idEstudante/matriculas', MatriculaController.criarMatricula)
  .post('/pessoas/:id/matriculas/restaurar', MatriculaController.restaurarMatricula)
  .put('/pessoas/:idEstudante/matriculas/:idMatricula', MatriculaController.atualizarMatricula)
  .delete('/pessoas/:idEstudante/matriculas/:idMatricula', MatriculaController.deletarMatricula)

export default router;