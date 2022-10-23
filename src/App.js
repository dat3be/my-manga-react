import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
let page = 1;
  const [topManga, setTopManga] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getTopManga = async () => {
    const response = await fetch(
      `https://manganami.herokuapp.com/list?page=${nextPage}`
    );
    const data = await response.json();
    setTopManga(data.data);
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

      <div class="bg-white dark:bg-gray-800 text-white">
        <div className="content-wrap">
          <div class="grid place-items-center h-screen">
            <Header />
            <Button onClick={() => setNextPage(nextPage + 1)}>Hello trang {nextPage} </Button>
            <MainContent topManga={topManga} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
