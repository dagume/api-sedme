import User from '../models/User';
const bcrypt = require("bcrypt");

export async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        res.json({
            data: users
        })
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        })
    }
}

export async function getOneUser(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where:{
                id
            }
        });
    res.json({
        data:user
    });
    } catch (error) {
        res.status(500).json({
            error:{
                code: "ERROR",
                http_code:500,
                message: 'Somethin goes wrong'+ error
            }
        });
    }
    
}

export async function createUser(req, res) {
    const { roleid, parentuserid, groupid, name, lastname, email, phone, remembertoken, age, avatar, biography } = req.body;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password,salt);
    try {
        let newUser = await User.create({
            roleid,
            parentuserid,
            groupid,
            name,
            lastname,
            email,
            phone,
            password,
            remembertoken,
            age,
            avatar,
            biography
        },
            {
                fields: ['roleid', 'parentuserid', 'groupid', 'name', 'lastname', 'email', 'phone', 'password', 'remembertoken', 'age', 'avatar', 'biography'] 
            });
        if (newUser) {
            return res.json({
                message: 'User created successfully',
                data: newUser
            });
        }
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        });
    }

}

export async function deleteUser(req, res) {
    try {
        
        const { id } = req.params;

        const deleteRowCount = await User.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'User deleted',
            count: deleteRowCount
        })
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        });
    }
}


export async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { roleid, parentuserid, groupid, name, lastname, email, phone, password, remembertoken, age, avatar, biography } = req.body;

        const data = await User.findAll({
            attributes: ['id', 'roleid', 'parentuserid', 'groupid', 'name', 'lastname', 'email', 'phone', 'password', 'remembertoken', 'age', 'avatar', 'biography'],
            where: {
                id
            }
        });
        if (data.length > 0) {
            data.forEach(async User => {
                await User.update({
                    roleid,
                    parentuserid,
                    groupid,
                    name,
                    lastname,
                    email,
                    phone,
                    password,
                    remembertoken,
                    age,
                    avatar, 
                    biography
                });
            })
        }


        return res.json({
            message: 'User Updated Succefully',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            error: {
                code: "ERROR",
                http_code: 500,
                message: 'Somethin goes wrong' + error
            }
        });
    }


}
