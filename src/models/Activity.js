import Sequelize from 'sequelize';
import { sequelize } from '../database/database';



const Activity = sequelize.define('activities', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    goalid:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    },
    description:{
        type: Sequelize.TEXT
    },
    TIME:{
        type: Sequelize.INTEGER
    },
    startdate:{
        type: Sequelize.DATE
    },
    enddate:{
        type: Sequelize.DATE
    }
    
}, {
    timestamps:false
});

export default Activity;