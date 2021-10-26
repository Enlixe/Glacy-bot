const db = require('../../models/warndb')

module.exports = {
    name: 'remove-all-warn',
    description: 'Remove all user warns',
    aliases: ['del-all-warns', 'del-all-warn', 'delallwarns', 'delallwarn', 'remove-all-warns','removeallwarns', 'removeallwarn'],
    usage: '/remove-all-warn <user>',
    userPerms: 'ADMINISTRATOR',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send('User not found.')
        db.findOne({
            guild: message.guild.id,
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (data) {
                await db.findOneAndDelete({
                    user: user.user.id,
                    guild: message.guild.id
                })
                message.channel.send(`Cleared all the warnings`)
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        }) // lets try it :D
    }
}