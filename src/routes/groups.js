const { Router } = require('express');
const router = Router();

import { createGroup, getGroups } from '../controllers/group.controller'
// /api/groups
router.post('/', createGroup);
router.get('/', getGroups);

module.exports = router;