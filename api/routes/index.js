import express from 'express';

import pessoas from './pessoasRoutes.js';

const routes = (app) => {
  app.get('/', (req, res) => res.send('Get'));

  app.use(
    express.json(),
    pessoas
  );
}

export default routes;

