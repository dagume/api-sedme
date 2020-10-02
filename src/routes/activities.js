const { Router } = require('express');
const router = Router();

import { createActivity, getActivities, getOneActivity, deleteActivity, updateActivity} from '../controllers/activity.controller'
// /api/Activities
router.post('/', createActivity);
router.get('/', getActivities);
// /api/Activities/:ActivityID
router.get('/:id', getOneActivity);
router.delete('/:id', deleteActivity);
router.put('/:id', updateActivity);

module.exports = router;