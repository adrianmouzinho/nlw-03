import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

import { photos } from "./photos";

export const orphanages = pgTable('orphanages', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  name: text('name').unique().notNull(),
  description: text('description').notNull(),
  phone: text('phone').notNull(),
  instructions: text('instructions').notNull(),
  visitingHours: text('visiting_hours').notNull(),
  isOpenOnWeekends: boolean('is_open_on_weekends').notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const orphanagesRelations = relations(orphanages, ({ many }) => ({
  photos: many(photos)
}))