import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Rol = sequelize.define('roles', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    description:{
        type: Sequelize.TEXT
    },
    slug:{
        type: Sequelize.TEXT
    },
    special:{
        type: Sequelize.TEXT
    }    
}, {
    timestamps:false
});



export default Rol;