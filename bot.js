// discordJS imports
const { Client, GatewayIntentBits, Events, Collection } = require('discord.js');
// nodeJS imports
const fs = require("node:fs");
const path = require("node:path");
// other imports
require('dotenv').config();


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//retrieving commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	console.log(filePath);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.MY_KEY);
