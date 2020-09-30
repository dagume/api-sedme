const { Router } = require('express');
const router = Router();

import { createGoal, getGoals} from '../controllers/goal.controller'
// /api/learning-path
router.post('/', createGoal);
router.get('/', getGoals);
// /api/learning-path/:learning-pathID
//router.get('/:id', getOneLearninigPath);
//router.delete('/:id', deleteLearningPath);
//router.put('/:id', updateLearnigPath);

module.exports = router;