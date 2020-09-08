import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Group = sequelize.define('groups', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    parentgroupid:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    }
    
}, {
    timestamps:false
});



export default Group;