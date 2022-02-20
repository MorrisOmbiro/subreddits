import React from "react";

export interface ContextValue {
  subreddit: string | null;
  setSubreddit: (subreddit: string | null) => void;
}

export const Context = React.createContext<ContextValue>({
  subreddit: "",
  setSubreddit: () => null,
});

export function useSubreddit(): {
  subreddit: string | null;
  setSubreddit: (subreddit: string | null) => void;
} {
  const { subreddit, setSubreddit } = React.useContext(Context);

  return { subreddit, setSubreddit };
}

const CommentsProvider: React.FC = ({ children }) => {
  const [subreddit, setSubreddit] = React.useState<string | null>(null);

  return (
    <Context.Provider value={{ subreddit, setSubreddit }}>
      {children}
    </Context.Provider>
  );
};

export default CommentsProvider;
