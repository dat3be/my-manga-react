import React from "react";

function MangaCard({ manga }) {
  return (
    <article className="manga-card">
      <a href="#" target="_blank" rel="noreferrer">
        <figure>
          <img src={manga.posterUrl} alt="Manga Image" />
        </figure>
        <h3>
          <strong>{manga.mangaName}</strong>
        </h3>
        <h4>
          {manga.newestChapter.chapterName}{" "}
          <i>{manga.newestChapter.updatedAt}</i>
        </h4>
      </a>
    </article>
  );
}

export default MangaCard;
