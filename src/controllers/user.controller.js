import User from '../models/User';

export async function getUsers(req, res) {
    const users = await User.findAll();
    res.json({
        data: users
    })
}

export async function createUser(req,res) {
    const { roleid, parentuserid, groupid, name, lastname, email, phone, password, remembertoken, age, avatar } = req.body;
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
            avatar
        },
        {
            fields: ['roleid', 'parentuserid', 'groupid', 'name', 'lastname', 'email', 'phone', 'password', 'remembertoken', 'age', 'avatar']
        });
        if (newUser) {
            return res.json({
                message: 'User created successfully',
                data: newUser
            });        
        }
    } catch (error) {
        res.status(500).json({
            message: 'Somethin goes wrong'+ error,
            data:{}
        })
    }

}

export async function deleteUser(req, res) {
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
}


export async function updateUser(req, res) {
    const { id } = req.params;
    const { roleid, parentuserid , groupid, name, lastname, email, phone, password, remembertoken, age, avatar } = req.body;

    const data = await User.findAll({
        attributes: ['id','roleid', 'parentuserid', 'groupid', 'name', 'lastname', 'email', 'phone', 'password', 'remembertoken', 'age', 'avatar'],
        where: {
            id
        }
    });
    if ( data.length > 0 ) {
        data.forEach(async User =>{
            await User.update({
                roleid, 
                parentuserid , 
                groupid, 
                name, 
                lastname, 
                email, 
                phone, 
                password, 
                remembertoken,
                age, 
                avatar
            });
        } )
    }


    return res.json({
        message: 'User Updated Succefully',
        data: data
    })



}
