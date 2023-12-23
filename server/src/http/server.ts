import { Elysia } from 'elysia'

import { createOrphanage } from './routes/create-orphanage'

const app = new Elysia().get("/", () => "Hello Elysia").use(createOrphanage)

app.listen(3333)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
