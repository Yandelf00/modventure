import * as schema from './schema';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import env from 'env-var';

const dbUrl = env.get('SATmDB_URL').required().asString();

const client = new Client({
  connectionString: dbUrl,
})

client.connect()

const db = drizzle(client, {
  schema: schema
})

export default db;
