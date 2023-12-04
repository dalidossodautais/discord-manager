import { Client } from "discord.js";

export default {
  name: "mute",

  description: "Mute the manager",

  start(client: Client): void {
    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isChatInputCommand()) return;

      if (interaction.commandName === "mute") {
        await interaction.reply("Pong!");
      }
    });
  },
};
