const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config()
const database = require('./database.js');
const functions = require('./functions.js');
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
client.on('messageCreate', userMessage);

function readyBot() {
    console.log('Ready')
};

function userMessage(msg) {
	if (msg.channel.id === process.env.CHANNEL_KEY)
	{
		const input = functions.storeInput(msg.content);		
	}
};
