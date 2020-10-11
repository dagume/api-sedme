const { Router } = require('express');
const router = Router();

import { createTopic, getTopics, updateTopic} from '../controllers/topic.controller'
// /api/Activities
router.post('/', createTopic);
router.get('/', getTopics);
// /api/Activities/:ActivityID
router.put('/:id', updateTopic);

module.exports = router;