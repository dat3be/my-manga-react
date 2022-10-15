import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import axios from "axios";

function App() {
  const [mangaList, setMangaList] = useState([]);
  const [category, setCategory] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [search, setSearch] = useState([]);

  const optionsCategory = {
    method: "GET",
    url: "https://manganami.herokuapp.com/category",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  };

  const getCategory = () => {
    axios
      .request(optionsCategory)
      .then(function (res) {
        setCategory(res.data);
        console.log(res.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const optionsManga = {
    method: "GET",
    url: "https://manganami.herokuapp.com/list?page=1",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  };

  const getTopManga = () => {
    axios
      .request(optionsManga)
      .then(function (res) {
        setTopManga(res.data.data);
        // console.log(res.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  useEffect(() => {
    document.title = 'My Manga Reader - by Dat Ngo 2022'
    getCategory();
    getTopManga();
    console.log("category Loading...")
    console.log("topManga Loading...");
    // console.log(topManga);
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <div className="sidebar">
          <Sidebar categories={category} />
        </div>
        <MainContent topManga={topManga} />
      </div>
    </div>
  );
}

export default App;
