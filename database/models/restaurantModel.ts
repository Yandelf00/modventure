import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { citiesTable } from "./cityModel";
import { relations } from "drizzle-orm";


export const restaurantsTable = pgTable('restaurants', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  description: text('description').notNull(),
  image: varchar('image_url'),
  address: varchar('address').notNull(),
  contact: varchar('contact').notNull(),
  rating: integer('rating').notNull(),
  cityId: integer('city_id').notNull().references(() => citiesTable.id, { onDelete: "cascade" })
})


export const restaurantRelations = relations(restaurantsTable, ({ one }) => ({
  city: one(citiesTable, {
    fields: [restaurantsTable.cityId],
    references: [citiesTable.id]
  })
}))
