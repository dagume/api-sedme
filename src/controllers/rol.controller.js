import Rol from '../models/Roles';

export async function getRoles(req, res) {
    try {
        const roles = await Rol.findAll();
        res.json({
            data: roles
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

export async function createRol(req, res) {
    const { name, description, slug, special } = req.body;
    try {
        let newRol = await Rol.create({
            name,
            description,
            slug,
            special
        },
            {
                fields: ['name', 'description', 'slug', 'special']
            });
        if (newRol) {
            return res.json({
                message: 'Role created successfully',
                data: newRol
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

export async function deleteRol(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Rol.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Rol deleted',
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


export async function updateRol(req, res) {
    try {
        const { id } = req.params;
        const { name, description, slug, special } = req.body;

        const data = await Rol.findAll({
            attributes: ['id', 'name', 'description', 'slug', 'special'],
            where: {
                id
            }
        });
        if (data.length > 0) {
            data.forEach(async Rol => {
                await Rol.update({
                    name,
                    description,
                    slug,
                    special
                });
            })
        }


        return res.json({
            message: 'Rol Updated Succefully',
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