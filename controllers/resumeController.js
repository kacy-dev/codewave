const Resume = require('../models/ResumeModel'); // Updated to use ResumeModel

// Add a new resume entry
const addResume = async (req, res) => {
    try { 
        const { cvUrl } = req.body; // Extract cvUrl from the request body

        if (!cvUrl) {
            return res.status(400).json({ error: 'CV URL is required' });
        }

        const newResume = new Resume({ cvUrl });

        await newResume.save();

        res.status(200).json({ message: "New resume has been added successfully", resume: newResume });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

// Edit an existing resume entry
const editResume = async (req, res) => {
    try {
        const { cvUrl } = req.body;
        const resumeId = req.params.id; // ID of the resume entry to be updated

        const existingResume = await Resume.findById(resumeId);

        if (!existingResume) {
            return res.status(404).json({ message: 'Resume entry not found' });
        }

        if (cvUrl) {
            existingResume.cvUrl = cvUrl; // Update cvUrl if provided
        }

        await existingResume.save();
        return res.status(200).json({ message: 'Resume updated successfully', resume: existingResume });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error while updating the resume' });
    }
};

// Get all resume entries
const getResumes = async (req, res) => {
    try {
        const resumes = await Resume.find(); // Retrieve all resume entries
        return res.status(200).json({ resumes });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error fetching resumes' });
    }
};

module.exports = {
    addResume,
    editResume,
    getResumes,
};
