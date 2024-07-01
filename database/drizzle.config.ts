import { defineConfig } from "drizzle-kit"
import env from 'env-var';

const dbUrl = env.get('SATmDB_URL').required().asString();



export default defineConfig({
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: './dbMigration/migrations',
  dbCredentials: {
    url: dbUrl!
  }
})
