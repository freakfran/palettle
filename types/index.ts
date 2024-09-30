

export interface Metadata {
    name: string,
    description: string,
    image: string,
    attribution: Record<string, unknown>
}

export interface PageData {
    list: unknown[],
    nextId?: number
}

export interface Artwork {
    id: string,
    authorAddress: string,
    artworkId: string,
    url: string,
    title: string,
    description: string,
    tag: string,
    createdAt: Date
}