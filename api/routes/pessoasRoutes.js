import { Router } from 'express';
import PessoaController from './../controllers/PessoaController.js';

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)

export default router;