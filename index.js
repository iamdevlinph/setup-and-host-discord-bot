const { Client, Intents } = require("discord.js");

// server stuff
const express = require("express");
const app = express();
const port = 3001; // we can change this to any port

app.get("/", (req, res) => {
  console.log(Date.now() + " Ping Received");
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Our bot is running at http://localhost:${port}`)
);

// some inits
const prefix = "!bot";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Actual BOT Code
client.on("ready", () => {
  console.log("Bot is ready"); // indicates that bot is ready to receive commands
});

client.on("messageCreate", (message) => { // listens on every message created on the server
  const { content } = message;

  if (content.startsWith(prefix)) { // checks if message starts with prefix
    const commandParts = content.split(" "); // ["!bot", "ping"]
    const target = commandParts[1]; // "ping"

    switch (target) {
      case "ping":
        message.reply("pong");
        break;
    }
  }
});

const DISCORD_TOKEN = ''; // paste the token here
client.login(DISCORD_TOKEN);
