import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const LearningPath = sequelize.define('goals', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    topicid:{
        type: Sequelize.INTEGER
    },
    learningpathid:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    },
    description:{
        type: Sequelize.TEXT
    },
    estimatedhours:{
        type: Sequelize.DOUBLE
    },
    goallink:{
        type: Sequelize.TEXT
    },
    isready:{
        type: Sequelize.BOOLEAN
    }
    
}, {
    timestamps:false
});


export default LearningPath;