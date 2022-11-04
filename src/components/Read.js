import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export function handleReadManga(e) {
  e.preventDefault();
  console.log("Chapter clicked! and Read");
}

function Read() {
  async function getChapter() {
    const response = await fetch(
      `https://manganami.herokuapp.com/chapter/${url.chapterId}`
    );
    const data = await response.json();
    console.log(data);
    console.log("Hello");
  }

  const [chapterList, setChapterList] = useState([]);

  let url = useParams();
  let location = useLocation();

  useEffect(() => {
    getChapter(url);
    console.log(location)
  }, []);

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white w-full h-full">
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="bg-primary-200 pb-10 order-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-40 rounded">
        <div className="min-h-screen mt-[-1px]">
          <div className="flex flex-col lg:flex-row">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
