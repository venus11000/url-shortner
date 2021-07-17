const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        // default: generateShortId
    },
    clicks: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);