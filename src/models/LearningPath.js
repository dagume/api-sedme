import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Goal from './Goal';

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

LearningPath.hasMany(Goal, { foreingKey: 'learningpathid', sourceKey: 'id'});
Goal.belongsTo(LearningPath, {foreingKey: 'learningpathid', sourceKey: 'id'})
export default LearningPath; 