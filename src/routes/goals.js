const { Router } = require('express');
const router = Router();

import { createGoal, getGoals, getOneGoal, deleteGoal, updateGoal, getGoalsByLearningPath, getGoalsByUser} from '../controllers/goal.controller'
// /api/goals
router.post('/', createGoal);
router.get('/', getGoals);
// /api/goals/:goalsID
router.get('/:id', getOneGoal);
router.delete('/:id', deleteGoal);
router.put('/:id', updateGoal);
// /api/goals/learning-path/:learningpathid
router.get('/learning-path/:learningpathid', getGoalsByLearningPath);
// /api/goals/user/:userid
router.get('/user/:userid', getGoalsByUser);

module.exports = router;