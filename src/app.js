import express, { json } from 'express';
import morgan from 'morgan';

//swagger
const swaggerUi = require('swagger-ui-express');

//impoeting routes
import groupRoutes from './routes/groups';
import userRoutes from './routes/users';
import rolRoutes from './routes/roles';
import authRoutes from './routes/auth';

//initalization
const app = express();

const swaggerDoc = require('../swagger.json');

//middlewares
app.use(morgan('dev')); //Va mostrando las peticiones por consola
app.use(json()); //Poder ntender los archivos JSON
//routes
app.use('/api/groups', groupRoutes);
//users
app.use('/api/users', userRoutes);
//roles
app.use('/api/roles', rolRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//auth
app.use('/api/auth', authRoutes);
export default app;