const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { createShortUrl, getShortUrls, clickUrl } = require("./controllers/shortUrl");
const { validateUrl } = require("./validators/shortUrl");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  db
mongoose
    .connect("mongodb://localhost/urlShortener", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => res.send("Short Url Generator"));

app.post("/shorturl/create", validateUrl, createShortUrl);
app.get("/shorturl/get", getShortUrls);
app.get("/shorturl/clickUrl/:shortUrl", clickUrl);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
