import express, { json } from 'express';
import morgan from 'morgan';

//swagger
const swaggerUi = require('swagger-ui-express');

//impoeting routes
import groupRoutes from './routes/groups';
import userRoutes from './routes/users';
import learningPathRoutes from './routes/learningPath';
import goalRoutes from './routes/goals';
import activitiesRoutes from './routes/activities';
import topicRoutes from './routes/topics';
import errorRoutes from './routes/404';
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
//goal
app.use('/api/goals', goalRoutes);
//activities
app.use('/api/activities', activitiesRoutes);
//roles
app.use('/api/roles', rolRoutes);
//Topics
app.use('/api/topics', topicRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/', errorRoutes);


export default app;