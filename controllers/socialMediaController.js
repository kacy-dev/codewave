const SocialMedia = require('../models/SocialMediaModel');

// Add a new social media link
const addSocialMedia = async (req, res) => {
    try {
        const { url, icon } = req.body;

        if (!url || !icon) {
            return res.status(400).json({ error: 'URL and icon are required' });
        }

        const newSocial = new SocialMedia({ url, icon });
        await newSocial.save();

        res.status(201).json({ message: 'Social media link added successfully', social: newSocial });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Edit an existing social media link
const editSocialMedia = async (req, res) => {
    try {
        const { url, icon, isActive } = req.body;
        const socialId = req.params.id;

        const existingSocial = await SocialMedia.findById(socialId);
        if (!existingSocial) {
            return res.status(404).json({ error: 'Social media link not found' });
        }

        existingSocial.url = url || existingSocial.url;
        existingSocial.icon = icon || existingSocial.icon;
        existingSocial.isActive = isActive ?? existingSocial.isActive;

        await existingSocial.save();

        res.status(200).json({ message: 'Social media link updated successfully', social: existingSocial });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all social media links
const getAllSocialMedia = async (req, res) => {
    try {
        const socialLinks = await SocialMedia.find();
        res.status(200).json({ socialLinks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching social media links' });
    }
};

// Delete a social media link
const deleteSocialMedia = async (req, res) => {
    try {
        const socialId = req.params.id;
        await SocialMedia.findByIdAndDelete(socialId);
        res.status(200).json({ message: 'Social media link deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting social media link' });
    }
};

module.exports = {
    addSocialMedia,
    editSocialMedia,
    getAllSocialMedia,
    deleteSocialMedia,
};
``