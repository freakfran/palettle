import {Metadata} from "@/types";
import {db} from "@/backend";
import {artworks, tag_artworks} from "@/backend/schema";

export async function getTokenByUri(uri: string) {
    const response = await fetch(uri!)
    const metadata: Metadata = await response.json();

    return metadata;
}

export async function insertArtwork(
                                    id: string,
                                    tags: string[]) {
    await db.insert(artworks).values({
        id: id,
        createdAt: new Date()
    });
    for (const tag of tags) {
        await db.insert(tag_artworks).values({
            artworkId: id,
            tag: tag
        })
    }
}