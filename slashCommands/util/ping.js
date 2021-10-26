module.exports = {
    name: 'ping',
    description: 'Shows ping',
    run: async (client, interaction, options) => {
        await interaction.followUp(`🏓 \`${client.ws.ping}ms\``)
    }
} // lets test it