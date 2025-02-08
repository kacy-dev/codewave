const express = require('express');
const router = express.Router();
const { addResume, editResume, getResumes } = require('../controllers/resumeController');
const { protectAdmin } = require('../middlewares/authMiddleware');

router.post('/resume', protectAdmin, addResume); // Add a new resume entry
router.put('/resume/:id', protectAdmin, editResume); // Update an existing resume entry
router.get('/resume', getResumes); // Get all resume entries

module.exports = router;
