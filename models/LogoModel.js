const mongoose = require('mongoose');

const LogoModel = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

const Logo = mongoose.model('Logo', LogoModel);

module.exports = Logo;
