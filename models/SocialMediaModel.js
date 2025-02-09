const mongoose = require('mongoose');

const SocialMediaModel = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
            match: [/^https?:\/\/[a-zA-Z0-9.-]+(?:\/[a-zA-Z0-9&%=~_.-]*)*/, 'Invalid URL'],
        },
        icon: {
            type: String,
            required: true, // Example: 'bx bx-whatsapp'
        },
        isActive: {
            type: Boolean,
            default: true, // Allows toggling active/inactive status
        },
    },
    { timestamps: true }
);

const SocialMedia = mongoose.model('SocialMedia', SocialMediaModel);
module.exports = SocialMedia;
