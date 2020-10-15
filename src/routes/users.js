const { Router } = require('express');
const router = Router();
const passport = require("passport");
require("../utils/strategies/jwt");

import {createUser, getUsers , deleteUser,updateUser, getOneUser} from '../controllers/user.controller'
// /api/users
router.post('/', createUser);
router.get('/', getUsers);

//api/roles/:id
router.delete('/:id', passport.authenticate("jwt", { session: false }), deleteUser);
router.put('/:id', updateUser);
router.get('/:id', getOneUser);
module.exports = router;