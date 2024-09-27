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