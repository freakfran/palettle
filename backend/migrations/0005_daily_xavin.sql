CREATE TABLE IF NOT EXISTS "tag_artwork" (
	"artwork_id" text,
	"tag" text
);
--> statement-breakpoint
ALTER TABLE "artwork" DROP COLUMN IF EXISTS "artwork_id";--> statement-breakpoint
ALTER TABLE "artwork" DROP COLUMN IF EXISTS "tag";