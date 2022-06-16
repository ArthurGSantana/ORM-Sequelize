import { Router } from 'express';

import PessoaController from './../controllers/PessoaController.js';
import MatriculaController from './../controllers/MatriculaController.js';

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaTodasAsPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegarPessoa)
  .post('/pessoas', PessoaController.criarPessoa)
  .post('/pessoas/:id/restaurar', PessoaController.restaurarPessoa)
  .put('/pessoas/:id', PessoaController.atualizarPessoa)
  .delete('/pessoas/:id', PessoaController.deletarPessoa)

  .get('/pessoas/:idEstudante/matriculas/:idMatricula', MatriculaController.pegarMatricula)
  .get('/pessoas/:idEstudante/matriculas', MatriculaController.pegarMatriculasDeEstudante)
  .get('/pessoas/matriculas/:idTurma/confirmado', MatriculaController.pegarMatriculasPorTurma)
  .get('/pessoas/matriculas/lotacao', MatriculaController.pegarTurmasLotadas)
  .post('/pessoas/:idEstudante/matriculas', MatriculaController.criarMatricula)
  .post('/pessoas/:id/matriculas/restaurar', MatriculaController.restaurarMatricula)
  .post('/pessoas/:idEstudante/cancela', MatriculaController.cancelarMatriculas)
  .put('/pessoas/:idEstudante/matriculas/:idMatricula', MatriculaController.atualizarMatricula)
  .delete('/pessoas/:idEstudante/matriculas/:idMatricula', MatriculaController.deletarMatricula)

export default router;