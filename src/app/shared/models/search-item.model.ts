interface ThumbnailItem {
  url: string;
  width: number;
  height: number;
}

interface ItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: ThumbnailItem;
    medium: ThumbnailItem;
    high: ThumbnailItem;
    standard: ThumbnailItem;
    maxres: ThumbnailItem;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: string | { kind: string; videoId: string };
  snippet: ItemSnippet;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
