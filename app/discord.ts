import { env } from "process";
import { Client, GatewayIntentBits } from "discord.js";
import addExitHandler from "./tools/addExitHandler";
import commands from "./commands";
import processes from "./processes";
import { REST, Routes } from "discord.js";

const { CLIENT_ID, TOKEN } = env;

if (!CLIENT_ID || !TOKEN) {
  console.log("Please fill the credentials");
  process.exit();
}

const rest = new REST({ version: "10" }).setToken(TOKEN);
try {
  await rest.put(Routes.applicationCommands(CLIENT_ID), {
    body: commands.map(({ name, description }) => ({ name, description })),
  });
} catch (error) {
  console.error(error);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("ready", (client: Client<true>) => {
  console.log(`Logged in as ${client.user.tag}!`);
});

commands.forEach((command) => {
  command.start(client);
});
processes.forEach((process) => {
  process(client);
});

client.login(TOKEN);

addExitHandler(() => {
  client.destroy();
});

export default client;
