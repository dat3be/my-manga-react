import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import axios from "axios";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.jikan.moe/v4/anime",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  };

  const getTopAnime = () => {
    axios
      .request(options)
      .then(function (res) {
        setTopAnime(res.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  useEffect(() => {
    getTopAnime();

    console.log("topAnime Loading...");
    console.log(topAnime);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent topAnime={topAnime} />
      </div>
    </div>
  );
}

export default App;
