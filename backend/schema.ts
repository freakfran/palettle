import {pgTable} from "drizzle-orm/pg-core";
import {text} from "drizzle-orm/pg-core/columns/text";

export const users = pgTable("user", {
    address: text("address")
        .primaryKey(),
    nickname: text("nickname"),
    avatar: text("avatar"),
    profileImg: text("profile_img"),
    indexImg: text("index_img"),
    xAccount: text("x_account"),
})