import LearningPath from '../models/LearningPath';

export async function getLearningPath(req, res) {
    try {
        const learning_paths = await LearningPath.findAll();
        res.json({
            data: learning_paths
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

//En este metodo hace falta crear validacion de que el usuario que envien si existe
export async function createLearningPath(req, res) {
    const { userid, name} = req.body;
    try {
        let newlearningpath = await LearningPath.create({
            userid,
            name
        },
        {
            fields: ['userid', 'name']
        });
        if (newlearningpath) {
            return res.json({
                data: newlearningpath,
                message: 'Learning Path created successfully'
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

export async function getOneLearninigPath(req, res) {
    try {
        const { id } = req.params;
        const learningpath = await LearningPath.findOne({
            where:{
                id
            }
        });
    res.json({
        data:learningpath
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

export async function deleteLearningPath(req, res){
    try {
        const { id } = req.params;
        const count = await LearningPath.destroy({
            where:{
                id
            }
        });
        res.json({
            data:{
                count:count
            },
            message: "Learning Path deleted succesfully"
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

export async function updateLearnigPath(req, res) {
    try {    
        const { id } = req.params;
        const { userid, name } = req.body;

        const learningpaths = await LearningPath.findAll({
            attributes:['id', 'userid', 'name'],
            where: {
                id
            } 
        });
        if (learningpaths.length > 0) {
            learningpaths.forEach(async learningpath => {
                await learningpath.update({
                    userid,
                    name
                });
            })
        }
        return res.json({
            data: learningpaths ,
            message: "Learning Path updated successfully"

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