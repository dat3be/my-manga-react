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

  let url = useParams();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white w-full h-full">
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="bg-primary-200 pb-10 order-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded">
        <div className="min-h-screen mt-[-1px]">
          <div className="flex flex-col lg:flex-row">
            <div className="pt-4 flex-1 text-text-color">
              <div className="mb-5 text-center">
                <h1 className="font-bold text-xl text-text-color">
                  {mangaDetails.mangaName}
                </h1>
                <p className="font-semibold text-gray-500">
                  Đã cập nhật lúc {mangaDetails.updatedAt}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="flex justify-center lg:mb-0 mb-4">
                  <div className="w-[190px] rounded-sm">
                    <img
                      className="border mt-4 rounded-md"
                      src={mangaDetails.posterUrl}
                      alt={mangaDetails.mangaName}
                    />
                  </div>
                </div>
                <div className="flex-1 lg:ml-10 ml-0">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap my-3">
                      <button>yeah</button>
                      <button>bae</button>
                      <button>love</button>
                      <button>you</button>
                    </div>
                    <button className="bg-blue-500 px-3 py-1 text-sm text-text-color rounded-md font-semibold">
                      Theo dõi
                    </button>
                  </div>
                  <ul>
                    <li className="flex text-lg font-semibold my-2">
                      <p className="w-[100px]">Tác giả: </p>
                      <p className="ml-4 flex-1">
                        {mangaDetails.otherDetails.authorName}
                      </p>
                    </li>
                    <li className="flex text-lg font-semibold my-2">
                      <p className="w-[100px]">Trạng thái:</p>
                      <p className="ml-4 flex-1">
                        {mangaDetails.otherDetails.status}
                      </p>
                    </li>
                    <li className="flex text-lg font-semibold my-2">
                      <p className="w-[100px]">Thể loại: </p>
                      <p className="ml-4 flex flex-wrap flex-1">
                        <button className="mb-3 mr-3 text-text-color px-2 text-sm py-1 rounded-md bg-blue-500">
                          Action
                        </button>
                        <button className="mb-3 mr-3 text-text-color px-2 text-sm py-1 rounded-md bg-blue-500">
                          Fantasy
                        </button>
                        <button className="mb-3 mr-3 text-text-color px-2 text-sm py-1 rounded-md bg-blue-500">
                          Manhua
                        </button>
                        <button className="mb-3 mr-3 text-text-color px-2 text-sm py-1 rounded-md bg-blue-500">
                          Shounen
                        </button>
                        <button className="mb-3 mr-3 text-text-color px-2 text-sm py-1 rounded-md bg-blue-500">
                          Supernatural
                        </button>
                        <button className="mb-3 mr-3 text-text-color px-2 text-sm py-1 rounded-md bg-blue-500">
                          Truyện Màu
                        </button>
                      </p>
                    </li>
                  </ul>
                  <div className="flex items-center mt-4">
                    <button className="bg-green-500 px-3 py-1 text-sm text-text-color rounded-md">
                      <a className="font-semibold">Đọc từ đầu</a>
                    </button>
                    <button className="bg-green-500 px-3 py-1 text-sm text-text-color rounded-md ml-5">
                      <a className="font-semibold">Đọc mới nhất</a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-blue-500 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <h1 className="text-xl font-semibold text-text-color">
                    Nội dung
                  </h1>
                </div>
                <p className="font-semibold mt-4">{mangaDetails.description}</p>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="w-6 h-6 text-blue-500 mr-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h1 className="text-xl font-semibold text-text-color">
                    Danh sách chương
                  </h1>
                </div>
              </div>

              <div className="border mt-4 text-text-color rounded-md">
                <ul className="w-full h-[350px] overflow-y-scroll">
                  <li>
                    <a className="flex items-center justify-between p-2">
                      <p className="font-semibold">Chapter 2713</p>
                      <p className="text-gray-500 text-sm">7 giờ trước</p>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-between p-2">
                      <p className="font-semibold">Chapter 2712</p>
                      <p className="text-gray-500 text-sm">7 giờ trước</p>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-between p-2">
                      <p className="font-semibold">Chapter 2711</p>
                      <p className="text-gray-500 text-sm">7 giờ trước</p>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-between p-2">
                      <p className="font-semibold">Chapter 2710</p>
                      <p className="text-gray-500 text-sm">7 giờ trước</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
