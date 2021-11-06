import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

export default connect;
