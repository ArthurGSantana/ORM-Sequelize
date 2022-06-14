import { Router } from 'express';
import TurmaController from './../controllers/TurmaController.js';

const router = Router();

router
  .get('/turmas', TurmaController.pegaTodasAsTurmas)
  .get('/turmas/:id', TurmaController.pegarTurma)
  .post('/turmas', TurmaController.criarTurma)
  .post('/turmas/:id/restaurar', TurmaController.restaurarTurma)
  .put('/turmas/:id', TurmaController.atualizarTurma)
  .delete('/turmas/:id', TurmaController.deletarTurma)

export default router;