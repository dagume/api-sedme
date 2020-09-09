const { Router } = require('express');
const router = Router();

import {createUser, getUsers , deleteUser,updateUser} from '../controllers/user.controller'
// /api/users
router.post('/', createUser);
router.get('/', getUsers);

//api/roles/:id
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
module.exports = router;