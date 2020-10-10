import Activity from '../models/Activity';
import Goal from '../models/Goal';
import LearningPath from '../models/LearningPath';

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
    const { goalid, name, description, TIME, startdate, enddate, isready} = req.body;
    try {
        let newactivity = await Activity.create({
            goalid,
            name,
            description,
            TIME,
            startdate,
            enddate, 
            isready
        },
        {
            fields: ['goalid', 'name', 'description', 'TIME', 'startdate', 'enddate', 'isready']
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
        const { goalid, name, description, TIME, startdate, enddate, isready } = req.body;

        const activities = await Activity.findAll({
            attributes:['id', 'goalid', 'name', 'description', 'TIME', 'startdate', 'enddate', 'isready'],
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
                    enddate, 
                    isready
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

export async function getActivitiesByUser(req, res) {
    try {
        const { userid } = req.params;
        const learningpath = await LearningPath.findOne({
            where:{
                userid
            }
        })
        const learningpathid = learningpath.id;
        const goals = await Goal.findAll({
            attributes: ['id', 'topicid', 'learningpathid', 'name', 'description', 'estimatedhours', 'goallink', 'isready'],
            where:{
                learningpathid
            }
        });
        
        
        let goalsid = new Array();             
        for (let i = 0; i < goals.length; i++) {
            goalsid.push(goals[i].id);            
        }

        const activities = await Activity.findAll({
            attributes: ['id', 'goalid', 'name', 'description', 'TIME', 'startdate', 'enddate', 'isready'],
            where:{
                goalid: goalsid
            }
        });
    res.json({
        data:{activities}
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

export async function getActivitiesByUserAndDate(req, res) {
    try {
        const { userid, startdate} = req.body;
        const learningpath = await LearningPath.findOne({
            where:{
                userid
            }
        })
        const learningpathid = learningpath.id;
        const goals = await Goal.findAll({
            attributes: ['id', 'topicid', 'learningpathid', 'name', 'description', 'estimatedhours', 'goallink', 'isready'],
            where:{
                learningpathid
            }
        });
        
        
        let goalsid = new Array();             
        for (let i = 0; i < goals.length; i++) {
            goalsid.push(goals[i].id);            
        }

        const activities = await Activity.findAll({
            attributes: ['id', 'goalid', 'name', 'description', 'TIME', 'startdate', 'enddate', 'isready'],
            where:{
                goalid: goalsid,
                startdate: startdate
            }
        });
    res.json({
        data:{activities}
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