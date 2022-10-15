import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import axios from "axios";

function App() {
  const [mangaList, setMangaList] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [search, setSearch] = useState([]);

  const options = {
    method: "GET",
    url: "https://manganami.herokuapp.com/list",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  };

  const getTopManga = () => {
    axios
      .request(options)
      .then(function (res) {
        setTopManga(res.data.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  useEffect(() => {
    getTopManga();

    console.log("topManga Loading...");
    // console.log(topManga);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        {/* <Sidebar topManga={topManga} /> */}
        <MainContent topManga={topManga} />
      </div>
    </div>
  );
}

export default App;
