const TopSitesFeed = require("./TopSitesFeed");
const PocketStoriesFeed = require("./PocketStoriesFeed");
const PocketTopicsFeed = require("./PocketTopicsFeed");
const HighlightsFeed = require("./HighlightsFeed");
const PlacesStatsFeed = require("./PlacesStatsFeed");
const SearchFeed = require("./SearchFeed");
const MetadataFeed = require("./MetadataFeed");
const LocalizationFeed = require("./LocalizationFeed");
const SystemTickFeed = require("./SystemTickFeed");

module.exports = [
  TopSitesFeed,
  HighlightsFeed,
  SearchFeed,
  PocketStoriesFeed,
  PocketTopicsFeed,
  PlacesStatsFeed,
  MetadataFeed,
  LocalizationFeed,
  SystemTickFeed
];
