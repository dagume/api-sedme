const { Router } = require('express');
const router = Router();

import { createActivity, getActivities, getOneActivity, deleteActivity, updateActivity, getActivitiesByUser, getActivitiesByUserAndDate} from '../controllers/activity.controller'
// /api/Activities
router.post('/', createActivity);
router.get('/', getActivities);
// /api/Activities/:ActivityID
router.get('/:id', getOneActivity);
router.delete('/:id', deleteActivity);
router.put('/:id', updateActivity);
// /api/activities/user/:userid
router.get('/user/:userid', getActivitiesByUser);
router.post('/user-date', getActivitiesByUserAndDate);

module.exports = router;
