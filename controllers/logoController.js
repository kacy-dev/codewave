const Logo = require('../models/LogoModel');
const cloudinary = require('cloudinary').v2;

// Add a new logo
const addLogo = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: 'image',
            folder: 'logos',
        });

        const newLogo = new Logo({ imageUrl: result.secure_url });
        await newLogo.save();

        res.status(200).json({ message: "New logo added successfully", logo: newLogo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Edit an existing logo
const editLogo = async (req, res) => {
    try {
        const logoId = req.params.id;
        const existingLogo = await Logo.findById(logoId);

        if (!existingLogo) {
            return res.status(404).json({ message: 'Logo not found' });
        }

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                resource_type: 'image',
                folder: 'logos',
            });

            existingLogo.imageUrl = result.secure_url;
        }

        await existingLogo.save();
        res.status(200).json({ message: 'Logo updated successfully', logo: existingLogo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while updating the logo' });
    }
};

// Get all logos
const getLogos = async (req, res) => {
    try {
        const logos = await Logo.find();
        res.status(200).json({ logos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching logos' });
    }
};

module.exports = {
    addLogo,
    editLogo,
    getLogos,
};
