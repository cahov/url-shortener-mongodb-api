const express = require("express");
const isValidUrl = require("../utils/validUrl.js");
const urlModel = require("../models/urlSchema.js");
const shortid = require("shortid");
const { PORT, NODE_ENV } = require("../config.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API url shortener");
});

router.post("/short", async (req, res) => {
  if (isValidUrl(req.body.url)) {
    let baseUrl = `${req.protocol}://${req.hostname}`;
    const urlId = shortid.generate();
    if (NODE_ENV === "development") {
      baseUrl += `:${PORT}`;
    }
    const shortenedUrl = `${baseUrl}/r/${urlId}`;
    const url = urlModel({
      urlOrigin: req.body.url,
      urlShort: urlId,
    });

    try {
      await url.save();
      res.status(201).json({ short_url: shortenedUrl });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  } else {
    res.status(400).json({ error: "URL invalida" });
  }
});

router.get("/r/:link", async (req, res) => {
  const link = req.params.link;

  try {
    const url = await urlModel.findOne({ urlShort: link });

    if (url) {
      res.status(302).redirect(url.urlOrigin);
    } else {
      res.status(404).send("URL no encontrada");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
