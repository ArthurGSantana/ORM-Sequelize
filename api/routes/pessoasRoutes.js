import { Router } from 'express';
import PessoaController from './../controllers/PessoaController.js';

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegarPessoa)
  .post('/pessoas', PessoaController.criarPessoa)
  .put('/pessoas/:id', PessoaController.atualizarPessoa)
  .delete('/pessoas/:id', PessoaController.deletarPessoa)

  .get('/pessoas/:idEstudante/matriculas/:idMatricula', PessoaController.pegarMatricula)
  .post('/pessoas/:idEstudante/matriculas', PessoaController.criarMatricula)
  .put('/pessoas/:idEstudante/matriculas/:idMatricula', PessoaController.atualizarMatricula)
  .delete('/pessoas/:idEstudante/matriculas/:idMatricula', PessoaController.deletarMatricula)

export default router;