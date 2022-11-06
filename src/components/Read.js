import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

export function handleReadManga(e) {
  e.preventDefault();
  console.log("Chapter clicked! and Read");
}

function Read() {
  let url = useParams();
  const [chapter, setChapter] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function getChapter() {
    return new Promise(async (resolve, reject) => {
      await axios({
        authority: "https://nettruyen-api-production.up.railway.app",
        method: "GET",
        scheme: "https",
        url: `https://nettruyen-api-production.up.railway.app/chapter/${url.mangaName}/${url.chapNo}/${url.number}`,
      })
        .then((response) => {
          setChapter(response.data);
          setLoading(false);
          console.log(response.data);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    })
  }

  // async function getChapter() {
  //   const response = await fetch(
  //     `https://manganami.herokuapp.com/chapter/${url.mangaName}/${url.chapNo}/${url.number}`
  //   );

  //   const data = await response.json();
  //   console.log(data);
  //   setChapter(data);
  //   setLoading(false);
  //   console.log("Hello");
  // }

  useEffect(() => {
    getChapter(url);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white text-black dark:bg-gray-800 dark:text-white grid place-items-center w-screen h-screen">
        <div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white w-full h-full">
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="bg-primary-200 pb-10 order-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-40 rounded">
        <div className="min-h-screen mt-[-1px]">
          <div className="bg-white text-black dark:bg-gray-800 dark:text-white grid place-items-center w-full h-full">
            {chapter.mangaName} {" --- "}
            {chapter.currentChapter.chapterName}
            {chapter.chapterImages.map((chapter) => (
              <img src={chapter.imgUrl} alt="chapter-content"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
