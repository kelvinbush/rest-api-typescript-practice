import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    logger.info("db connected");
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
}

export default connect;
