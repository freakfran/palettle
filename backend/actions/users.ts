import {db} from "@/backend";
import {eq} from "drizzle-orm";
import {users} from "@/backend/schema";


/**
 * 查询用户，如果不存在则先插入
 * @param address
 */
export async function getUserByAddress(address: string) {
    let existingUser = await db.query.users.findFirst(
        {
            where: eq(users.address, address)
        }
    );

    if (!existingUser) {
        await db.insert(users).values({
            address,
            nickname: address,
            avatarId: "1",
            profileId: "2",
            indexId: "3",
        });

        existingUser = await db.query.users.findFirst(
            {
                where: eq(users.address, address)
            }
        );
    }

    return existingUser;
}