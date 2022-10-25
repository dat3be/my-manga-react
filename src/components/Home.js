import React from "react";
import { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

function Home() {
  const [topManga, setTopManga] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(true);

  async function useLoadMore(page) {
    const response = await fetch(
      `https://manganami.herokuapp.com/list?page=${page}`
    );
    const data = await response.json();
    let newData = [...topManga, ...data.data];
    setTopManga(newData);
    setHasLoadMore(data.pagination.currentPage < data.pagination.totalPage);
  }
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>

      <div class="bg-white dark:bg-gray-800 text-white flex flex-col min-h-screen">
        <Header />
        <div class="flex-1">
          <div class="flex-1 flex flex-col items-center">
            <div className="content-wrap">
              <div class="grid place-items-center h-screen">
                <MainContent
                  topManga={topManga}
                  useLoadMore={useLoadMore}
                  hasLoadMore={hasLoadMore}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
