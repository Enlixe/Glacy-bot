const client = require('../index');
const arrayOfStatus = [
    'In Development Phase',
    'Anime',
    'Bugs 🐛',
]

client.on('ready', () => {
    console.log(`Enlx > ${client.user.tag} is now online !`);

    setInterval(() => {
        activity = arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]
        client.user.setPresence({ activities: [{ name: activity, type: "WATCHING" }], status: "idle" })
    }, 60000)
});