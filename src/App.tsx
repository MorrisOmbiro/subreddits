import React from "react";
import MainPage from "./components/MainPage";
import CommentsProvider from "./provider/CommentsProvider";
import ThreadProvider from "./provider/ThreadProvider";

const App = () => (
  <React.Fragment>
    <CommentsProvider>
      <ThreadProvider>
        <MainPage />
      </ThreadProvider>
    </CommentsProvider>
  </React.Fragment>
);

export default App;
