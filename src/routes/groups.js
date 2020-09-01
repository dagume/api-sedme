const { Router } = require('express');
const router = Router();

import { createGroup } from '../controllers/group.controller'
// /api/groups
router.post('/', createGroup);

module.exports = router;