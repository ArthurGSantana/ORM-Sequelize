import { Router } from 'express';
import TurmaController from './../controllers/TurmaController.js';

const router = Router();

router
  .get('/turmas', TurmaController.pegaTodasAsTurmas)
  // .get('/turmas/:id', TurmaController.pegaNivel)
  // .post('/turmas', TurmaController.criaNivel)
  // .put('/turmas/:id', TurmaController.atualizaNivel)
  // .delete('/turmas/:id', TurmaController.deletaNivel)

export default router;