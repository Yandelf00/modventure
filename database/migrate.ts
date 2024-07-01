import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import env from 'env-var';

const dbUrl = env.get('MODVENTURE_URL').required().asString();

// this is the file responsible for creating the pool connections
const pool = new Pool({
  connectionString: dbUrl,
});

const db = drizzle(pool);

async function main() {
  console.log("migration started...");
  await migrate(db, {
    migrationsFolder: "drizzle",
  })
  console.log("migration ended...");
  process.exit(0);
}

main().catch((e) => {
  console.log('Error migrating: ', e);
  process.exit(0);
})
