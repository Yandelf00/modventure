import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { citiesTable } from "./cityModel";
import { relations } from "drizzle-orm";


export const hotelsTable = pgTable('hotels', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  description: text('description').notNull(),
  image: varchar('image_url'),
  address: varchar('address').notNull(),
  contact: varchar('contact').notNull(),
  rating: integer('rating').notNull(),
  cityId: integer('city_id').notNull().references(() => citiesTable.id, { onDelete: "cascade" })
})


export const hotelRelations = relations(hotelsTable, ({ one }) => ({
  city: one(citiesTable, {
    fields: [hotelsTable.cityId],
    references: [citiesTable.id]
  })
}))
