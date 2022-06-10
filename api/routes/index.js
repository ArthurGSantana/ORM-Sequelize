import express from 'express';

import pessoas from './pessoasRoutes.js';
import niveis from './niveisRoutes.js';
import turmas from './turmasRoutes.js';

const routes = (app) => {
  app.get('/', (req, res) => res.send('Get'));

  app.use(
    express.json(),
    pessoas,
    niveis,
    turmas
  );
}

export default routes;

