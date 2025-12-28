import dotenv from "dotenv";
import path from "path";

// Load environment variables from the project root .env file.
 dotenv.config({ path: path.join((process.cwd(), ".env")) });


// Centralize config values consumed by the app.
export default {
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
    bcrypt_salt_round:process.env.BCRYPT_SALT_ROUND,
}
