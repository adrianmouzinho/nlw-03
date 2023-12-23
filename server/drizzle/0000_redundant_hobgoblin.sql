CREATE TABLE IF NOT EXISTS "orphanages" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"phone" text NOT NULL,
	"instructions" text NOT NULL,
	"visiting_hours" text NOT NULL,
	"is_open_on_weekends" boolean NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "orphanages_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "photos" (
	"id" text PRIMARY KEY NOT NULL,
	"photo_url" text NOT NULL,
	"orphanage_id" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "photos" ADD CONSTRAINT "photos_orphanage_id_orphanages_id_fk" FOREIGN KEY ("orphanage_id") REFERENCES "orphanages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
