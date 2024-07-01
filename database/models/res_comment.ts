import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { usersTable } from "./userModel";
import { restaurantsTable } from "./restaurantModel";
import { relations } from "drizzle-orm";


export const resCommentsTable = pgTable('restaurants_comments', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  restaurantId: integer('restaurant_id').notNull().references(() => restaurantsTable.id, { onDelete: "cascade" }),
  comment: text('comment').notNull(),
  rating: integer('rating').notNull(),
})


export const attCommentRelations = relations(resCommentsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [resCommentsTable.userId],
    references: [usersTable.id]
  }),

  restaurant: one(restaurantsTable, {
    fields: [resCommentsTable.restaurantId],
    references: [restaurantsTable.id]
  })
}))
