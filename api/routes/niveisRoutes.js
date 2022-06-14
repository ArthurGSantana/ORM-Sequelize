import { Router } from 'express';
import NivelController from './../controllers/NivelController.js';

const router = Router();

router
  .get('/niveis', NivelController.pegaTodosOsNiveis)
  .get('/niveis/:id', NivelController.pegarNivel)
  .post('/niveis', NivelController.criarNivel)
  .post('/niveis/:id/restaurar', NivelController.restaurarNivel)
  .put('/niveis/:id', NivelController.atualizarNivel)
  .delete('/niveis/:id', NivelController.deletarNivel)

export default router;