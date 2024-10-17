import {Metadata} from "@/types";
import {db} from "@/backend";
import {artworks, tag_artworks, user_artworks} from "@/backend/schema";
import {desc} from "drizzle-orm";
import {uuidv4} from "@walletconnect/utils";

export async function getTokenByUri(uri: string) {
    const response = await fetch(uri!)
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
        authorAddress:authorAddress,
        title:title,
        description:description,
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
    for(const tag of tags) {
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

export async function fetchArtworksByTag(limit: number, offset: number, tag?: string) {
    if (!tag) {
        const res = await db.query.artworks.findMany({
            orderBy: [desc(artworks.createdAt)],
            limit: limit,
            offset: offset
        })
    }
}