import {pgTable} from "drizzle-orm/pg-core";
import {text} from "drizzle-orm/pg-core/columns/text";

export const users = pgTable("user", {
    address: text("address")
        .primaryKey(),
    nickname: text("nickname"),
    avatarId: text("avatar_id"),
    profileId: text("profile_id"),
    indexId: text("index_id"),
    xAccount: text("x_account"),
})

export const artworks = pgTable("artwork", {
    id: text("id")
        .primaryKey(),
    artworkId: text("artwork_id"),
    tag: text("tag"),
    authorAddress: text("author_address"),
    title: text("title"),
    description: text("description"),
    url: text("url"),
})