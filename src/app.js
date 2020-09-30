import express, { json } from 'express';
import morgan from 'morgan';

//swagger
const swaggerUi = require('swagger-ui-express');

//impoeting routes
import groupRoutes from './routes/groups';
import userRoutes from './routes/users';
import learningPathRoutes from './routes/learningPath';
import rolRoutes from './routes/roles';
import authRoutes from './routes/auth';

//initalization
const app = express();

const swaggerDoc = require('../swagger.json');


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//middlewares
app.use(morgan('dev')); //Va mostrando las peticiones por consola
app.use(json()); //Poder ntender los archivos JSON

//auth
app.use('/api/auth', authRoutes);
//routes
app.use('/api/groups', groupRoutes);
//users
app.use('/api/users', userRoutes);
//learningPath
app.use('/api/learning-path', learningPathRoutes);
//roles
app.use('/api/roles', rolRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


export default app;