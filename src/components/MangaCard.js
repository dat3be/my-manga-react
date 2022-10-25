import React from "react";
import {Link} from "react-router-dom";
function MangaCard({ manga }) {
  return (
    <article className="manga-card">
      <Link to={`/details`}>
        <figure>
          <img src={manga.posterUrl} alt="manga-poster" />
        </figure>
        <h3>
          <strong class="text-gray-900 dark:text-white">
            {manga.mangaName}
          </strong>
        </h3>
        <span id="chapterName">{manga.newestChapter.chapterName}</span>{" "}
        <span id="chapterUpdateAt">{manga.newestChapter.updatedAt}</span>
      </Link>
    </article>
  );
}

export default MangaCard;
