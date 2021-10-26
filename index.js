const { Collection, Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES] });

module.exports = client;

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
  });

// Logging System client //
console.log("==============================")

const logs = require('discord-logs');
logs(client, {
    debug: true
});

console.log("==============================")

// Mongo Connection //
const { mongooseConnectionString } = require("./config.json");
const mongoose = require("mongoose");
mongoose.connect(mongooseConnectionString, {}).then(console.log('Enlx > Connected to mongodb!'))



// Client //
client.config = require('./config.json');
client.prefix = client.config.prefix;

client.commands = new Collection();
client.aliases = new Collection();
client.slash_commands = new Collection();

require('./handler/slash_commands');
require('./handler')(client);

client.login(client.config.token);