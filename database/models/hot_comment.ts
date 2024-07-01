import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { usersTable } from "./userModel";
import { hotelsTable } from "./hotelModel";
import { relations } from "drizzle-orm";


export const hotCommentsTable = pgTable('hotels_comments', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  hotelId: integer('hotel_id').notNull().references(() => hotelsTable.id, { onDelete: "cascade" }),
  comment: text('comment').notNull(),
  rating: integer('rating').notNull(),
})


export const attCommentRelations = relations(hotCommentsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [hotCommentsTable.userId],
    references: [usersTable.id]
  }),

  hotel: one(hotelsTable, {
    fields: [hotCommentsTable.hotelId],
    references: [hotelsTable.id]
  })
}))
