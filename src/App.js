import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import ToggleDarkMode from "./components/ToggleDarkMode";

function App() {
  const [mangaList, setMangaList] = useState([]);
  const [topManga, setTopManga] = useState([]);

  const option = {
    method: "GET",
    url: "https://manganami.herokuapp.com/list?page=1",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  };

  const getTopManga = () => {
    axios
      .request(option)
      .then(function (res) {
        setTopManga(res.data.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    document.title = "My Manga Reader - by Dat Ngo 2022";
    getTopManga();
    console.log("category Loading...");
    console.log("topManga Loading...");
    console.log(topManga);
  }, []);
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      <div class="bg-white dark:bg-gray-800">
        <div className="content-wrap">
          <div class="grid place-items-center h-screen">
            <ToggleDarkMode />
            <Header />

            <MainContent topManga={topManga} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
