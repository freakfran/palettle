import {Metadata} from "@/types";
import {db} from "@/backend";
import {artworks, tag_artworks, user_artworks} from "@/backend/schema";
import {uuidv4} from "@walletconnect/utils";
import {desc} from "drizzle-orm/sql/expressions/select";
import {and, countDistinct, eq, or} from "drizzle-orm";
import {inArray, like, notInArray} from "drizzle-orm/sql/expressions/conditions";

export async function getTokenByUri(uri: string) {
    const response = await fetch(uri);
    const metadata: Metadata = await response.json();

    return metadata;
}

export async function insertArtwork(
    id: string,
    authorAddress: string,
    title: string,
    description: string,
    tags: string[]) {
    await db.insert(artworks).values({
        id: id,
        authorAddress: authorAddress,
        title: title,
        description: description,
        createdAt: new Date()
    });
    for (const tag of tags) {
        await db.insert(tag_artworks).values({
            artworkId: id,
            tag: tag
        })
    }
}


export async function insertUserTag(userAddress: string, tags: string[]) {
    for (const tag of tags) {
        await db.insert(user_artworks).values({
            id: uuidv4(),
            userAddress: userAddress,
            tag: tag
        })
    }
}

export async function fetchAllTags() {
    const tag_artworks = await db.query.tag_artworks.findMany();
    const tags = new Set<string>();
    if (tag_artworks) {
        for (const tag_artwork of tag_artworks) {
            if (tag_artwork.tag) {
                tags.add(tag_artwork.tag);
            }
        }
    }
    return Array.from(tags);
}

export async function fetchRecommendArtworks(address?: string) {
    let res;
    if (!address) {
        res = await db.query.artworks.findMany({
            orderBy: [desc(artworks.createdAt)],
            limit: 10,
            offset: 0
        })
    } else {
        const tags = (await db.query.user_artworks.findMany({
            where: eq(user_artworks.userAddress, address),
        })).map(tag => tag.tag!)


        const tokenIds = (await db.query.tag_artworks.findMany({
            where: inArray(tag_artworks.tag, tags)
        })).map(item => item.artworkId!)


        res = await db.query.artworks.findMany({
            where: inArray(artworks.id, tokenIds),
            orderBy: [desc(artworks.createdAt)],
            limit: 10,
            offset: 0
        })

        if (res.length < 10) {
            const notInTag = await db.query.artworks.findMany({
                where: notInArray(artworks.id, tokenIds),
                orderBy: [desc(artworks.createdAt)],
                limit: 10 - res.length,
                offset: 0
            })
            res = res.concat(notInTag)
        }

    }

    return res
}


export interface SearchResult {
    offset: number,
    limit: number,
    total: number,
    list: string[],
}

export async function fetchArtworksBySearch(
    limit: number,
    offset: number,
    search?: string,
    tag?: string) {
    let res;
    let total;
    if (!search && !tag) {
        total = await db.select({value: countDistinct(artworks.id)}).from(artworks)
        if (total[0].value > 0) {
            res = await db.selectDistinct({id: artworks.id, createdAt: artworks.createdAt}).from(artworks)
                .orderBy(desc(artworks.createdAt))
                .limit(limit)
                .offset(offset)
        }
    } else if (search && !tag) {
        total = await db.select({value: countDistinct(artworks.id)}).from(artworks)
            .leftJoin(tag_artworks, eq(tag_artworks.artworkId, artworks.id))
            .where(
                or(
                    like(artworks.title, `%${search}%`),
                    like(tag_artworks.tag, `%${search}%`),
                    eq(artworks.authorAddress, search),
                )
            )

        if (total[0].value > 0) {
            res = await db.selectDistinct({id: artworks.id, createdAt: artworks.createdAt}).from(artworks)
                .leftJoin(tag_artworks, eq(tag_artworks.artworkId, artworks.id))
                .where(
                    or(
                        like(artworks.title, `%${search}%`),
                        like(tag_artworks.tag, `%${search}%`),
                        eq(artworks.authorAddress, search),
                    )
                )
                .orderBy(desc(artworks.createdAt))
                .limit(limit)
                .offset(offset)
        }

    } else if (!search && tag) {
        total = await db.select({value: countDistinct(artworks.id)}).from(artworks)
            .leftJoin(tag_artworks, eq(tag_artworks.artworkId, artworks.id))
            .where(eq(tag_artworks.tag, tag))
        if (total[0].value > 0) {
            res = await db.selectDistinct({id: artworks.id, createdAt: artworks.createdAt}).from(artworks)
                .leftJoin(tag_artworks, eq(tag_artworks.artworkId, artworks.id))
                .where(eq(tag_artworks.tag, tag))
                .orderBy(desc(artworks.createdAt))
                .limit(limit)
                .offset(offset)
        }

    } else if (search && tag) {
        const tempIds = (
            await db
                .selectDistinct({id: tag_artworks.artworkId})
                .from(tag_artworks)
                .where(eq(tag_artworks.tag, tag))
        ).map(item => item.id!)

        total = await db.select({value: countDistinct(artworks.id)}).from(artworks)
            .leftJoin(tag_artworks, eq(tag_artworks.artworkId, artworks.id))
            .where(
                and(
                    or(
                        like(artworks.title, `%${search}%`),
                        like(tag_artworks.tag, `%${search}%`),
                    ),
                    inArray(artworks.id, tempIds),
                )
            )

        if (total[0].value > 0) {
            res = await db.selectDistinct({id: artworks.id, createdAt: artworks.createdAt}).from(artworks)
                .leftJoin(tag_artworks, eq(tag_artworks.artworkId, artworks.id))
                .where(
                    and(
                        or(
                            like(artworks.title, `%${search}%`),
                            like(tag_artworks.tag, `%${search}%`),
                        ),
                        inArray(artworks.id, tempIds),
                    )
                )
                .orderBy(desc(artworks.createdAt))
                .limit(limit)
                .offset(offset)
        }
    }

    return {
        offset: offset,
        limit: limit,
        total: total ? total[0].value : 0,
        list: res ? res.map(item => item.id) : [],
    }
}