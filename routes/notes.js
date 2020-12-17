const express = require("express");
const { check, validationResult } = require("express-validator");
const Text = require("../models/Text");
const router = express.Router();
const uuid = require("uuid");

router.post(
  "/url",
  [check("note", "A note should be present").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status("400").json({ errors: errors.array() });
    // }
    try {
      const { note } = req.body;
      let textBody;
      textBody = await Text.findOne({ note });
      if (textBody) return res.json(textBody.url);

      const id = uuid.v4();
      const url = `http://secretmessage/${id}`;

      textBody = new Text({
        note,
        url,
      });

      await textBody.save();
      res.json(textBody.url);
    } catch (err) {
      console.error(err.message);
    }
  }
);

router.post(
  "/",
  [check("url", "Url should be present").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status("400").json({ errors: errors.array() });
    }
    try {
      const { url } = req.body;
      let textBody;
      textBody = await Text.findOne({ url: url });
      if (!textBody) return res.status(400).json({ msg: "No such url exists" });

      return res.json(textBody.note);
    } catch (err) {
      console.error(err.message);
    }
  }
);

module.exports = router;
