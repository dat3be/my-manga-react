import React from "react";
import { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

function Home() {
  const [topManga, setTopManga] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(true);

  async function useLoadMore(page) {
    const response = await fetch(
      `https://nettruyen-api-production.up.railway.app/list?page=${page}`
    );
    const data = await response.json();
    let newData = [...topManga, ...data.data];
    setTopManga(newData);
    console.log(newData);
    setHasLoadMore(data.pagination.currentPage < data.pagination.totalPage);
  }
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>

      <div className="bg-white dark:bg-gray-800 text-white dark:text-black">
        <Header />
            <div className="content-wrap">
              <div className="grid place-items-center w-full h-full">
                <MainContent
                  topManga={topManga}
                  useLoadMore={useLoadMore}
                  hasLoadMore={hasLoadMore}
                />
              </div>
            </div>
          </div>
    </div>
  );
}

export default Home;
