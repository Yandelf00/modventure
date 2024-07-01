import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";


export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 256 }),
})
