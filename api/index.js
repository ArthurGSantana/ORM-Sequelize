import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

routes(app)

app.listen(port, () => console.log(`escutando na porta ${port}`));

export default app;