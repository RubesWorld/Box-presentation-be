const fs = require("fs");
const jwt = require("jsonwebtoken");
const express = require("express");
const axios = require("axios");
const qs = require("qs");
const router = express.Router();

router.get("/", (req, res) => {
  axios({
    method: "POST",
    url: "https://api.box.com/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      client_id: "kzd2wtczdmn178kdgsqfvgvmqve006qr",
      client_secret: "B93pv59N1d0kJnhxvJNUNUZSvkCSZ6xW",
      grant_type: "client_credentials",
      box_subject_type: "user",
      box_subject_id: "16385209802",
    }),
  })
    .then((res) => {
      console.log("Auth res", res.data);
    })
    .catch((err) => {
      console.log("Auth err", err);
    });
});

// const config = JSON.parse(fs.readFileSync("config.json"));

// let key = {
//   key: config.boxAppSettings.appAuth.privateKey,
//   passphrase: config.boxAppSettings.appAuth.passphrase,
// };

// const crypto = require("crypto");

// const authenticationUrl = "https://api.box.com/oauth2/token";

// let claims = {
//   iss: config.boxAppSettings.clientID,
//   sub: config.enterpriseID,
//   box_sub_type: "enterprise",
//   aud: authenticationUrl,
//   jti: crypto.randomBytes(64).toString("hex"),
//   exp: Math.floor(Date.now() / 1000) + 45,
// };

// let keyId = config.boxAppSettings.appAuth.publicKeyId;

// let headers = {
//   algorithm: "RS512",
//   keyid: keyId,
// };

// let assertion = jwt.sign(claims, key, headers);

module.exports = router;
