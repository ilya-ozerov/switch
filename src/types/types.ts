export type Client = {
    id: string;
    name: string;
    imageUrl: string;
    imageAlt: string;
}

export type Works = {
    photography: WorkItem[],
    design: WorkItem[],
    print: WorkItem[],
}

export type WorkItem = {
    id: string;
    name: string;
    author: string;
    imageUrl: string;
    imageAlt: string;
}

export type IsAllWorks = {
    photos: boolean;
    designs: boolean;
    prints: boolean;
}