const express = require('express');
const router = express.Router();
const { getTasks, getTaskById, saveTask, updateTask, deleteTask } = require('../controllers/task');

router.get('/', getTasks);
router.post('/', saveTask);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;