import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const LearningPath = sequelize.define('learning_paths', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    userid:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    }
    
}, {
    timestamps:false
});

export default LearningPath; 