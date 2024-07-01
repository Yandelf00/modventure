import { relations } from "drizzle-orm";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { hotCommentsTable } from "./hot_comment";
import { attCommentsTable } from "./att_comment";
import { resCommentsTable } from "./res_comment";


export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username'),
  email: varchar('email', { length: 255 }),
  password: varchar('password', { length: 255 }),
})


export const userRelations = relations(usersTable, ({ many }) => ({
  hotComments: many(hotCommentsTable),
  attComments: many(attCommentsTable),
  resComments: many(resCommentsTable),
}))
