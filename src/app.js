import express, { json } from 'express';
import morgan from 'morgan';

//impoeting routes
import groupRoutes from './routes/groups';

//initalization
const app = express();

//middlewares
app.use(morgan('dev')); //Va mostrando las peticiones por consola
app.use(json()); //Poder ntender los archivos JSON

//routes
app.use('/api/groups', groupRoutes);

export default app;