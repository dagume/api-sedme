import Group from '../models/Group';

export async function getGroups(req, res) {
    try {
        const groups = await Group.findAll();
        res.json({
            data: groups
        });
    } catch (error) {
        res.status(500).json({
            error:{
                code: "ERROR",
                http_code:500,
                message: 'Somethin goes wrong'+ error
            }
        })
    }
}

export async function createGroup(req, res) {
    const { parentgroupid, name} = req.body;
    try {
        let newgroup = await Group.create({
            parentgroupid,
            name
        },
        {
            fields: ['parentgroupid', 'name']
        });
        if (newgroup) {
            return res.json({
                data: newgroup,
                message: 'Group created successfully'
            });        
        }
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

export async function getOneGroup(req, res) {
    try {
        const { id } = req.params;
        const group = await Group.findOne({
            where:{
                id
            }
        });
    res.json({
        data:group
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

export async function deleteGroup(req, res){
    try {
        const { id } = req.params;
        const count = await Group.destroy({
            where:{
                id
            }
        });
        res.json({
            data:{
                count:count
            },
            message: "Group deleted succesfully"
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

export async function updateGroup(req, res) {
    try {    
        const { id } = req.params;
        const { parentgroupid, name } = req.body;

        const groups = await Group.findAll({
            attributes:['id', 'parentgroupid', 'name'],
            where: {
                id
            } 
        });
        if (groups.length > 0) {
            groups.forEach(async group => {
                await group.update({
                    parentgroupid,
                    name
                });
            })
        }
        return res.json({
            data: groups ,
            message: "Group updated successfully"

        })
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