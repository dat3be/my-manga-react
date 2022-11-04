import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Read() {
  const [mangaDetails, setMangaDetails] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [listChapter, setListChapter] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let urlChapter = useParams();
  async function getMangaDetails() {
    const data = await fetch(
      `https://manganami.herokuapp.com/chapter/${urlChapter.url}`
    );
    const response = await data.json();
    console.log(response);
    console.log('Hello')
    // setMangaDetails(response);
    // setListChapter(response.chapters);
    // setLoading(false);
  }

  useEffect(() => {
    getMangaDetails(urlChapter);
  }, []);

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white w-full h-full">
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="bg-primary-200 pb-10 order-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-40 rounded">
        <div className="min-h-screen mt-[-1px]">
          <div className="flex flex-col lg:flex-row">Hello World</div>
        </div>
      </div>
    </div>
  );
}

export default Read;
