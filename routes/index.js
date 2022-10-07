const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(`/chat`, (req, res, next) => {
  const input = { message, sender, character, radius, location } = req.query;
  const content = `**${input.sender}** acting as **${input.character}** ${input.radius}s: \`${input.message}\``;
  const key1 = 'https://discord.com/api/';
  const key2 = 'webhooks/1028017497380765716/';
  const key3 = 'ESX597kjHHa8Uxy_oJskGAu97BoLgcL73';
  const key4 = '__P4elP7_61lS5e7rd5kly-lsgDKI4OyruV';
  axios.post(
    `${key1}${key2}${key3}${key4}`,
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
  const key1 = 'https://discord.com/api/';
  const key2 = 'webhooks/1028016792834150400/';
  const key3 = 'TkmUcCajTqJwY8hhAUN7ojbTqHWD1';
  const key4 = 'tsmS8qdaeW67Dj3mgKn9eZeXycEr_5Gr7yGTGnG';
  axios.post(
    `${key1}${key2}${key3}${key4}`,
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