import {Metadata} from "@/types";

export async function getTokenByUri(uri: string) {
    const response = await fetch(uri!)
    const metadata: Metadata = await response.json();

    return metadata;
}