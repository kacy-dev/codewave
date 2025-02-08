const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddleware'); // For handling image uploads
const { addLogo, editLogo, getLogos } = require('../controllers/logoController');
const { protectAdmin } = require('../middlewares/authMiddleware');

router.post('/logo', upload.single('imageFile'), protectAdmin, addLogo); // Add a new logo
router.put('/logo/:id', upload.single('imageFile'), protectAdmin, editLogo); // Update an existing logo
router.get('/logo', getLogos); // Get all logos

module.exports = router;
