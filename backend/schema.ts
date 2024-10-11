import {pgTable, timestamp} from "drizzle-orm/pg-core";
import {text} from "drizzle-orm/pg-core/columns/text";

export const users = pgTable("user", {
    address: text("address")
        .primaryKey(),
    nickname: text("nickname"),
    avatar: text("avatar"),
    profile: text("profile"),
    index: text("index"),
    xAccount: text("x_account"),
})

export const artworks = pgTable("artwork", {
    id: text("id")
        .primaryKey(),
    authorAddress: text("author_address"),
    title: text("title"),
    description: text("description"),
    url: text("url"),
    createdAt: timestamp("created_at").defaultNow(),
})


export const tag_artworks = pgTable("tag_artwork", {
    artworkId: text("artwork_id"),
    tag: text("tag"),
})