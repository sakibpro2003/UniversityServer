import app from "./app.js";

import mongoose from "mongoose";
import config from "./app/config/index.js";

async function main() {
  try {
    // Connect to MongoDB before accepting HTTP traffic.
    await mongoose.connect(config.database_url!);
    app.listen(config.port, () => {
      console.log(`University app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
