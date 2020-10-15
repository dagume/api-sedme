const { Router } = require('express');
const router = Router();

import { getLearningPath, createLearningPath, getOneLearninigPath, deleteLearningPath, updateLearnigPath} from '../controllers/learning-path.controller'
// /api/learning-path
router.post('/', createLearningPath);
router.get('/', getLearningPath);
// /api/learning-path/:learning-pathID
router.get('/:id', getOneLearninigPath);
router.delete('/:id', deleteLearningPath);
router.put('/:id', updateLearnigPath);

module.exports = router;