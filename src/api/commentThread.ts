import axios from "axios";
import { RedditObject, ThreadObject } from "../components/types";

type T = /*unresolved*/ any;

export async function getCommentThread(
  subreddit: string | null,
  { id, title }: Partial<RedditObject>
): Promise<T> {
  const joinedTitle = title?.substring(0, 45).replace(/ /g, "_");

  const res = await axios.get(
    `https://www.reddit.com/r/${subreddit}/comments/${id}/${joinedTitle}.json`
  );
  const data = await res.data;
  const allData: ThreadObject[] = [];

  // eslint-disable-next-line array-callback-return
  data[1]?.data.children.map((item: any) => {
    try {
      allData.push({
        id: item.data.id,
        author: item.data.author,
        body: item.data.body,
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
