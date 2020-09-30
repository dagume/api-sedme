import Goal from '../models/Goal';

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
    const { topicid, learningpathid, name, description, estimatedhours, goallink, isready} = req.body;
    try {
        let newgoal = await Goal.create({
            topicid,
            learningpathid,
            name,
            description,
            estimatedhours,
            goallink,
            isready
        },
        {
            fields: ['topicid', 'learningpathid', 'name', 'description', 'estimatedhours', 'goallink', 'isready']
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

//export async function getOneLearninigPath(req, res) {
//    try {
//        const { id } = req.params;
//        const learningpath = await LearningPath.findOne({
//            where:{
//                id
//            }
//        });
//    res.json({
//        data:learningpath
//    });
//    } catch (error) {
//        res.status(500).json({
//            error:{
//                code: "ERROR",
//                http_code:500,
//                message: 'Somethin goes wrong'+ error
//            }
//        });
//    }
//    
//}
//
//export async function deleteLearningPath(req, res){
//    try {
//        const { id } = req.params;
//        const count = await LearningPath.destroy({
//            where:{
//                id
//            }
//        });
//        res.json({
//            data:{
//                count:count
//            },
//            message: "Group deleted succesfully"
//        });
//    } catch (error) {
//        res.status(500).json({
//            error:{
//                code: "ERROR",
//                http_code:500,
//                message: 'Somethin goes wrong'+ error
//            }
//        });
//    }
//}
//
//export async function updateLearnigPath(req, res) {
//    try {    
//        const { id } = req.params;
//        const { userid, name } = req.body;
//
//        const learningpaths = await LearningPath.findAll({
//            attributes:['id', 'userid', 'name'],
//            where: {
//                id
//            } 
//        });
//        if (learningpaths.length > 0) {
//            learningpaths.forEach(async learningpath => {
//                await learningpath.update({
//                    userid,
//                    name
//                });
//            })
//        }
//        return res.json({
//            data: learningpaths ,
//            message: "Learning Path updated successfully"
//
//        })
//    } catch (error) {
//        res.status(500).json({
//            error:{
//                code: "ERROR",
//                http_code:500,
//                message: 'Somethin goes wrong'+ error
//            }
//        });
//    }
//}