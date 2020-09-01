import Group from '../models/Group';

export async function createGroup(req,res) {
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
                message: 'Group created successfully',
                data: newgroup
            });        
        }
    } catch (error) {
        res.status(500).json({
            message: 'Somethin goes wrong'+ error,
            data:{}
        })
    }

}