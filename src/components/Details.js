import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import "../App.css";
import {
  IoBookOutline,
  IoFlashOutline,
  IoListSharp,
  IoLink,
  IoReader,
  IoArrowUp,
  IoArrowDown,
  IoMail,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoReddit,
} from "react-icons/io5";

export function handleReadManga(e) {
  e.preventDefault();
  console.log("Manga clicked! and Read");
}

function Details() {
  const [mangaDetails, setMangaDetails] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [listChapter, setListChapter] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let url = useParams();
  async function getMangaDetails() {
    const data = await fetch(
      `https://manganami.herokuapp.com/details/${url.mangaId}`
    );

    const response = await data.json();
    console.log(response);
    setMangaDetails(response);
    setListChapter(response.chapters);
    setLoading(false);
  }

  useEffect(() => {
    getMangaDetails(url);
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
                  <div className="w-[250px] rounded-sm">
                    <img
                      className="border mt-2 rounded-md w-full object-cover"
                      src={mangaDetails.posterUrl}
                      alt={mangaDetails.mangaName}
                    />
                  </div>
                </div>
                <div className="flex-1 lg:ml-10 ml-0">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap my-3">
                      <button className="h-8 w-8 object-cover">
                        <IoLogoFacebook size="25" />
                      </button>
                      <button className="h-8 w-8 object-cover">
                        <IoLogoTwitter size="25" />
                      </button>
                      <button className="h-8 w-8 object-cover">
                        <IoLogoReddit size="25" />
                      </button>
                      <button className="h-8 w-8 object-cover">
                        <IoMail size="25" />
                      </button>
                      <button
                        onClick={(e) => handleReadManga(e)}
                        className="w-8 h-8 rounded-full bg-primary-300 flex items-center justify-center"
                        alt="Sao chép liên kết"
                      >
                        <IoLink size="25" />
                      </button>
                    </div>
                    <button className="bg-blue-500 px-3 py-1 text-sm text-text-color rounded-md font-semibold transition-all hover:scale-[110%]">
                      Theo dõi
                    </button>
                  </div>
                  <ul>
                    <li className="flex text-lg font-semibold my-2 ">
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
                      <div className="flex gap-3 flex-wrap">
                        {mangaDetails.categories.map((category) => (
                          <p
                            className="bg-blue-500 px-3 py-1 text-sm rounded-md font-semibold transition-all hover:scale-[110%]"
                            key={category.categoryName}
                          >
                            <button>{category.categoryName}</button>
                          </p>
                        ))}
                      </div>
                    </li>
                  </ul>
                  <div className="flex mt-4 gap-4 flex-wrap my-3 text-white">
                    <Link to={`/read/${listChapter[0].chapterId}`}>
                      <button className="bg-green-500 px-3 py-1 text-sm text-text-color rounded-md font-semibold pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]">
                        <IoFlashOutline
                          size="20"
                          className="float-left align-baseline"
                        />
                        Chap mới
                      </button>
                    </Link>

                    <Link to={`/read/${listChapter[listChapter.length-1].chapterId}`}>
                      <button
                        className="px-3 py-1 text-sm text-text-color rounded-md font-semibold pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]  dark:bg-white bg-gray-dark dark:text-black text-white">
                        <IoBookOutline
                          size="20"
                          className="float-left align-baseline"
                        />
                        Đọc từ đầu
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <IoListSharp size="30" />
                  <h1 className="text-xl font-semibold text-text-color">
                    &nbsp;Tóm tắt
                  </h1>
                </div>
                <div className="mt-4 justify-between">
                  {mangaDetails.description}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <IoReader size="30" />
                  <h1 className="text-xl font-semibold text-text-color">
                    &nbsp;Danh sách chương
                  </h1>
                </div>
              </div>

              <div className="border mt-4 rounded-md">
                <ul className="w-full h-[350px] overflow-y-scroll">
                  <li>
                    <div className="flex items-center justify-between mt-4 p-2">

                        <button
                          className="flex
                          items-center
                          justify-between font-semibold"
                          onClick={() => {
                            setListChapter(listChapter.reverse());
                            setIsActive(!isActive);
                          }}
                        >
                          Sắp xếp chương{" "}
                          {isActive ? (
                            <IoArrowDown size="20" />
                          ) : (
                            <IoArrowUp size="20" />
                          )}
                        </button>

                      <div className="font-semibold">Lượt xem</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="break-after-auto p-2">
                        {listChapter.map((chapter) => (
                          <div
                            className="px-3 py-1 text-sm rounded-md transition-all hover:scale-[103%]"
                            key={chapter.chapterName}
                          >
                            <Link to={`/read/${chapter.chapterId}`}>
                              {chapter.chapterName.length > 30
                                ? `${chapter.chapterName
                                    .slice()
                                    .substring(0, 27)}...`
                                : `${chapter.chapterName}`}
                            </Link>
                          </div>
                        ))}
                      </div>

                      <div className="text-gray-500 text-sm break-after-auto p-2">
                        {listChapter.map((chapter) => (
                          <div
                            className="px-3 py-1 text-sm rounded-md"
                            key={chapter.viewCount}
                          >
                            {chapter.viewCount}
                          </div>
                        ))}
                      </div>

                      {/* <div className="text-gray-500 text-sm break-after-auto p-2 hidden:sm">
                        {listChapter.map((chapter) => (
                          <div
                            className="px-3 py-1 text-sm rounded-md"
                            key={chapter.updatedAt}
                          >
                            {chapter.updateAt}
                          </div>
                        ))}
                      </div> */}
                    </div>
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
