import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [topManga, setTopManga] = useState([]);
  const [isLoadMore, setLoadMore] = useState(false);
  const [nextPage, setNextPage] = useState(0);

  async function useLoadMore(page) {
    const response = await fetch(
      `https://manganami.herokuapp.com/list?page=${page}`
    );
    const data = await response.json();
    let newData = [...topManga, ...data.data];
    setTopManga(newData);
    console.log(page);
  }

  const getTopManga = async () => {
    if (!isLoadMore) {
      setLoadMore(true);
      const response = await fetch(
        `https://manganami.herokuapp.com/list?page=${nextPage}`
      );
      const data = await response.json();
      let newData = [...topManga, ...data.data];
      setTopManga(newData);
      console.log("newDadata");
      setLoadMore(false);
    }
  };

  useEffect(() => {
    document.title = "My Manga Reader - by Dat Ngo 2022";
    getTopManga();
  }, []);
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
                <MainContent topManga={topManga} useLoadMore={useLoadMore} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
