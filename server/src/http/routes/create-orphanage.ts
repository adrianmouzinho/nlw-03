import Elysia, { t } from 'elysia'

import { db } from '@/db/connection'
import { orphanages } from '@/db/schema'

export const createOrphanage = new Elysia().post(
  '/orphanages', 
  async ({ body, set }) => {
    const { name, description, phone, instructions, visitingHours, isOpenOnWeekends } = body

    await db.insert(orphanages).values({
      name,
      description,
      phone,
      instructions,
      visitingHours,
      isOpenOnWeekends
    })

    set.status = 201
  },
  {
    body: t.Object({
      name: t.String(),
      description: t.String(),
      phone: t.String(),
      instructions: t.String(),
      visitingHours: t.String(),
      isOpenOnWeekends: t.Boolean(),
    })
  }
)