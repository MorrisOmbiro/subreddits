import axios from "axios";
import { RedditObject } from "../components/types";

type T = /*unresolved*/ any;

export async function getSubredditComments(
  subreddit: string | null
): Promise<T> {
  const res = await axios.get(
    `https://www.reddit.com/r/${subreddit}.json?&limit=30&raw_json=1`
  );
  const data = await res.data;
  const allData: RedditObject[] = [];

  // eslint-disable-next-line array-callback-return
  data.data.children.map((item: any) => {
    try {
      const imageLink: boolean = isImage(item.data.url);
      allData.push({
        id: item.data.id,
        author: item.data.author,
        title: item.data.title,
        url: imageLink ? item.data.url : null,
        selfText: item.data.selftext,
      });
    } catch (e) {
      console.warn("ERROR: ", e);
    }
  });

  return {
    props: {
      allData,
    },
  };
}

const isImage = (url: string) => {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
