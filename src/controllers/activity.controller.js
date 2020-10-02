import Activity from '../models/Activity';

export async function getActivities(req, res) {
    try {
        const activities = await Activity.findAll();
        res.json({
            data: activities
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

export async function createActivity(req, res) {
    const { goalid, name, description, TIME, startdate, enddate} = req.body;
    try {
        let newactivity = await Activity.create({
            goalid,
            name,
            description,
            TIME,
            startdate,
            enddate
        },
        {
            fields: ['goalid', 'name', 'description', 'TIME', 'startdate', 'enddate']
        });
        if (newactivity) {
            return res.json({
                data: newactivity,
                message: 'Activity created successfully'
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

export async function getOneActivity(req, res) {
    try {
        const { id } = req.params;
        const activity = await Activity.findOne({
            where:{
                id
            }
        });
    res.json({
        data:activity
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

export async function deleteActivity(req, res){
    try {
        const { id } = req.params;
        const count = await Activity.destroy({
            where:{
                id
            }
        });
        res.json({
            data:{
                count:count
            },
            message: "Activity deleted succesfully"
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

export async function updateActivity(req, res) {
    try {    
        const { id } = req.params;
        const { goalid, name, description, TIME, startdate, enddate } = req.body;

        const activities = await Activity.findAll({
            attributes:['id', 'goalid', 'name', 'description', 'TIME', 'startdate', 'enddate'],
            where: {
                id
            } 
        });
        if (activities.length > 0) {
            activities.forEach(async activity => {
                await activity.update({
                    goalid,
                    name,
                    description,
                    TIME,
                    startdate,
                    enddate
                });
            })
        }
        return res.json({
            data: activities ,
            message: "Activity updated successfully"

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