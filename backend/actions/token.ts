import {Metadata} from "@/types";
import {db} from "@/backend";
import {artworks} from "@/backend/schema";
import {uuidv4} from "@walletconnect/utils";

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