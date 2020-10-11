import Activity from '../models/Activity';
import Topic from '../models/Topic';

export async function getTopics(req, res) {
    try {
        const topics = await Topic.findAll();
        res.json({
            data: topics
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

export async function createTopic(req, res) {
    const { name} = req.body;
    try {
        let newtopic = await Topic.create({
            name,
        },
        {
            fields: ['name']
        });
        if (newtopic) {
            return res.json({
                data: newtopic,
                message: 'Topic created successfully'
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

export async function updateTopic(req, res) {
    try {    
        const { id } = req.params;
        const { name } = req.body;

        const topics = await Topic.findAll({
            attributes:['id','name'],
            where: {
                id
            } 
        });
        if (topics.length > 0) {
            topics.forEach(async topic => {
                await topic.update({
                    name,
                });
            })
        }
        return res.json({
            data: topics,
            message: "Topic updated successfully"

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
