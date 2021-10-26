const fetch = require('node-fetch');
const client = require('../index');
const { findOne } = require('../models/chatbot');
const Schema = require('../models/chatbot');

client.on('messageCreate', async (message) => {
    if (message.author.bot) return // i put in the command by mistake lol
    await Schema.findOne({
        guild: message.guild.id
    }, async (err, data) => {
        if (!data) return;
        if (err) throw err;
        const channell = data.channel

        if (message.channel.id === channell) {
            fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&yr0n57JXpCy7aXlzFmMchuas`) // this is the api we are using
                .then(response => response.json())
                .then(data => {
                    message.reply(`> ${data.response}`)
                }) // now lets test it :D
        }
    })
})