import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    roleid:{
        type: Sequelize.INTEGER
    },
    parentuserid:{
        type: Sequelize.INTEGER
    },
    groupid:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.INTEGER
    },
    lastname:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.TEXT
    },
    phone:{
        type: Sequelize.TEXT
    },
    password:{
        type: Sequelize.TEXT
    },
    remembertoken:{
        type: Sequelize.TEXT
    },
    age:{
        type: Sequelize.TEXT
    },
    avatar:{
        type: Sequelize.TEXT
    },
    createdat:{
        type: Sequelize.DATE
    }
    ,
    updatedat:{
        type: Sequelize.DATE
    }

    
}, {
    timestamps:false
});



export default User;