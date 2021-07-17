const ShortUrl = require("../models/shortUrl")
const { generateShortId } = require("../utils/common")

exports.createShortUrl = (req, res) => {
    ShortUrl.create({
        url: req.body.url,
        shortUrl: generateShortId()
    })
        .then(shortUrl => res.json(shortUrl))
        .catch(error => res.status(400).json({ "message": "Unable to Create" }));
}

exports.getShortUrls = (req, res) => {
    ShortUrl.find({})
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.status(400).json({ "message": "Unable to fetch Urls" });
        })
}
