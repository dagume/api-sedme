import Sequelize from 'sequelize';
import { sequelize } from '../database/database';



const Topic = sequelize.define('topics', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    }    
}, {
    timestamps:false
});

export default Topic;