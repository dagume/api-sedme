const { Router } = require('express');
const router = Router();

import { createGoal, getGoals, getOneGoal, deleteGoal, updateGoal} from '../controllers/goal.controller'
// /api/goals
router.post('/', createGoal);
router.get('/', getGoals);
// /api/goals/:goalsID
router.get('/:id', getOneGoal);
router.delete('/:id', deleteGoal);
router.put('/:id', updateGoal);

module.exports = router;