export type RedditObject = {
  id: string;
  author: string;
  title: string;
  url?: any;
  selfText?: any; // may not be included so...
};

export type ThreadObject = {
  id: string;
  author: string;
  body: string;
};
