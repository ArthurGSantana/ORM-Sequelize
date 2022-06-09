import { Router } from 'express';
import PessoaController from './../controllers/PessoaController.js';

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegarPessoa)
  .post('/pessoas', PessoaController.criarPessoa)
  .put('/pessoas/:id', PessoaController.atualizarPessoa)
  .delete('/pessoas/:id', PessoaController.deletarPessoa)

export default router;