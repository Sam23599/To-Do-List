// to handle our add and delete task feature

const express = require('express');
const router = express.Router();
const operate = require('../controllers/operations'); 

router.post('/add-task', operate.addTask);
router.post('/delete-task', operate.deleteTask);

module.exports = router;
