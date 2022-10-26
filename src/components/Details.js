import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "../App.css";

export function handleReadManga(e) {
  e.preventDefault();
  console.log("Manga clicked! and Read");
}

function Details() {
  const [mangaDetails, setMangaDetails] = useState({});
  const [mangaChapters, setMangaChapters] = useState([]);
  const [mangaImages, setMangaImages] = useState([]);

  let url = useParams();
  let mangaId = url.url;
  async function getMangaDetails() {
    const data = await fetch(
      `https://manganami.herokuapp.com/details/${url.url}`
    );
    const response = await data.json();
    console.log(response);
    setMangaDetails(response);
  }

  useEffect(() => {
    getMangaDetails(url);
  }, []);

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white w-full h-full">
      <div className="flex flex-col min-h-screen ">
        {/* <Header /> */}
        <div className="w-screen fixed bg-transparent top-0 transition-all duration-500 z-50">
          <Header />
        </div>
        <div className="flex-1 bg-background-1">
          <div className="w-full">
            <div className="relative pt-24 pb-20">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-no-repeat bg-cover opacity-70 blur-xl before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b from-transparent to-background-1"></div>
              </div>
              <div className="m-auto px-4 max-w-7xl lg:max-w-4xl md:max-w-2xl">
                <div className="w-full flex items-center md:flex-col z-10">
                  <div className="w-3/12 lg:w-4/12 md:w-8/12 md:mb-4 mr-12 md:mr-0 rounded-2xl overflow-hidden">
                    <div className="relative pt-[160%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={mangaDetails.posterUrl}
                        alt={mangaDetails.mangaName}
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-text-0 z-[1]">
                    <h2 class="mb-6 text-2xl font-bold line-clamp-2">
                      {mangaDetails.mangaName}
                    </h2>
                    <p class="mb-4 line-clamp-5 md:line-clamp-6">
                      {mangaDetails.description}
                    </p>
                    <h3 class="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="font-bold text-lg mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                        ></path>
                        <path
                          fill="none"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                        ></path>
                      </svg>
                      Tác giả: {mangaDetails.otherDetails.authorName}
                    </h3>
                    <h3 class="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class="font-bold text-lg mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0012 4zM2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17l-9.08-9.1z"></path>
                      </svg>
                      Trạng thái: {mangaDetails.otherDetails.status}
                    </h3>
                    <h3 class="flex items-center mb-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="font-bold text-lg mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                      </svg>
                      Xếp hạng: {mangaDetails.otherDetails.ratingValue} (
                      {mangaDetails.otherDetails.ratingCount} bình chọn)
                    </h3>

                    <div class="flex flex-wrap mb-4">
                      <a
                        class="px-[0.5rem] py-[0.25rem] mr-2 mb-2 border-2 border-solid border-white rounded-lg hover:border-primary hover:text-primary transition-all"
                        href="/?category=comedy"
                      >
                        Comedy
                      </a>
                    </div>

                    <div class="flex flex-wrap">
                      <a
                        class="px-4 py-2 mr-2 mb-2 rounded-lg bg-primary hover:bg-secondary transition-all"
                        title="Chapter 1: Bản nhạc của kẻ đi dạo đêm"
                        href="/reading/yofukashi-no-uta/chap-1/507249"
                      >
                        Đọc từ đầu
                      </a>
                      <a
                        class="px-4 py-2 mr-2 mb-2 rounded-lg bg-primary hover:bg-secondary transition-all"
                        title="Chapter 103"
                        href="/reading/yofukashi-no-uta/chap-103/916989"
                      >
                        Đọc mới nhất
                      </a>
                      <button class="px-4 py-2 mr-2 mb-2 rounded-lg bg-primary hover:bg-secondary transition-all">
                        Thêm vào thư viện
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto px-4 max-w-7xl lg:max-w-4xl md:max-w-2xl">
              <h2 className="flex items-center mb-4 text-xl text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
                </svg>
                Danh sách Chapter:
              </h2>
              <div className="max-h-[70vh] w-full mb-4 p-4 md:p-2 rounded-lg bg-background-3 scrollbar">
                <table className="table-auto w-full text-white">
                  <thead>
                    <tr>
                      <td className="font-bold p-2 w-5/12 sm:w-7/12">
                        <button className="flex items-center hover:text-primary transition">
                          Chapter
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 320 512"
                            class="ml-[0.25rem]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
                          </svg>
                        </button>
                      </td>
                      <td className="font-bold p-2 w-4/12 text-center sm:w-5/12">
                        Cập nhật
                      </td>
                      <td className="font-bold p-2 w-3/12 text-center">Xem</td>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
