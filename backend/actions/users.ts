import {db} from "@/backend";
import {and, eq} from "drizzle-orm";
import {users} from "@/backend/schema";
import * as env from "@/utils/env"
import {ne} from "drizzle-orm/sql/expressions/conditions";


/**
 * 查询用户，如果不存在则先插入
 * @param address
 */
export async function getOrInsertUserByAddress(address: string) {
    let existingUser = await db.query.users.findFirst(
        {
            where: eq(users.address, address)
        }
    );

    if (!existingUser) {
        await db.insert(users).values({
            address,
            nickname: address,
            avatar: env.DEFAULT_AVATAR,
            profile: env.DEFAULT_PROFILE,
            index: env.DEFAULT_INDEX,
        });

        existingUser = await db.query.users.findFirst(
            {
                where: eq(users.address, address)
            }
        );
    }

    return existingUser;
}

export async function getUserByAddress(address: string) {
    return db.query.users.findFirst(
        {
            where: eq(users.address, address)
        }
    );
}


export async function updateUserByAddress(address: string, nickname?: string, avatar?: string, description?: string) {
    if(nickname){
        const res = await db.query.users.findFirst(
            {
                where: and(eq(users.nickname, nickname), ne(users.address, address))
            }
        );
        if(res){
            throw new Error("Nickname already exists");
        }
    }

    await db.update(users).set({
        nickname: nickname,
        avatar: avatar,
        description: description,
    }).where(eq(users.address, address));
}