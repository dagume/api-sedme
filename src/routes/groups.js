const { Router } = require('express');
const router = Router();

import { createGroup, getGroups, getOneGroup, deleteGroup, updateGroup} from '../controllers/group.controller'
// /api/groups
router.post('/', createGroup);
router.get('/', getGroups);
// /api/groups/:groupID
router.get('/:id', getOneGroup);
router.delete('/:id', deleteGroup);
router.put('/:id', updateGroup);

module.exports = router;