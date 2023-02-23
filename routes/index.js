const express = require("express");
const router = express.Router();
const axios = require("axios");

const keys = require('./key')

router.get(`/chat`, (req, res, next) => {
  const input = { message, sender, character, radius, location } = req.query;
  const content = `**${input.sender}** acting as **${input.character}** ${input.radius}s: \`${input.message}\``;
  axios.post(
    `${keys.chat}`,
    {
      content: content,
    }
  )  .then(res => {
  }).catch(error => {
  });

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
  const content = `\`${date}\`: **${charName}** as **${actName}** | ${eventCategory} | ${eventType} | \`${params}\``;

  axios.post(
    `${keys.rr}`,
    {
      content: content,
    }
  ).then(res => {
  }).catch(error => {
  });

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