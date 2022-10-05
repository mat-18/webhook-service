const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(`/chat`, (req, res, next) => {
  const input = { message, sender, character, radius, location } = req.query;
  const content = `**${input.sender}** acting as **${input.character}** ${input.radius}s: \`${input.message}\``;




  
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

router.get(`/log`, (req, res, next) => {
  const {date, steamId, charName, actName, eventId, eventCategory, eventType, params } = req.query;

  const content = `${eventCategory} log: ${charName} triggered ${eventId}: ${params}`;

  axios.post(
    "https://discord.com/api/webhooks/1021632130515742811/yrAkRtaA9cqDqWZ5fk-P2ePwD2BgrBofWrF9rlNSJ0A17zE-Hr0wR_buN1cI4RauEAPx",
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