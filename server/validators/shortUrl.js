exports.validateUrl = (req, res, next) => {
    var url = req.body.url;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if (!protocol_ok) {
        return res.status(400).json({ "error": "Invalid Url" });
    }
    next();
}