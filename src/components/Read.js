import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import * as config from "../config/config";
import { Modal } from "./Modal";

export function handleReadManga(e) {
  e.preventDefault();
  console.log("Chapter clicked! and Read");
}

export function nextChapter() {
  console.log("Next Chapter");
}

export function prevChapter() {
  console.log("Previous Chapter");
}

export function openModal() {
  <Modal />;
}

function Read() {
  let url = useParams();
  const [chapter, setChapter] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function getChapter() {
    return new Promise(async (resolve, reject) => {
      await axios({
        authority: config.API_URL,
        method: "GET",
        scheme: "https",
        url: `${config.API_URL}/chapter/${url.mangaName}/${url.chapNo}/${url.number}`,
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
    });
  }

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
          <ul className="font-bold bg-white text-black dark:bg-gray-800 dark:text-white grid place-items-center w-full h-full">
            <div class="flex p-[0.5rem] items-center justify-center text-text-0">
              <Link
                to={"/"}
                className="p-3 md:p-2 mx-2 xs:mx-[0.125rem] rounded-lg bg-background-3 text-xl lg:text-2xl"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                </svg>
              </Link>

              <button
                className="p-3 md:p-2 mx-2 xs:mx-[0.125rem] rounded-lg text-text-1 bg-background-3 text-xl lg:text-2xl"
                disabled=""
                onClick={prevChapter}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                </svg>
              </button>
              <button className="flex items-center justify-center w-[144px] p-3 md:px-3 md:py-2 mx-2 xs:mx-[0.125rem] rounded-lg text-sm text-text-0 bg-background-3 lg:text-base">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="mr-2 text-base"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
                </svg>
                Chapter 100
              </button>
              <button
                className="p-3 md:p-2 mx-2 xs:mx-[0.125rem] rounded-lg text-text-1 bg-background-3 text-xl lg:text-2xl !text-text-0"
                onClick={nextChapter}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                </svg>
              </button>
              <Link
                to={"/"}
                className="p-3 md:p-2 mx-2 xs:mx-[0.125rem] rounded-lg bg-background-3 text-xl lg:text-2xl"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
                </svg>
              </Link>
            </div>

            <h1 className="text-2xl">{chapter.mangaName}</h1>
            <h2 className="text-xl">{chapter.currentChapter.chapterName}</h2>
            {chapter.chapterImages.map((chapter, index) => (
              <li>
                <img
                  className="object-cover h-[12rem] transition-all duration-500 w-full !h-full"
                  src={chapter.imgUrl}
                  alt={chapter.title}
                  key={index}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Read;
