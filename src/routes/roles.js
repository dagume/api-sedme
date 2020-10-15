const { Router } = require('express');
const router = Router();

import { createRol, getRoles, deleteRol, updateRol} from '../controllers/rol.controller'
//api/roles
router.post('/', createRol);
router.get('/', getRoles);

//api/roles/:id
router.delete('/:id', deleteRol);
router.put('/:id', updateRol);

module.exports = router;