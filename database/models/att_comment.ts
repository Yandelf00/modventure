import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { attractionsTable } from "./attractionModel";
import { relations } from "drizzle-orm";
import { usersTable } from "./userModel";


export const attCommentsTable = pgTable('attraction_comments', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  attractionId: integer('attraction_id').notNull().references(() => attractionsTable.id, { onDelete: "cascade" }),
  comment: text('comment').notNull(),
  rating: integer('rating').notNull(),
})


export const attCommentRelations = relations(attCommentsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [attCommentsTable.userId],
    references: [usersTable.id]
  }),

  attraction: one(attractionsTable, {
    fields: [attCommentsTable.attractionId],
    references: [attractionsTable.id]
  })
}))
