const express = require('express');
const router = express.Router();
const { addSocialMedia, editSocialMedia, getAllSocialMedia, deleteSocialMedia } = require('../controllers/socialMediaController');
const { protectAdmin } = require('../middlewares/authMiddleware');

// Routes for managing social media links
router.post('/social', protectAdmin, addSocialMedia); // Add a new link
router.put('/social/:id', protectAdmin, editSocialMedia); // Edit an existing link
router.get('/social', getAllSocialMedia); // Get all links
router.delete('/social/:id', protectAdmin, deleteSocialMedia); // Delete a link

module.exports = router;
