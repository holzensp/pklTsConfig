import { type Config, loadFromPath } from "./generated/config.pkl.ts";

const config: Config = await loadFromPath("config.pkl");
console.log(config)