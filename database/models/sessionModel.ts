import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./userModel";

export const sessionsTable = pgTable('sessions', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => usersTable.id),
  expiresAt: timestamp('expires_at').notNull()
})
