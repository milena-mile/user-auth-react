interface MarvelInfo {
    id: number,
    name: string,
    thumbnail: {
        extension: string,
        path: string
    },
    description: string,
    comics: {
        items: [{name: string}]
    }
}

export type {MarvelInfo};