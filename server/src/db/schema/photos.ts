import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

import { orphanages } from ".";

export const photos = pgTable('photos', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  photoUrl: text('photo_url').notNull(),
  orphanageId: text('orphanage_id').references(() => orphanages.id, {
    onDelete: 'cascade',
  }).notNull(),
})

export const photosRelations = relations(photos, ({ one }) => ({
  orphanage: one(orphanages, {
    fields: [photos.orphanageId],
    references: [orphanages.id]
  })
}))