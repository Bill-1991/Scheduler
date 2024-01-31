const database = require('./database.js');


function schedulerHelp(msg) {
    let log = msg.reply(`### __**HELP MODE**__\n\n**a) This operation asks help from the bot to see what ops it can operate.**
    __**scheduler 1 help:**__
    1: **scheduler** is calling out the bot.
    2: **1** is the **id** of the operation.
    3: **help** is calling the bot to help out the user.\n\n**b) This operation inserts or updates user's schedule of the day.**
    __**scheduler 2 insert/update name true/false:**__
    1: **scheduler** is calling out the bot.
    2: **2** is the **id** of the operation.
    3: **insert/update** inserts or updates the user's schedule.
        Type insert if you want to insert 1st time and update if you have already entered your schedule.
    4: **name** is the name the user wants to be inserted as in the database.
    5: **true/false** inserts or updates if the user is free or not. **true for free, false for not free.**\n\n**c) This operation shows everyones schedule of the day.**
    __**scheduler 3 select all:**__
    1: **scheduler** is calling out the bot.
    2: **3** is the **id** of the operation.
    3: **select** selects people that have inserted their schedule.
    4: all means show all people that have entries of their schedule.\n\n**d) This operation shows a specific person's schedule of the day.**
    __**scheduler 4 select name:**__
    1: **scheduler** is calling out the bot.
    2: **4** is the **id** of the operation.
    3: **select** selects people with entries of their schedule.
    4: **name** is the name that the user wants to see the schedule of.\n\n**e) This operation deletes entries of the user in the database.**
    __**scheduler 5 name delete:**__
    1: **scheduler** is calling out the bot.
    2: **5** is the **id** of the op.
    3: **name** is the name of the user.
    4: **delete** deletes entry of the user.
    __**Important**__: After this command the user will be prompted for confirmation.
    e.g Are you sure? Press **y** for yes and **n** for no.`)

    return log;
}

const storeInput = content => content.split(" ");

module.exports = { storeInput, schedulerHelp };

