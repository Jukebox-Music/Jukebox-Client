interface SearchResultThumbnail {
    url: string;
    width: number;
    height: number;
}

interface SearchResult {
    link: string;
    title: string;
    thumbnails: {
        default: SearchResultThumbnail,
        medium: SearchResultThumbnail,
        high: SearchResultThumbnail,
    };
    description: string;
}
