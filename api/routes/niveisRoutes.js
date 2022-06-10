import { Router } from 'express';
import NivelController from './../controllers/NivelController.js';

const router = Router();

router
  .get('/niveis', NivelController.pegaTodosOsNiveis)
  // .get('/niveis/:id', NivelController.pegaNivel)
  // .post('/niveis', NivelController.criaNivel)
  // .put('/niveis/:id', NivelController.atualizaNivel)
  // .delete('/niveis/:id', NivelController.deletaNivel)

export default router;