import { Client } from "discord.js";
import getMemberId from "../tools/getMemberId";

const activity = (client: Client): void => {
  client.on("messageCreate", async (message) => {
    if (!message.member?.user) {
      return;
    }
    await getMemberId(message.member.user.id);
    // saveMessage(message);
  });
};

export default activity;
