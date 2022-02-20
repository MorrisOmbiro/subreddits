import React from "react";
import { ThreadObject } from "../components/types";

export interface ContextValue {
  thread: ThreadObject[] | null;
  setThread: (thread: ThreadObject[] | null) => void;
}

export const Context = React.createContext<ContextValue>({
  thread: [{ id: "", author: "", body: "" }],
  setThread: () => null,
});

export function useCommentsThread(): {
  thread: ThreadObject[] | null;
  setThread: (thread: ThreadObject[] | null) => void;
} {
  const { thread, setThread } = React.useContext(Context);

  return { thread, setThread };
}

const ThreadProvider: React.FC = ({ children }) => {
  const [thread, setThread] = React.useState<ThreadObject[] | null>([
    {
      id: "",
      author: "",
      body: "",
    },
  ]);
  return (
    <Context.Provider value={{ thread, setThread }}>
      {children}
    </Context.Provider>
  );
};

export default ThreadProvider;
