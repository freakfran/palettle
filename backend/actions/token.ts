import {Metadata, PageData} from "@/types";
import {db} from "@/backend";
import {artworks} from "@/backend/schema";
import {uuidv4} from "@walletconnect/utils";
import {eq} from "drizzle-orm";

export async function getTokenByUri(uri: string) {
    const response = await fetch(uri!)
    const metadata: Metadata = await response.json();

    return metadata;
}

export async function insertArtwork(url: string,
                                    title: string,
                                    author: string,
                                    description: string,
                                    tag: string) {
    await db.insert(artworks).values({
        id: uuidv4(),
        authorAddress: author,
        url: url,
        title: title,
        description: description,
        tag: tag
    });

}


export async function getArtworksByAuthor(authorAddress: string, pageSize: number, startIndex?: number) {
    const result = await db.query.artworks.findMany({
        where: eq(artworks.authorAddress, authorAddress),
        offset: startIndex ?? 0,
        limit: pageSize,
    });

    const nextId = result.length < pageSize ? undefined : (startIndex ?? 0) + result.length

    const response: PageData = {
        list: result,
        nextId: nextId
    }
    return response

}