import { relations } from "drizzle-orm";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { restaurantsTable } from "./restaurantModel";
import { hotelsTable } from "./hotelModel";
import { attractionsTable } from "./attractionModel";


export const citiesTable = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  description: text('description').notNull(),
  image: varchar('image_url')
})


export const cityRelations = relations(citiesTable, ({ many }) => ({
  restaurants: many(restaurantsTable),
  hotels: many(hotelsTable),
  attractions: many(attractionsTable),
}))
