const mongoose = require('mongoose');

const ResumeModel = new mongoose.Schema(
    {
        cvUrl: {
            type: String,
            required: true,
            // match: [/^https?:\/\/[a-zA-Z0-9.-]+(?:\/[a-zA-Z0-9&%=~_.-]*)*/, 'Invalid URL'],
        },
    },
    { timestamps: true } // Automatically includes `createdAt` and `updatedAt`
);

const Resume = mongoose.model('Resume', ResumeModel);

module.exports = Resume;
