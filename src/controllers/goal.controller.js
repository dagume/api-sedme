import Goal from '../models/Goal';
import LearningPath from '../models/LearningPath';

export async function getGoals(req, res) {
    try {
        const goals = await Goal.findAll();
        res.json({
            data: goals
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

export async function createGoal(req, res) {
    const { topicid, learningpathid, name, description, estimatedhours, goallink, isready, weeknumber} = req.body;
    try {
        let newgoal = await Goal.create({
            topicid,
            learningpathid,
            name,
            description,
            estimatedhours,
            goallink,
            isready, 
            weeknumber
        },
        {
            fields: ['topicid', 'learningpathid', 'name', 'description', 'estimatedhours', 'goallink', 'isready', 'weeknumber']
        });
        if (newgoal) {
            return res.json({
                data: newgoal,
                message: 'Goal created successfully'
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

export async function getOneGoal(req, res) {
    try {
        const { id } = req.params;
        const goal = await Goal.findOne({
            where:{
                id
            }
        });
    res.json({
        data:goal
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

export async function deleteGoal(req, res){
    try {
        const { id } = req.params;
        const count = await Goal.destroy({
            where:{
                id
            }
        });
        res.json({
            data:{
                count:count
            },
            message: "Goal deleted succesfully"
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

export async function updateGoal(req, res) {
    try {    
        const { id } = req.params;
        const { topicid, learningpathid, name, description, estimatedhours, goallink, isready, weeknumber} = req.body;

        const goals = await Goal.findAll({
            attributes:['id', 'topicid', 'learningpathid', 'name', 'description', 'estimatedhours', 'goallink', 'isready', 'weeknumber'],
            where: {
                id
            } 
        });
        if (goals.length > 0) {
            goals.forEach(async goal => {
                await goal.update({
                    topicid, 
                    learningpathid, 
                    name, 
                    description, 
                    estimatedhours, 
                    goallink, 
                    isready, 
                    weeknumber
                });
            })
        }
        return res.json({
            data: goals ,
            message: "Goal updated successfully"

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

export async function getGoalsByLearningPath(req, res) {
    try {
        const { learningpathid } = req.params;
        const goals = await Goal.findAll({
            attributes: ['id', 'topicid', 'learningpathid', 'name', 'description', 'estimatedhours', 'goallink', 'isready', 'weeknumber'],
            where:{
                learningpathid
            }
        });
    res.json({
        data:goals
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

export async function getGoalsByUser(req, res) {
    try {
        const { userid } = req.params;
        const learningpath = await LearningPath.findOne({
            where:{
                userid
            }
        })
        const learningpathid = learningpath.id;
        const goals = await Goal.findAll({
            attributes: ['id', 'topicid', 'learningpathid', 'name', 'description', 'estimatedhours', 'goallink', 'isready', 'weeknumber'],
            where:{
                learningpathid
            }
        });
    res.json({
        data:{learningpath, goals}


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
