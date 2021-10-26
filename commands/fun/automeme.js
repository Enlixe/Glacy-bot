const Schema = require('../../models/automeme')

module.exports = {
    name: 'set-automeme',
    userPerms: 'ADMINISTRATOR',
    /*
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        const channell = message.mentions.channels.first()
        if (!channell) return message.reply('Please tell me a channel!');

        Schema.findOne({
            guild: message.guild.id
        }, async (err, data) => {
            if (data) data.delete()
            new Schema({
                guild: message.guild.id,
                channel: channell.id,
            }).save();
            message.channel.send('Done!')
        })
    }
}