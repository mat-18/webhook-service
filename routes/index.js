const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(`/chat`, function (req, res, next) {
  const { message, sender, character, radius, location } = req.query;

  const content = `${character} ${radius}s: ${message}`;

  axios.post(
    "https://discord.com/api/webhooks/1021164664438141038/znK1W46R_NXKUBtMZPBlGYg2ABKIiV8Rfi20hL90zGgBUusZujH0UBieEiOfx5sto8wE",
    {
      content: content,
    }
  );

  res.json({
    ManifestFileVersion: "000000000000",
    bIsFileData: false,
    AppID: "000000000000",
    AppNameString: "",
    BuildVersionString: "",
    LaunchExeString: "",
    LaunchCommand: "",
    PrereqIds: [],
    PrereqName: "",
    PrereqPath: "",
    PrereqArgs: "",
    FileManifestList: [],
    ChunkHashList: {},
    ChunkShaList: {},
    DataGroupList: {},
    ChunkFilesizeList: {},
    CustomFields: {},
  });
});

router.get(`/log`, function (req, res, next) {
  const {date, steamId, charName, actName, eventId, eventCategory, eventType, params } = req.query;

  const content = `${eventCategory} log: ${charName} triggered ${eventId}: ${params}`;

  axios.post(
    "https://discord.com/api/webhooks/1021164664438141038/znK1W46R_NXKUBtMZPBlGYg2ABKIiV8Rfi20hL90zGgBUusZujH0UBieEiOfx5sto8wE",
    {
      content: content,
    }
  );

  res.json({
    ManifestFileVersion: "000000000000",
    bIsFileData: false,
    AppID: "000000000000",
    AppNameString: "",
    BuildVersionString: "",
    LaunchExeString: "",
    LaunchCommand: "",
    PrereqIds: [],
    PrereqName: "",
    PrereqPath: "",
    PrereqArgs: "",
    FileManifestList: [],
    ChunkHashList: {},
    ChunkShaList: {},
    DataGroupList: {},
    ChunkFilesizeList: {},
    CustomFields: {},
  });
});

module.exports = router;
