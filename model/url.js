const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Date, default: Date.now } }], // ✅ Corrected
}, { timestamps: true });

const UrlModel = mongoose.model("URL", urlSchema); // ✅ Capitalized model name
module.exports = UrlModel;
