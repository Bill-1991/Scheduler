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
		let query = 'SELECT * FROM users;'
		//let data = []
		let result = []
	
		/*if (msg.content === 'first')
		{
			function getData(){
				return new Promise(resolve=>{
					database.db.all(query,[],(err,rows)=>{
						if(err){
							return console.error(err.message);
						}
						rows.forEach((row)=>{
							data.push([row.name, row.day]);
						});
			
						resolve(data);
					});
				});
			}

			async function waitForData() {
				result = await getData()
				let log = ''
				for (let i = 0; i < result.length; i++)
				{
					log += `|${result[i][0]}| |${result[i][1]}|\n`
				}
				msg.reply(log)
			} 

			waitForData()
		}*/
		if (msg.content === 'second')
		{
			let name = 'third'
			let result  = functions.showNameTable(query, name, database)
			console.log(result)
		}
		//"CREATE TABLE users(name TEXT NOT NULL, day TEXT NOT NULL);";
        //database.db.run(sql);
	    //"INSERT INTO users VALUES ('first', 'false'),('second', 'true'),('third', 'true');";
        //database.db.run(sql);
        //let sql = "DROP TABLE users;";
        //database.db.run(sql);
	}
};
