const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        companyName: {
            type: String,
            required: true,
            unique: false,
        },
        jobPosition: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
    }, 
    {timestamps: true}
);

module.exports = mongoose.model("Card", CardSchema);