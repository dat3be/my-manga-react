import React from "react";
import { Link } from "react-router-dom";
import { handleReadManga } from './Details'

function MangaCard({ manga }) {
  return (
    <article className="manga-card" onClick={(e) => handleReadManga(e)}>
      <Link to={`/details/${manga.id}`}>
        <figure className="">
          <img src={manga.posterUrl} alt="manga-poster" />
        </figure>
        <h3>
          <strong className="text-gray-900 dark:text-white">
            {manga.mangaName.length > 30
              ? `${manga.mangaName.slice().substring(0, 27)}...`
              : `${manga.mangaName}`}
          </strong>
        </h3>
        <span id="chapterName">{manga.newestChapter.chapterName}</span>{" "}
        <span id="chapterUpdateAt">{manga.newestChapter.updatedAt}</span>
      </Link>
    </article>
  );
}

export default MangaCard;
