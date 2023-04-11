import Craftbot from "./index.js";

const bot = new Craftbot
await bot.connect("ffa1", "craftbot", "426.12.43.2", "alice")
await bot.sendChat("Craftbot connected!!")