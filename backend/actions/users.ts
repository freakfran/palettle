import {db} from "@/backend";
import {eq} from "drizzle-orm";
import {users} from "@/backend/schema";
import * as env from "@/utils/env"


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
            avatarId: env.DEFAULT_AVATAR_ID,
            profileId: env.DEFAULT_PROFILE_ID,
            indexId: env.DEFAULT_INDEX_ID,
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