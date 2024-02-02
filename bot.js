const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();
const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.GuildMembers,
	],
});

client.login(process.env.MY_KEY);
client.on('ready', readyBot);
function readyBot() {
    console.log('Ready')
};
